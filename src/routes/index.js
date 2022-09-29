/* import { lazy } from "react"; */
import { HomePage, MainPage } from "@pages/index";

/* const Home = lazy(() => import("@pages/HomePage/HomePage")); */

export const routes = [
  {
    path: "/home-page",
    element: HomePage,
  },
  {
    path: "/",
    element: MainPage,
  },
];
