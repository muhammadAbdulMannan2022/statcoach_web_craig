import { createBrowserRouter } from "react-router";
import App from "../App";
import LayoutHome from "../project/landing/LayoutHome";
import Landing from "../project/landing/home/Landing";
import PrivacyPolicy from "../project/landing/Policy/Policy";
import Pricing from "../project/landing/home/sections/Pricing";
import Layout from "../project/auth/Layout";
import SignUp from "../project/auth/Signup";
import OTPVerification from "../project/auth/Otp";
import Login from "../project/auth/Login";
import ForgotPassword from "../project/auth/ForgotPass";
import ChangePassword from "../project/auth/ChangePass";
import Success from "../project/auth/Done";

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
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "otp",
        element: <OTPVerification />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot_pass",
        element: <ForgotPassword />,
      },
      {
        path: "change_pass",
        element: <ChangePassword />,
      },
      {
        path: "done",
        element: <Success />,
      },
    ],
  },
]);
