import { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "./TaskCard";

function TaskList({ tasks = [], setTasks }) {

  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {

      const res = await API.get("/");

      setTasks(res.data.data);

      setError("");

    } catch (error) {

      setError("Unable to load tasks.");

      console.log(error);

    }
  };

  return (
    <div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            setTasks={setTasks}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;