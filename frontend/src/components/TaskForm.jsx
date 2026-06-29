import { useState } from "react";
import API from "../services/api";

function TaskForm({ setTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter task title");
      return;
    }

    try {

      setLoading(true);

      const res = await API.post("/", {
        title,
        description,
        priority,
      });

      alert("Task Added Successfully!");

      setTasks((prevTasks) => [
        res.data.data,
        ...prevTasks,
      ]);

      setTitle("");
      setDescription("");
      setPriority("Medium");

    } catch (error) {

      alert("Something went wrong.");
      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>

    </form>
  );
}

export default TaskForm;