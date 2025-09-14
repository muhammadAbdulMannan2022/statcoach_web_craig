import { createBrowserRouter } from "react-router";
import App from "../App";
import LayoutHome from "../project/landing/LayoutHome";
import Landing from "../project/landing/home/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LayoutHome />,
        children: [
          {
            path: "",
            element: (
              <>
                <Landing />
              </>
            ),
          },
        ],
      },
    ],
  },
]);
