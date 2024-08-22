import api from "../api";
import {MasterModelSpec} from "../../../types/master_data.types";

export const getProjectInfoMasterData = () => api.get("http://localhost:1337/api/master-type-studies");
export const getConceptReviewMasterData = () => api.get("http://localhost:1337/api/master-modelling-tasks");
export const getModelTypeMasterData = () => api.get("http://localhost:1337/api/master-model-types");
export const getModelSoftwaresMasterData = () => api.get("http://localhost:1337/api/master-model-softwares");
export const getModelSystemsMasterData = () => api.get("http://localhost:1337/api/master-model-systems");
export const getMasterOutputMasterData = () => api.get("http://localhost:1337/api/master-outputs");
export const getMasterModelSpec = () => api.get("http://localhost:1337/api/master-model-specs");
export const getMasterModelLogs = () => api.get("http://localhost:1337/api/master-model-logs");
export const postMasterModelSpec = (data:MasterModelSpec) => api.post("http://localhost:1337/api/master-model-specs", {data:data});
export const getMasterModelLog=()=> api.get("http://localhost:1337/api/master-model-logs");