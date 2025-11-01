import { FilterButtons } from "../FilterButtons";
import { VideoCardsContainer } from "../VideoCardsContainer";

export const Body = () => {
  return (
    <div className="flex-1 bg-black text-white overflow-y-scroll scrollbar-hide overscroll-none pb-20">
      <FilterButtons />
      <VideoCardsContainer />
    </div>
  );
};
