@echo off
title AtlasPath Dev Server
cd /d "c:\Users\enosh\OneDrive\Documents\atlaspath"
echo Starting AtlasPath dev server...
echo Open http://localhost:4321 in your browser
echo.
npx astro dev --host 0.0.0.0
pause
