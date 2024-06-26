import axios from "axios";

const API_URL = "https://project-of-teacher-be.onrender.com/api/auth/";

const employeeregister = (username, email, password) => {
    return axios.post(API_URL + "employeesignup", {
        username,
        email,
        password,
    });
};

const employerregister = (username, email, password) => {
    return axios.post(API_URL + "employersignup", {
        username,
        email,
        password,
    });
};
const adminregister = (username, email, password) => {
    return axios.post(API_URL + "adminsignup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log(response.data);
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    employeeregister,
    employerregister,
    adminregister,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;
