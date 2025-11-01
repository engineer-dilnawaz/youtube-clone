import { FilterButtons, VideoCardsContainer } from "../../components";

export const Home = () => {
  return (
    <div className="flex-1 bg-black text-white overflow-y-scroll scrollbar-hide overscroll-none pb-20">
      <FilterButtons />
      <VideoCardsContainer />
    </div>
  );
};
