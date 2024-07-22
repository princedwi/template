import api from "../api";

export const getProjectInfoMasterData = () => api.get("http://localhost:1337/api/master-type-studies");
export const getConceptReviewMasterData = () => api.get("http://localhost:1337/api/master-modelling-tasks");
export const getModelTypeMasterData = () => api.get("http://localhost:1337/api/master-model-types");
export const getModelSoftwaresMasterData = () => api.get("http://localhost:1337/api/master-model-softwares");
export const getModelSystemsMasterData = () => api.get("http://localhost:1337/api/master-model-systems");
export const getMasterOutputMasterData = () => api.get("http://localhost:1337/api/master-outputs");