import { createBrowserRouter, RouterProvider } from "react-router";
import { Body, VideoDetail } from "./components";

import { TanStackQueryDebugger } from "./components/dev";
import AppWrapper from "./components/AppWrapper/AppWrapper";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper />,
      children: [
        {
          index: true,
          element: <Body />,
        },
        {
          path: "/video/:id",
          element: <VideoDetail />,
        },
      ],
    },
  ]);
  return (
    <TanStackQueryDebugger>
      <RouterProvider router={router} />
    </TanStackQueryDebugger>
  );
};

export default App;
