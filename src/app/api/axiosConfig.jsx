import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_SECRET;

// Set global defaults for Axios
axios.defaults.baseURL = apiURL;

// Add an interceptor to handle errors globally
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default axios;
