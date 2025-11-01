import { useQuery } from "@tanstack/react-query";

import { fetchFromAPI } from "../api/youtube";
import { API_ENDPOINTS } from "../constants";
import type { GenericResponse, VideoType } from "../types";

export const useYouTubeSearch = (query: string) => {
  return useQuery<GenericResponse<VideoType>>({
    queryKey: ["youtubeSearch", query],
    queryFn: async () => {
      if (!query) return { items: [] } as unknown as GenericResponse<VideoType>;
      return fetchFromAPI<GenericResponse<VideoType>>(API_ENDPOINTS.SEARCH, {
        part: "snippet",
        q: query,
        maxResults: 12,
        type: "video",
      });
    },
    staleTime: 1000 * 60 * 5, // cache for 5 mins
    enabled: !!query,
  });
};
