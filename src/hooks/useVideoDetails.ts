import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { fetchFromAPI } from "~/api/youtube";
import { API_ENDPOINTS } from "~/constants";
import type { GenericResponse, VideoDetailsType } from "~/types";

export const useVideoDetails = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () =>
      fetchFromAPI<GenericResponse<VideoDetailsType>>(API_ENDPOINTS.VIDEOS, {
        part: "snippet,contentDetails,statistics",
        id: videoId,
      }),
  });
};
