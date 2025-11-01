import { useQuery } from "@tanstack/react-query";
import { fetchFromAPI } from "../api/youtube";
import { API_ENDPOINTS, MAX_RESULTS } from "../constants";
import type { FeedVideoType, GenericResponse } from "../types";
import { REGION_CODES } from "../utils";

export const useFeed = () => {
  return useQuery<GenericResponse<FeedVideoType>>({
    queryKey: ["feed"],
    queryFn: async () => {
      return fetchFromAPI<GenericResponse<FeedVideoType>>(
        API_ENDPOINTS.VIDEOS,
        {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: REGION_CODES.US,
          maxResults: MAX_RESULTS,
        }
      );
    },
  });
};
