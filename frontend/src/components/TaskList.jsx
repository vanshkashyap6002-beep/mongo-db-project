import { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks }) {

  const [error, setError] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {

      const res = await API.get("/");

      setTasks(res.data.data);

      setError("");

    } catch (error) {

      setError("Unable to fetch tasks.");

      console.log(error);

    }
  };

  return (
    <div>

      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px"
          }}
        >
          {error}
        </p>
      )}

      {tasks.length > 0 ? (

        tasks.map((task) => (

          <TaskCard
            key={task._id}
            task={task}
            setTasks={setTasks}
          />

        ))

      ) : (

        <p
          style={{
            marginTop: "20px"
          }}
        >
          No Tasks Found
        </p>

      )}

    </div>
  );

}

export default TaskList;