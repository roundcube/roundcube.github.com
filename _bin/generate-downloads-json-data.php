#!/usr/bin/env php
<?php

if (!isset($argv[1]) || !isset($argv[2])) {
    echo 'Usage: ' . basename(__FILE__) . " BASEDIR_OF_TARBALLS VERSION\n";
    exit(1);
}

if (!is_dir($argv[1])) {
    echo "Error! Invalid directory: {$argv[1]}\n";
    exit(1);
}

$basedir = $argv[1];
$version = $argv[2];

function human_file_size($byte)
{
    $factor = floor((strlen($byte) - 1) / 3);
    if ($factor > 0) {
        $sz = 'KMGT';
    }
    return sprintf('%.1f', $byte / 1024 ** $factor) . ' ' . @$sz[$factor - 1] . 'B';
}

function generate_data($version, $package_name, $basedir, $filename)
{
    $filepath = join(DIRECTORY_SEPARATOR, [$basedir, $filename]);
    $sum = hash_file('sha256', $filepath);
    $size = human_file_size(filesize($filepath));
    return [
        'package' => $package_name,
        'url' => "https://github.com/roundcube/roundcubemail/releases/download/{$version}/{$filename}",
        'size' => $size,
        'checksum' => $sum,
    ];
}

echo json_encode([
    generate_data($version, 'Dependent', $basedir, "roundcubemail-{$version}.tar.gz"),
    generate_data($version, 'Complete', $basedir, "roundcubemail-{$version}-complete.tar.gz"),
    generate_data($version, 'Framework', $basedir, "roundcube-framework-{$version}.tar.gz"),
], \JSON_PRETTY_PRINT | \JSON_UNESCAPED_SLASHES) . "\n";
