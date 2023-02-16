import axios from "axios";
import {
  createProductPayload,
  LoginRequest,
  UpdateCategoriePayload,
  UserPayload,
} from "../types/requests";
import { HandleError } from "../errors/handle-error-modal";

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
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (err: any) {
      HandleError(err);
    }
  },

  getCategories: async () => {
    try {
      const response = await axios.get("/categories");
      return response.data;
    } catch (err: any) {
      HandleError(err);
    }
  },

  updateCategorie: async (payload: UpdateCategoriePayload) => {
    try {
      const response = await axios.patch("/categories", payload);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },

  deleteCategorie: async (payload: string) => {
    try {
      const response = await axios.delete(`/categories/${payload}`);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },
  createProductList: async (payload: createProductPayload) => {
    try {
      const response = await axios.post("/products", payload);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },

  getProductList: async () => {
    try {
      const response = await axios.get("products");
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },

  createUser: async (payload: UserPayload) => {
    try {
      const response = await axios.post("/Users", payload);
      return response.data;
    } catch (err) {
      HandleError(err);
    }
  },
};
