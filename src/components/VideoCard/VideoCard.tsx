import type { FeedVideoType } from "../../types";
import { formatCompactNumber } from "../../utils";
import { dateFormatter } from "../../utils/dateFormatter";

export const VideoCard = ({ video }: { video: FeedVideoType }) => {
  return (
    <div className="flex flex-col bg-black rounded-lg shadow-md cursor-pointer h-auto hover:bg-blue-800/30 transition-all duration-300 p-3">
      <img
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col gap-1 p-2 text-white">
        <h3 className="text-lg font-bold line-clamp-2">
          {video.snippet.title}
        </h3>
        <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
      </div>
      <div className="flex items-center gap-1 p-2 text-sm text-gray-500">
        <p className="text-sm text-gray-500">
          {formatCompactNumber(video.statistics.viewCount)} views
        </p>
        <span className="text-sm text-gray-500">•</span>
        <p className="text-sm text-gray-500">
          {dateFormatter(video.snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
};
