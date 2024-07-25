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
    const token="f36cc274a7b322e42d4bcdfb883057f7c5ca6c42730ecabfb78adf12d7b63b5b5d9c53c3d2d8ce63fba8d537fb0b9e15066eb21071ddf3f5d84b6297b926f8570786b39d65fa4dc00f7407fdd4b3dbbfec9488c30bf5c6b95e0b19d2053835e62e38ad9bbdfaa5200eddc5f81162f472cdb0ecce7f296422315a8703e0eee463" // add token here
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
