import axios from "axios";

const API = axios.create({

    baseURL:"https://mongo-db-project.onrender.com"

});

export default API;
