import api from "../api";
import { ProjectInterface } from "@/types/project-info.types";
import { Concept_Review, Project_Info, Model_Approach, Output_Detail, DetailedSpec_Query, ActivityLog } from "@/types/project.types";
import {DataTabInterface} from '@/types/data_tab.types';

//import { Project_Info as Project_Info } from "@/types/project.types";
// const post_project = () => api.post("http://localhost:1337/api/project-infos");
// export { post_project };
export const createProject = (formData: Project_Info) => api.post("http://localhost:1337/api/project-infos", {data:formData});
export const updateProject = (formData: Project_Info, id:number) => api.put(`http://localhost:1337/api/project-infos/${id}`, {data:formData});
export const getProject = (id:number) => api.get(`http://localhost:1337/api/project-infos/${id}?populate=*`);
export const conceptReview = (formData: Concept_Review) => api.post("http://localhost:1337/api/concept-reviews", {data:formData});
export const getconceptReview = (id:number) => api.get(`http://localhost:1337/api/concept-reviews?filters[ProjectID][id][$eq]=${id}&populate=*`);
export const conceptReviewUpdate = (formData: Concept_Review, id:number) => api.put(`http://localhost:1337/api/concept-reviews/${id}`, {data:formData});
export const getProjectInfo = (formData: ProjectInterface) => api.get("http://localhost:1337/api/concept-reviews");
export const getUsers = () => api.get("http://localhost:1337/api/users");
export const getDashboardData = (id:number) => api.get(`http://localhost:1337/api/project-infos?filters[$or][0][CreatedByUserName][id][$eq]=${id}&filters[$or][1][UpdatedByUserName][id][$eq]=${id}&filters[$or][2][Advisor][id][$eq]=${id}&filters[$or][3][Originator][id][$eq]=${id}&filters[$or][4][Lead][id][$eq]=${id}&populate=*`);
export const modelApproach = (formData: Model_Approach) => api.post("http://localhost:1337/api/model-approches", {data:formData});
export const getmodelApproach = (id:number) => api.get(`http://localhost:1337/api/model-approches?filters[ProjectID][id][$eq]=${id}&populate=*`);
export const modelApproachUpdate = (formData: Model_Approach, id:number) => api.put(`http://localhost:1337/api/model-approches/${id}`, {data:formData});
export const outputDetail = (formData: Output_Detail) => api.post("http://localhost:1337/api/output-details-tables", {data:formData});
export const getoutputDetail = (id:number) => api.get(`http://localhost:1337/api/output-details-tables?filters[projectID][id][$eq]=${id}&populate=*`);
export const outputDetailUpdate = (formData: Output_Detail, id:number) => api.put(`http://localhost:1337/api/output-details-tables/${id}`, {data:formData});
export const outputDetailDelete = (formData: Output_Detail, id:number) => api.delete(`http://localhost:1337/api/output-details-tables/${id}`, {data:formData});
export const sendDataDetails = (formData: DataTabInterface) => api.post("http://localhost:1337/api/data-tables", {data:formData});
export const updateDataDetails = (formData: DataTabInterface) => api.put("http://localhost:1337/api/data-tables", {data:formData});
export const deleteDataDetails = (id: number) => api.delete(`http://localhost:1337/api/data-tables/${id}`);
export const getDataDetails = (id:number) =>api.get(`http://localhost:1337/api/data-tables?filters[ProjectID][id][$eq]=${id}&populate=*`);
export const detailSpecQuery = (formData: DetailedSpec_Query) => api.post("http://localhost:1337/api/project-spec-query-responses",{data:formData});
export const getConceptReview = (projectId: number) => api.get(`http://localhost:1337/api/concept-reviews?ProjectID.data.id=${projectId}`);
export const createActivityLog = (formData:ActivityLog) => api.post(`http://localhost:1337/api/activity-logs`, {data:formData});
export const getDetailedSpec = (id:number) => api.get(`http://localhost:1337/api/project-spec-query-responses?filters[projectID][id][$eq]=${id}&populate=*`);
export const getActivityLog=(id:number)=>api.get(`http://localhost:1337/api/activity-logs?filters[ProjectID][id][$eq]=${id}&populate=*`);
// http://localhost:1337/api/project-infos?pagination[page]=1&pagination[pageSize]=100000&filters[CreatedByUserName][id][$eq]=4|filters[UpdatedByUserName][id][$eq]=4|filters[Advisor][id][$eq]=4|&populate=*

// for exporting as excel sheet
export const getallprojectinfos=()=>api.get(`http://localhost:1337/api/project-infos?populate=*`);
export const getallconceptReview = () => api.get("http://localhost:1337/api/concept-reviews?populate=*");
export const getallmodelApproach = () => api.get(`http://localhost:1337/api/model-approches?populate=*`);
export const getalloutputDetail = () => api.get("http://localhost:1337/api/output-details-tables?populate=*");
export const getallDataDetails = () => api.get(`http://localhost:1337/api/data-tables?populate=*`);
export const getallDetailedSpec = () => api.get(`http://localhost:1337/api/project-spec-query-responses?populate=*`);