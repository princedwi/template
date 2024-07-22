import api from "./api";
const cron = () => api.get("/entries");
export { cron };
 