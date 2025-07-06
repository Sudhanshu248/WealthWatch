import axios from "axios";

export const BASE_url = "http://localhost:8080";

const clientServer = axios.create({
  baseURL: BASE_url,
  headers: {
    "Content-Type": "application/json"
  }
});



export default clientServer;