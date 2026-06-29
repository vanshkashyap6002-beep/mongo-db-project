import { useState } from "react";
import API from "../services/api";

function SearchBar({ setTasks }) {

  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const searchTask = async (e) => {

    const value = e.target.value;

    setKeyword(value);

    try {

      setLoading(true);

      let res;

      if (value.trim() === "") {

        res = await API.get("/");

      } else {

        res = await API.get(
          `/search?keyword=${value}`
        );

      }

      setTasks(res.data.data);

    } catch (error) {

      alert("Search Failed");

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div>

      <input
        type="text"
        placeholder="Search Task..."
        value={keyword}
        onChange={searchTask}
      />

      {loading && (
        <p>Searching...</p>
      )}

    </div>

  );

}

export default SearchBar;