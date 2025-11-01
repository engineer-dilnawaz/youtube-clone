import { createBrowserRouter, RouterProvider } from "react-router";

import { TanStackQueryDebugger } from "./components/dev";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { Home, VideoDetail } from "./pages";

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
