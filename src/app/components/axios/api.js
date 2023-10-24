import axios from "axios";

const api = axios.create({
    
    baseURL: process.env.NEXT_PUBLIC_DASHBOARD_URL

});

export default api;