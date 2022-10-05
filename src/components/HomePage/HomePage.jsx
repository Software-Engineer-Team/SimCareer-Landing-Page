import React from "react";
import Header from "@components/HomePage/Header/Header";
import Body from "@components/HomePage/Body/Body";
import Footer from "@components/HomePage/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { homeRoutes } from "@routes/Home/index";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Body>
        <Routes>
          {homeRoutes.map(({ path, element: Page }, idx) => {
            return <Route key={idx} path={path} element={<Page />} />;
          })}
        </Routes>
      </Body>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
