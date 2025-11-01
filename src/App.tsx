import { createBrowserRouter, RouterProvider } from "react-router";

import { TanStackQueryDebugger } from "./components/dev";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { Error, Home, Shorts, VideoDetail } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shorts",
          element: <Shorts />,
        },
        {
          path: "/watch",
          element: <VideoDetail />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <TanStackQueryDebugger>
      <RouterProvider router={router} />
    </TanStackQueryDebugger>
  );
};

export default App;
