import { FilterButtons } from "../FilterButtons";
import { VideoCardsContainer } from "../VideoCardsContainer";

export const Body = () => {
  return (
    <div className="flex-1 bg-amber-300">
      <FilterButtons />
      <VideoCardsContainer />
    </div>
  );
};
