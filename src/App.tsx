import { createBrowserRouter, RouterProvider } from "react-router";

import { TanStackQueryDebugger } from "~/components/dev";
import AppWrapper from "~/components/AppWrapper/AppWrapper";
import { Error, Home, Shorts, Subscriptions, VideoDetail, You } from "~/pages";

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
          path: "/subscriptions",
          element: <Subscriptions />,
        },
        {
          path: "/you",
          element: <You />,
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
