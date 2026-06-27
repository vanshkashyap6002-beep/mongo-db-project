import { useEffect } from "react";
import API from "../services/api";
import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;