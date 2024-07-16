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
    const token="3296b03327006f2b0efa7d6c1780c0ff5299a3789ba07eba327e32f6484643661f99a44f422811c27b9cd06b47748dc02565716e0ee1e90df9a8b9255e429a39174333b1d4faff872bc5de6990db53cde61bddd9b904789149ab5f562d98c8773d52da23791a81711cd21af14abf6ade7ec3cd967d3f40c4b5871782f21b8a28"
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
