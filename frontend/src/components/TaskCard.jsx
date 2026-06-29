import API from "../services/api";

function TaskCard({ task, setTasks }) {

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

  // Edit Task
  const updateTask = async () => {

    const title = prompt(
      "Enter New Title",
      task.title
    );

    if (!title) return;

    try {

      const res = await API.put(
        `/${task._id}`,
        {
          title,
        }
      );

      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item._id === task._id
            ? res.data.data
            : item
        )
      );

      alert("Task Updated Successfully!");

    } catch (error) {

      alert("Unable to update task.");

      console.log(error);

    }

  };

  // Change Status
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

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority :</strong> {task.priority}
      </p>

      <p>
        <strong>Status :</strong> {task.status}
      </p>

      <button onClick={updateStatus}>
        Change Status
      </button>

      <button onClick={updateTask}>
        Edit
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>

    </div>
  );
}

export default TaskCard;