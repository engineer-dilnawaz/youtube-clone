import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { PiShareFatBold } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineScissors } from "react-icons/hi2";
import { HiDotsHorizontal } from "react-icons/hi";

import { EN_LOCALE } from "~/constants";
import { useChannel, useVideoDetails } from "~/hooks";
import { dateFormatter, formatCompactNumber } from "~/utils";
import { Description } from "~/components";

export const VideoDetail = () => {
  const { data } = useVideoDetails();
  const videoDetails = data?.items?.[0];
  const { data: channelData } = useChannel(
    videoDetails?.snippet.channelId || ""
  );
  const channelDetails = channelData?.items?.[0];

  return (
    <div className="bg-black text-white flex flex-col flex-1 overflow-y-scroll scroll-smooth overscroll-none pb-20">
      {/* video */}
      <div className="w-full aspect-video max-h-[65vh] bg-slate-500">
        <iframe
          className="w-full h-full bg-slate-600"
          src={`https://www.youtube-nocookie.com/embed/${videoDetails?.id}?si=${videoDetails?.snippet.channelId}`}
          title={videoDetails?.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col gap-2 pt-5 px-6 max-w-[70%]">
        {/* title */}
        <h1 className="text-2xl font-bold line-clamp-2">
          {videoDetails?.snippet.title}
        </h1>

        {/* channel details */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img
              src={channelDetails?.snippet.thumbnails.default.url}
              alt={channelDetails?.snippet.title}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-bold">
                {channelDetails?.snippet.title}
              </h2>

              <p className="text-sm text-gray-500">
                {`${formatCompactNumber(
                  channelDetails?.statistics.subscriberCount || "0"
                )} ${EN_LOCALE.SUBSCRIBERS}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-gray-400/30 rounded-full overflow-hidden">
              <div className="hover:bg-gray-400/40 cursor-pointer flex-1 flex items-center gap-2 px-3 py-2">
                <BsHandThumbsUp className="h-6 w-6 text-white" />
                <p className="text-sm font-semibold text-white">
                  {formatCompactNumber(
                    videoDetails?.statistics.likeCount || "0"
                  )}
                </p>
              </div>
              <div className="w-px h-4 bg-gray-500" />
              <div className="hover:bg-gray-400/40 cursor-pointer flex items-center gap-2 px-3 py-2">
                <BsHandThumbsDown className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center bg-gray-400/30 rounded-full overflow-hidden">
              <div className="hover:bg-gray-400/40 cursor-pointer flex-1 flex items-center gap-2 px-3 py-2">
                <PiShareFatBold className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center bg-gray-400/30 rounded-full overflow-hidden">
              <div className="hover:bg-gray-400/40 cursor-pointer flex-1 flex items-center gap-2 px-3 py-2">
                <LiaDownloadSolid className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center bg-gray-400/30 rounded-full overflow-hidden">
              <div className="hover:bg-gray-400/40 cursor-pointer flex-1 flex items-center gap-2 px-3 py-2">
                <HiOutlineScissors className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex items-center bg-gray-400/30 rounded-full overflow-hidden">
              <div className="hover:bg-gray-400/40 cursor-pointer flex-1 flex items-center gap-2 px-3 py-3">
                <HiDotsHorizontal className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="mt-4 pt-4 bg-gray-800/50 rounded-lg p-4">
          {/* video stats */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-white">
              {`${formatCompactNumber(
                videoDetails?.statistics.viewCount || "0"
              )} ${EN_LOCALE.VIEWS}`}
            </p>

            <p className="text-sm text-white">
              {dateFormatter(videoDetails?.snippet?.publishedAt || "0")}
            </p>
          </div>

          {/* description */}
          <Description text={videoDetails?.snippet.description || ""} />
        </div>
      </div>
    </div>
  );
};
