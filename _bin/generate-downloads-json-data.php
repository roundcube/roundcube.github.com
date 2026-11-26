#!/usr/bin/env php
<?php

/**
 * Retrieve release assest from the GitHub API
 */
define('GITHUB_API', 'https://api.github.com/repos/roundcube/roundcubemail');

if (!isset($argv[1])) {
    echo 'Usage: ' . basename(__FILE__) . " VERSION\n";
    exit(1);
}

$version = $argv[1];

/**
 * Make an HTTP GET request and decode the JSON response.
 */
function apiRequest($url)
{
    $ch = curl_init($url);

    if ($ch === false) {
        throw new RuntimeException('Unable to initialise cURL');
    }

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => [
            'Accept: application/json',
        ],
        CURLOPT_USERAGENT => 'roundcube-website/1.0',
    ]);

    $response = curl_exec($ch);

    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);

        throw new RuntimeException(
            sprintf('Request failed: %s', $error)
        );
    }

    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    if ($status < 200 || $status >= 300) {
        throw new RuntimeException(
            sprintf(
                'Request failed with HTTP %d: %s',
                $status,
                $url
            )
        );
    }

    $data = json_decode($response, true);

    if (!is_array($data)) {
        throw new RuntimeException(
            sprintf(
                'Invalid JSON returned by %s',
                $url
            )
        );
    }

    return $data;
}

function retrieveAssets($version)
{
    $url = GITHUB_API . '/releases/tags/' . rawurlencode($version);
    $data = apiRequest($url);

    if (!isset($data['assets']) || !is_array($data['assets'])) {
        throw new RuntimeException(
            sprintf(
                'Unable to resolve version "%s" for %s',
                $constraint,
                $package
            )
        );
    }

    return $data['assets'];
}

function humanFileSize($byte)
{
    $factor = floor((strlen($byte) - 1) / 3);
    if ($factor > 0) {
        $sz = 'KMGT';
    }

    return sprintf('%.1f', $byte / 1024 ** $factor) . ' ' . @$sz[$factor - 1] . 'B';
}

function generateData($github_assets, $version, $package_name, $filename)
{
    $asset = array_filter($github_assets, function ($item) use ($filename) {
        return ($item['name'] ?? null) === $filename;
    });

    if (empty($asset)) {
        throw new RuntimeException(
            sprintf(
                'Cannot locate file %s in asset list',
                $filename
            )
        );
    }

    $meta = reset($asset);
    if (!str_starts_with($meta['digest'], 'sha256:')) {
        throw new RuntimeException(
            sprintf(
                'Cannot locate SHA256 checksom for %s',
                $filename
            )
        );
    }

    $url = $meta['browser_download_url'];
    $size = humanFileSize($meta['size']);
    $checksum = substr($meta['digest'], 7);

    return [
        'package' => $package_name,
        'url' => $url,
        'version' => $version,
        'size' => $size,
        'checksum' => $checksum,
    ];
}

$github_assets = retrieveAssets($version);

echo json_encode([
    generateData($github_assets, $version, 'Dependent', "roundcubemail-{$version}.tar.gz"),
    generateData($github_assets, $version, 'Complete', "roundcubemail-{$version}-complete.tar.gz"),
    generateData($github_assets, $version, 'Framework', "roundcube-framework-{$version}.tar.gz"),
], \JSON_PRETTY_PRINT | \JSON_UNESCAPED_SLASHES) . "\n";
