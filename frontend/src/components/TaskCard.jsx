import { useState } from "react";
import API from "../services/api";

function TaskCard({ task, setTasks }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  // Delete Task
  const deleteTask = async () => {
    try {

      await API.delete(`/${task._id}`);

      setTasks((prevTasks) =>
        prevTasks.filter(
          (item) => item._id !== task._id
        )
      );

      alert("Task Deleted Successfully!");

    } catch (error) {

      alert("Unable to delete task.");
      console.log(error);

    }
  };

  // Save Edited Task
  const saveTask = async () => {

    if (title.trim() === "") {
      alert("Title cannot be empty");
      return;
    }

    try {

      const res = await API.put(
        `/${task._id}`,
        {
          title,
          description: task.description,
          priority: task.priority,
        }
      );

      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item._id === task._id
            ? res.data.data
            : item
        )
      );

      setIsEditing(false);

      alert("Task Updated Successfully!");

    } catch (error) {

      alert("Unable to update task.");
      console.log(error);

    }
  };

  // Update Status
  const updateStatus = async () => {

    const newStatus =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    try {

      const res = await API.patch(
        `/${task._id}/status`,
        {
          status: newStatus,
        }
      );

      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item._id === task._id
            ? res.data.data
            : item
        )
      );

    } catch (error) {

      alert("Unable to update status.");
      console.log(error);

    }
  };

  return (

    <div className="task-card">

      {isEditing ? (

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

      ) : (

        <h3>{task.title}</h3>

      )}

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <button onClick={updateStatus}>
        Change Status
      </button>

      {isEditing ? (

        <button onClick={saveTask}>
          Save
        </button>

      ) : (

        <button
          onClick={() =>
            setIsEditing(true)
          }
        >
          Edit
        </button>

      )}

      <button onClick={deleteTask}>
        Delete
      </button>

    </div>

  );
}

export default TaskCard;