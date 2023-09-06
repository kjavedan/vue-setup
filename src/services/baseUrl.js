import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://api.x55video.com",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default baseUrl;

