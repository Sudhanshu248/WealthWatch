import axios from "axios";

export const BASE_URL = "http://localhost:8080";
export const WEBPAGE_URL = "http://localhost:5173";
export const DASHBOARD_URL = "http://localhost:5174";

const clientServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});



export default clientServer;