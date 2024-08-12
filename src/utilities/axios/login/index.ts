import api from "../api";
import { loginAPI } from "@/types/user.types";
export const login = (formData: loginAPI) => api.post("auth/local", formData);
