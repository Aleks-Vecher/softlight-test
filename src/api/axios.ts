import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_FIGMA_URL,
  headers: {
    "X-Figma-Token": import.meta.env.VITE_API_FIGMA_TOKEN
  }
});