# 📝 Todo App - Vue.js + Express.js

A beautiful and functional Todo application built with Vue.js frontend and Express.js backend, featuring js-beautify for code formatting.

## 🚀 Features

- ✅ **Add new todos**
- ✅ **Mark todos as complete/incomplete**
- ✅ **Delete todos**
- ✅ **Real-time statistics** (Total, Completed, Pending)
- ✅ **Beautiful responsive UI**
- ✅ **Error handling**
- ✅ **Code formatting with js-beautify**

## 🛠️ Tech Stack

- **Frontend:** Vue.js 3
- **Backend:** Node.js + Express.js
- **Styling:** CSS3 with modern design
- **Code Formatting:** js-beautify

## 📁 Project Structure

```
todo-app/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   └── beautify.js
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Getting Started from GitHub

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/todo-app.git
   cd todo-app
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3000`

2. **Start the frontend server (in a new terminal):**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:8080`

3. **Open your browser and navigate to:**
   ```
   http://localhost:8080
   ```

### Alternative: Using the Start Script

If you're on Windows, you can use the provided batch file:
```bash
start.bat
```

This will automatically install dependencies and start both servers.

## 🎨 Using js-beautify

The project includes js-beautify for code formatting:

```bash
cd frontend
npm run beautify
```

This will format both `app.js` and `server.js` files with proper indentation and spacing.

## 📡 API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo

## 🎯 Usage

1. **Adding a Todo:**
   - Type your todo in the input field
   - Press Enter or click "Add Todo"

2. **Completing a Todo:**
   - Click the checkbox next to any todo

3. **Deleting a Todo:**
   - Click the trash icon (🗑️) next to any todo

4. **Viewing Statistics:**
   - See total, completed, and pending todos at the top

## 🔧 Development

### Backend Development

The backend uses:
- **Express.js** for the web server
- **CORS** for cross-origin requests
- **Body-parser** for JSON parsing
- **Nodemon** for development auto-reload

### Frontend Development

The frontend uses:
- **Vue.js 3** for reactive UI
- **Fetch API** for HTTP requests
- **CSS3** for modern styling
- **Responsive design** for mobile compatibility

## 🎨 Customization

### Styling

Edit `frontend/style.css` to customize the appearance:
- Colors and gradients
- Typography
- Layout and spacing
- Animations and transitions

### Functionality

Edit `frontend/app.js` to add new features:
- Filtering todos
- Sorting options
- Local storage persistence
- Additional todo properties

## 🐛 Troubleshooting

### Common Issues

1. **Backend not starting:**
   - Check if port 3000 is available
   - Ensure all dependencies are installed

2. **Frontend can't connect to backend:**
   - Verify backend is running on port 3000
   - Check browser console for CORS errors

3. **Dependencies not found:**
   - Run `npm install` in both backend and frontend directories

### Error Messages

- **"Failed to load todos"** - Backend server is not running
- **"Failed to add todo"** - Network or server error
- **"Failed to update todo"** - Todo ID not found
