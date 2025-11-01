import { useFeed } from "~/hooks";
import { VideoCard } from "~/components/VideoCard/VideoCard";

export const VideoCardsContainer = () => {
  const { data } = useFeed();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.items.map((item) => (
        <VideoCard key={item.id} video={item} />
      ))}
    </div>
  );
};
