// Global Instance for our URL
import axios from "axios"

// there's no localhost in production so we have to make our links dynamic
const BASE_URL = window.location.hostname === "localhost" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
    baseURL : BASE_URL,
});

export default api;