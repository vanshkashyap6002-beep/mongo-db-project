# 📝 MERN To-Do List Application

A full-stack To-Do List application built using the MERN stack. This project was created as part of my learning journey to understand how React communicates with a Node.js backend and how data is stored and managed using MongoDB.

The application allows users to create, view, update, delete, search, and manage tasks through a simple and responsive interface.

---

## 🚀 Features

* Create a new task
* View all tasks
* Update existing tasks
* Delete tasks
* Update task status (Pending / Completed)
* Search tasks by keyword
* MongoDB Atlas database integration
* RESTful API using Express.js
* Responsive React frontend
* Error handling and request validation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Development Tools

* VS Code
* Thunder Client
* Git & GitHub

---

## 📂 Project Structure

```text
Todo-App
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── index.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   ├── services
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## ⚙️ Installation

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URL=
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Testing

The backend APIs were tested using Thunder Client to verify:

* Create Task
* Fetch All Tasks
* Update Task
* Delete Task
* Update Status
* Search Task

---

## 💡 Challenges Faced

During the development of this project, I faced several practical issues such as:

* Connecting MongoDB Atlas with the backend
* Fixing DNS and connection errors
* Handling API request and response errors
* Connecting the React frontend with the Express backend
* Managing component communication and API integration
* Debugging CRUD operations and displaying data correctly

These challenges helped me understand the MERN stack more deeply and improved my debugging skills.

---

## 📚 Learning Outcome

Through this project, I gained hands-on experience with:

* REST API development
* Express.js routing
* MongoDB CRUD operations
* React component structure
* Axios API integration
* State management using React Hooks
* Error handling and validation
* Project organization using MVC architecture

---

## 🤖 AI Assistance

This project was developed by me as part of my learning journey.

AI tools were used as learning assistants to help me understand concepts, debug issues, improve code quality, and organize the project. The implementation, testing, debugging, and final integration were completed by me after understanding the solutions.

This README was also generated with AI assistance and then reviewed to provide a clear and structured overview of the project.

---

## 👨‍💻 Author

**Vansh Kashyap**

vercel link: https://mongo-db-project-seven.vercel.app/
render link: https://mongo-db-project.onrender.com/

---

⭐ Thank you for checking out this project! Any feedback or suggestions are always welcome.
