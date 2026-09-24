import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import LoginPage from "@/pages/authentication/login";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SignupPage from "./pages/authentication/signup";
import HomePage from "./pages/home";

export const RouterList = () => [
  {
    element: <AuthenticationLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      }
    ]
  }
];

export const RouterObject = createBrowserRouter(RouterList());