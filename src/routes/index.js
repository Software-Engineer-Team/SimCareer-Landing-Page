/* import { lazy } from "react"; */
import { HomePage, MainPage } from "@pages/index";

/* const Home = lazy(() => import("@pages/HomePage/HomePage")); */

export const routes = [
  {
    path: "/technology-foundation",
    element: HomePage,
  },
  {
    path: "/home-page",
    element: HomePage,
  },
  {
    path: "/",
    element: MainPage,
  },
];
