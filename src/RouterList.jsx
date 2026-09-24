import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import MainLayout from "@/layouts/mainLayout";
import LoginPage from "@/pages/authentication/login";
import SignupPage from "@/pages/authentication/signup";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

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