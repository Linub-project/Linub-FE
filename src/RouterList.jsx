import AuthenticationLayout from "@/layouts/authenticationLayout";
import MainLayout from "@/layouts/mainLayout";
import LoginPage from "@/pages/authentication/login";
import SignupPage from "@/pages/authentication/signup";
import DictionaryPage from "@/pages/dictionary";
import DictionaryComparePage from "@/pages/dictionaryCompare";
import HomePage from "@/pages/home";
import ItemPage from "@/pages/item";
import WrongPage from "@/pages/wrong";
import { createBrowserRouter, Navigate } from "react-router-dom";

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
        path: "/dictionary/compare",
        element: <DictionaryComparePage />
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
        path: "/dictionary/item/:itemId",
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