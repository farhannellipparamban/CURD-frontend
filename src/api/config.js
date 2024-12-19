import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosAuthorized = axios.create({
  baseURL: BASE_URL,
});

axiosAuthorized.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosAuthorized.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosAuthorized;
