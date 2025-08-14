@echo off
set CONTENT_DIR=md
set OUTPUT_DIR=p
set TEMPLATE=templates/post-template.html

REM 1. Clear output folder
if exist %OUTPUT_DIR% rmdir /s /q %OUTPUT_DIR%
mkdir %OUTPUT_DIR%

REM 2. Loop through markdown files
for %%f in (%CONTENT_DIR%\*.md) do (
    set "filename=%%~nf"
    call pandoc "%%f" --template=%TEMPLATE% --metadata title="%%~nf" -o "%OUTPUT_DIR%\%%~nf.html"
    echo Built %%~nf.html
)

echo ✅ All Markdown files built into %OUTPUT_DIR%
