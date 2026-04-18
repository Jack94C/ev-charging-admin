@echo off
REM 启动后台统计系统服务器
cd /d "%~dp0"
if exist "%ProgramFiles%\Python39\python.exe" (
    "%ProgramFiles%\Python39\python.exe" -m http.server 8000
) else if exist "%ProgramFiles%\Python38\python.exe" (
    "%ProgramFiles%\Python38\python.exe" -m http.server 8000
) else if exist "%ProgramFiles%\Python37\python.exe" (
    "%ProgramFiles%\Python37\python.exe" -m http.server 8000
) else (
    echo 未找到Python，请手动启动服务器
    pause
)
