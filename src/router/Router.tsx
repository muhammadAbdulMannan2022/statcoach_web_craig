import { createBrowserRouter } from "react-router";
import App from "../App";
import LayoutHome from "../project/landing/LayoutHome";
import Landing from "../project/landing/home/Landing";
import PrivacyPolicy from "../project/landing/Policy/Policy";
import Pricing from "../project/landing/home/sections/Pricing";

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
          {
            path: "privacy",
            element: <PrivacyPolicy />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
        ],
      },
    ],
  },
]);
