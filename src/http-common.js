import axios from "axios";

export default axios.create({
    baseURL: "https://project-of-teacher-be.onrender.com/api",
    headers: {
        "Content-type": "application/json",
    },
});
