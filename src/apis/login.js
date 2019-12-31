import axios from "./axios"

export default ({ email, password }) => axios.post("/users/login", { email, password })