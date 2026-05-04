import axios from "axios";

const baseURL = "http://localhost:8080/api/users";

const api = {
    addUser: (user) => axios.post(baseURL, user),

    getAllUsers: () => axios.get(baseURL),

    updateUser: (id, user) => axios.put(`${baseURL}/${id}`, user),

    deleteUser: (id) => axios.delete(`${baseURL}/${id}`)
};

export default api;