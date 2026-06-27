import API from "../services/api";

function TaskCard({ task }) {
  const deleteTask = async () => {
    await API.delete(`/${task._id}`);
    window.location.reload();
  };
const updateTask = async () => {

    const title = prompt(
        "Enter New Title",
        task.title
    );

    if (!title) return;

    await API.put(`/${task._id}`,{
        title
    });

    window.location.reload();

}
  const updateStatus = async () => {
    const newStatus =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    await API.patch(`/${task._id}/status`, {
      status: newStatus,
    });

    window.location.reload();
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>{task.priority}</p>

      <p>{task.status}</p>

      <button onClick={updateStatus}>
        Change Status
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>
      <button onClick={updateTask}>
    Edit
</button>
    </div>
  );
}

export default TaskCard;