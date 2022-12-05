import React from "react";
import { Routes, Route } from "react-router-dom";
import { homeRoutes } from "@routes/Home/index";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <Body> */}
      {/*   <Routes> */}
      {/*     {homeRoutes.map(({ path, element: Page }, idx) => { */}
      {/*       return <Route key={idx} path={path} element={<Page />} />; */}
      {/*     })} */}
      {/*   </Routes> */}
      {/* </Body> */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
