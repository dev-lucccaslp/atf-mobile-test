import axios from "axios";
import { ApiResponse } from "../types";

const api = axios.create({
  baseURL: "https://url-shortener-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function shortenUrl(url: string): Promise<ApiResponse> {
  const response = await api.post("/api/alias", { url });
  return response.data;
}
