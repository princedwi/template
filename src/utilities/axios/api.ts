import axios from "axios";

const api = axios.create({
  baseURL: process.env.APIURL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token="07f74a4de6c403f317d5d834aaa548ce5a4b2c4cd7932b0d968463789a9ee8de9f04f2436b06905732955de49d353b3499e2efbb21fd358399f424cf61a2fcb474cd01baf5f3d0c012730a40d094d5d21f24254082bc0abf1d28def20a502bae4d38028585692041ee1c8697cbaab4b197e1e378b3b401b27d1f2a8a06b2fd0f";  // add token here
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
