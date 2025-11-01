import axios from "axios";

import { BASE_URL } from "~/constants";

const youtube = axios.create({
  baseURL: BASE_URL,
  params: {
    key: import.meta.env.VITE_YT_API_KEY,
  },
});

export const fetchFromAPI = async <T>(
  endpoint: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  const { data } = await youtube.get<T>(endpoint, { params });
  return data;
};
