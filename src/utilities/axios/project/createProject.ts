import api from "../api";
import { ProjectInterface } from "@/types/project-info.types";
import { Concept_Review, Project_Info, Model_Approach, Output_Detail } from "@/types/project.types";
import {DataTabInterface} from '@/types/data_tab.types';

//import { Project_Info as Project_Info } from "@/types/project.types";
// const post_project = () => api.post("http://localhost:1337/api/project-infos");
// export { post_project };
export const createProject = (formData: Project_Info) => api.post("http://localhost:1337/api/project-infos", {data:formData});
export const conceptReview = (formData: Concept_Review) => api.post("http://localhost:1337/api/concept-reviews", {data:formData});
export const getProjectInfo = (formData: ProjectInterface) => api.get("http://localhost:1337/api/concept-reviews");
export const getDashboardData = () => api.get("http://localhost:1337/api/project-infos");
export const modelApproach = (formData: Model_Approach) => api.post("http://localhost:1337/api/model-approches", {data:formData});
export const outputDetail = (formData: Output_Detail) => api.post("http://localhost:1337/api/output-details-tables", {data:formData});
export const sendDataDetails = (formData: DataTabInterface) => api.post("http://localhost:1337/api/data-tables", {data:formData});