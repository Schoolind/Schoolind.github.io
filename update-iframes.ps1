<#
.SYNOPSIS
    Replaces iframe src URLs that start with "https://Schooluk" to "https://schoolind" in all HTML files.

.DESCRIPTION
    Recursively scans the specified directory (current directory by default) for *.html files.
    If any <iframe> tag contains a src attribute that begins with "https://Schooluk", the script
    replaces that part of the URL with "https://schoolind" and overwrites the file.

.PARAMETER Path
    Root directory to start scanning. Defaults to the current directory (.)

.EXAMPLE
    PS> ./update-iframes.ps1            # Run in the current directory
    PS> ./update-iframes.ps1 -Path ..   # Run one level up

#>

param(
    [string]$Path = "."
)

if (-not (Test-Path -Path $Path)) {
    Write-Error "The specified path '$Path' does not exist."
    exit 1
}

# Regex pattern breakdown:
# (1) <iframe            : Matches the opening tag
# (2) [^>]*?             : Non-greedy match for any attributes until we reach src
# (3) src\s*=\s*         : Matches src attribute with optional whitespace
# (4) [\'\"]?            : Optional opening quote (single or double)
# We capture the part up to 'https://Schooluk' so we can keep the original quote if present.
# After the capture group, we directly match the literal "https://Schooluk" to replace it.
# Match iframe tags with src starting with https://Schooluk (case-insensitive)
$pattern = '(?i)(<iframe[^>]*?src\s*=\s*["\'']?)https://Schooluk'

Get-ChildItem -Path $Path -Recurse -Include *.html | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content -Path $file -Raw
    $newContent = $content -replace $pattern, '`$1https://schoolind'

    if ($newContent -ne $content) {
        Set-Content -Path $file -Value $newContent -Encoding UTF8
        Write-Host "Updated iframe src in: $file"
    }
}
