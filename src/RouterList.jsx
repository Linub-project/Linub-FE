import AuthenticationLayout from "@/layouts/authenticationLayout";
import MainLayout from "@/layouts/mainLayout";
import LoginPage from "@/pages/authentication/login";
import SignupPage from "@/pages/authentication/signup";
import DictionaryPage from "@/pages/dictionary";
import HomePage from "@/pages/home";
import ItemPage from "@/pages/item";
import { createBrowserRouter, Navigate } from "react-router-dom";
import WrongPage from "@/pages/wrong";

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
          element: <Navigate to="/dictionary/ARCHIVE" replace />,
      },
      {
        path: "/dictionary/:category",
        element: <DictionaryPage />,
      },
      {
        path: "/dictionary/:item",
        element: <ItemPage />,
      },
      {
        path: "*",
        element: <WrongPage />
      }
    ]
  },
];

export const RouterObject = createBrowserRouter(RouterList());