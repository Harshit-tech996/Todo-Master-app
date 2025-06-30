@echo off
echo Starting Todo App...
echo.

echo Starting Backend Server (Express.js)...
start "Backend Server" cmd /k "cd backend && npm run dev"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Server (Vue.js)...
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo 🎉 Todo App is starting!
echo.
echo Backend: http://localhost:3000
echo Frontend: http://localhost:8080
echo.
echo Opening frontend in your browser...
timeout /t 2 /nobreak > nul
start http://localhost:8080

echo.
echo Press any key to close this window...
pause > nul 