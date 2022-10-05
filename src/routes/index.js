/* import { lazy } from "react"; */
import { HomePage, MainPage, WebPage } from "@pages/index";

/* const Home = lazy(() => import("@pages/HomePage/HomePage")); */

export const routes = [
  {
    path: "/web",
    element: WebPage,
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
