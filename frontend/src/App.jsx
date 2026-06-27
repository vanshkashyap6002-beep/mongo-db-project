import { useState } from 'react'
import './App.css'

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <h1>My Todo List</h1>

      <SearchBar setTasks={setTasks} />

      <TaskForm />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
