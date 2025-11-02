import { useQuery } from "@tanstack/react-query";

import { fetchFromAPI } from "~/api/youtube";
import { API_ENDPOINTS } from "~/constants";
import type { ChannelDetailsType, GenericResponse } from "~/types";

export const useChannel = (channelId: string) => {
  return useQuery<GenericResponse<ChannelDetailsType>>({
    queryKey: ["channel", channelId],
    queryFn: () =>
      fetchFromAPI(API_ENDPOINTS.CHANNELS, {
        part: "snippet,statistics",
        id: channelId,
      }),
  });
};
