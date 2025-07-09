$gamesPath = Join-Path -Path $PSScriptRoot -ChildPath "shows"
$scriptToAdd = '    <script src="../../scripts/panic-button.js"></script>'

# Get all HTML files in the games directory and its subdirectories
$htmlFiles = Get-ChildItem -Path $gamesPath -Filter "*.html" -File -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Check if the script is already included
    if ($content -notmatch [regex]::Escape($scriptToAdd)) {
        # Insert the script before the closing </body> tag
        $newContent = $content -replace '(\s*</body>)', "`n$scriptToAdd`n`$1"
        
        # Write the changes back to the file
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Added panic button script to: $($file.FullName)"
    } else {
        Write-Host "Skipped (already exists): $($file.FullName)"
    }
}

Write-Host "Script execution completed."
