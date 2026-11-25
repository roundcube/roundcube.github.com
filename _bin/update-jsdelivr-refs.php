#!/usr/bin/env php
<?php

/**
 * Resolve CDN dependencies using the jsDelivr API.
 */
define('BASE_PATH', realpath(__DIR__ . '/..') . '/');
define('JSDELIVR_API', 'https://data.jsdelivr.com/v1');
define('JSDELIVR_CDN', 'https://cdn.jsdelivr.net/npm');

$cfgfile = BASE_PATH . 'jsdelivr.json';
$refs = json_decode(file_get_contents($cfgfile), true);

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

/**
 * Resolve a version constraint to a concrete version.
 *
 * jsDelivr handles the version/semver resolution.
 */
function resolveVersion($package, $constraint)
{
    $url = JSDELIVR_API . '/packages/npm/' . rawurlencode($package) . '/resolved?specifier=' . rawurlencode($constraint);
    $data = apiRequest($url);

    if (!isset($data['version']) || !is_string($data['version'])) {
        throw new RuntimeException(
            sprintf(
                'Unable to resolve version "%s" for %s',
                $constraint,
                $package
            )
        );
    }

    return $data['version'];
}

/**
 * Get the package metadata and file listing for a
 * specific version.
 */
function getPackageFiles($package, $version)
{
    $url = JSDELIVR_API . '/packages/npm/' . rawurlencode($package) . '@' . rawurlencode($version);
    $data = apiRequest($url);

    if (!isset($data['files']) || !is_array($data['files'])) {
        throw new RuntimeException(
            sprintf(
                'No file listing returned for %s@%s',
                $package,
                $version
            )
        );
    }

    return $data['files'];
}

/**
 * Flatten the jsDelivr file tree into a path => metadata array.
 */
function flattenFiles($files, $prefix = '')
{
    $result = [];

    foreach ($files as $file) {
        if (!isset($file['name'])) {
            continue;
        }

        $name = $file['name'];
        $path = $prefix . '/' . ltrim($name, '/');

        if (($file['type'] ?? null) === 'directory') {
            if (isset($file['files']) && is_array($file['files'])) {
                $result += flattenFiles($file['files'], $path);
            }

            continue;
        }

        $result[$path] = $file;
    }

    return $result;
}

/**
 * Process all dependencies and return the resolved
 * CDN configuration.
 */
function processDependencies($refs)
{
    $result = [];

    foreach ($refs as $name => $dependency) {
        $package = $dependency['package'];

        if (!isset($dependency['version'])) {
            throw new RuntimeException(sprintf('No version specified for %s', $package));
        }

        $requestedVersion = $dependency['version'];
        $resolvedVersion = resolveVersion($package, $requestedVersion);
        $files = getPackageFiles($package, $resolvedVersion);
        $availableFiles = flattenFiles($files);

        foreach (['css', 'js'] as $type) {
            if (empty($dependency[$type]) || !is_array($dependency[$type])) {
                continue;
            }

            $result[$name][$type] = [];

            foreach ($dependency[$type] as $file) {
                if (!isset($availableFiles[$file])) {
                    throw new RuntimeException(
                        sprintf(
                            'File does not exist: %s@%s%s',
                            $name,
                            $resolvedVersion,
                            $file
                        )
                    );
                }

                $fileInfo = $availableFiles[$file];

                if (!isset($fileInfo['hash'])|| !is_string($fileInfo['hash'])) {
                    throw new RuntimeException(
                        sprintf(
                            'No hash available for: %s@%s%s',
                            $name,
                            $resolvedVersion,
                            $file
                        )
                    );
                }

                $result[$name][$type][] = [
                    'url' => JSDELIVR_CDN . '/' . $package . '@' . $resolvedVersion . $file,
                    'sri' => 'sha256-' . $fileInfo['hash'],
                ];
            }
        }
    }

    return $result;
}


try {
    $resolved = processDependencies($refs);
    foreach ($resolved as $package => $types) {
        echo "    {$package}:" . PHP_EOL;

        foreach ($types as $type => $files) {
            echo "        {$type}:" . PHP_EOL;

            foreach ($files as $file) {
                echo "            url: '{$file['url']}'" . PHP_EOL;
                echo "            sri: '{$file['sri']}'" . PHP_EOL;
            }
        }
    }
} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . PHP_EOL);
    exit(1);
}