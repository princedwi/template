
import api from "../api";
import { Project_Info } from "@/types/project.types";

//import { Project_Info as Project_Info } from "@/types/project.types";
// const post_project = () => api.post("http://localhost:1337/api/project-infos");
// export { post_project };
export const createProject = (formData: Project_Info) => api.post("http://localhost:1337/api/project-infos", formData);