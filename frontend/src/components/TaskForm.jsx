import { useState } from "react";
import API from "../services/api";

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.post("/", {
      title,
      description,
      priority,
    });

    alert("Task Added Successfully!");

    setTitle("");
    setDescription("");
    setPriority("Medium");

    window.location.reload();
  } catch (error) {
    console.error("Error adding task:", error);
  }
};
    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <button>Add Task</button>

        </form>

    )

}

export default TaskForm;