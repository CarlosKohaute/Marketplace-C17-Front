import axios from "axios";
import { LoginRequest } from "../types/requests";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
    throw new Error(error.response.data.message);
  }
);

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getProducts: async () => {
    try {
      const response = await axios.get("/products");
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
};
