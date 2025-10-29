import { Body, Header, Sidebar } from "./components";

const App = () => {
  return (
    <div className="h-dvh">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default App;
