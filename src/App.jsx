import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "@pages/MainPage/MainPage";
import WebPage from "@pages/WebPage/WebPage";
// Bug of MainPage
/* import { MainPage } from "@pages/index"; */

import { HomePage } from "@components/index";

function App() {
  return (
    <Routes>
      {/* {mainRoutes.map(({ path, element: Page }, index) => { */}
      {/*   return <Route key={index} path={path} element={<Page />} />; */}
      {/* })} */}
      <Route path={"/home-page/*"} element={<HomePage />} />
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/web-page"} element={<WebPage />} />
    </Routes>
  );
}

export default App;
