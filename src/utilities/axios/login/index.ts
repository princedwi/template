import api from "../api";
import { login as Login } from "@/types/user.types";
export const login = (formData: Login) => api.post("auth/local", formData);
