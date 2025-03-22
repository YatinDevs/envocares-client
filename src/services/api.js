import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";
// const API_BASE_URL = "https://envocare.demovoting.com/api";

// const API_BASE_URL = ":8088/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;
