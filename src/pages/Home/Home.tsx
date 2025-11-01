import { VideoCardsContainer } from "~/components";

export const Home = () => {
  return (
    <div className="flex-1 bg-black text-white overflow-y-scroll scroll-smooth overscroll-none pb-20">
      <VideoCardsContainer />
    </div>
  );
};
