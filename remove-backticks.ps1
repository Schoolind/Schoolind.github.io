# Script to remove backticks from iframe tags in HTML files

# Get all HTML files in the games directory
$files = Get-ChildItem -Path "c:\Users\kbrum\Code\Schooluk\games" -Filter "*.html" -File -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace backtick followed by <iframe with just <iframe
    $newContent = $content -replace '`<iframe', '<iframe'
    
    # Only write back if there were changes
    if ($newContent -ne $content) {
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Fixed iframe in: $($file.FullName)"
    }
}

Write-Host "Backtick removal complete."
