import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    //const token="";  // add token here
    //console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const generic_error = "Something went wrong.";
    if (error.response && error.response.data) {
      if (typeof error.response.data === "string") {
        const newData = {
          error: generic_error,
          info: error.response.data,
        };
        return Promise.reject(newData);
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error.message);
  }
);
export default api;
