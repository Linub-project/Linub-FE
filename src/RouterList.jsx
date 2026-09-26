import AuthenticationLayout from "@/layouts/authenticationLayout";
import MainLayout from "@/layouts/mainLayout";
import LoginPage from "@/pages/authentication/login";
import SignupPage from "@/pages/authentication/signup";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import DictionaryPage from "@/pages/dictionary";

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
      },
      {
        path: "/dictionary",
        element: <DictionaryPage />,
      },
    ]
  }
];

export const RouterObject = createBrowserRouter(RouterList());