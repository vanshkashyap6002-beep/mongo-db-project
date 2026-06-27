import { useState } from "react";
import API from "../services/api";

function SearchBar({ setTasks }) {
  const [keyword, setKeyword] = useState("");

  const searchTask = async (e) => {
    const value = e.target.value;
    setKeyword(value);

    try {
      if (value === "") {
        const res = await API.get("/");
        setTasks(res.data.data);
      } else {
        const res = await API.get(`/search?keyword=${value}`);
        setTasks(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search Task..."
      value={keyword}
      onChange={searchTask}
    />
  );
}

export default SearchBar;