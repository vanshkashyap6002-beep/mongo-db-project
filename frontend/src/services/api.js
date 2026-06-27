import axios from "axios";

const API = axios.create({

    baseURL:"https://mongo-db-project-seven.vercel.app/"

});

export default API;
