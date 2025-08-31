# PowerShell script to update font definitions in all numbered HTML files

# Get all numbered HTML files
$htmlFiles = Get-ChildItem -Path "." -Name "*.html" | Where-Object { $_ -match "^[01]+\.html$" }

# Font definitions to add
$fontDefinitions = @"
        /* Local font definitions */
        @font-face {
            font-family: 'Faruma';
            src: url('Fonts/Faruma.ttf') format('truetype');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Montserrat';
            src: url('Fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
        }
        
"@

foreach ($file in $htmlFiles) {
    Write-Host "Processing $file..."
    
    # Read the file content
    $content = Get-Content -Path $file -Raw
    
    # Add font definitions after <style>
    $content = $content -replace "<style>", "<style>`n$fontDefinitions"
    
    # Update font-family references
    $content = $content -replace "font-family: 'SF-Pro', Arial, sans-serif;", "font-family: 'Montserrat', 'SF-Pro', Arial, sans-serif;"
    
    # Write back to file
    Set-Content -Path $file -Value $content -NoNewline
    
    Write-Host "Updated $file"
}

Write-Host "Font updates completed for all numbered HTML files!"
