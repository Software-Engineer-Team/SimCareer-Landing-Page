import React from "react";
import { WebContainer } from "./WebBody.styled";
import { webRoutes } from "@routes/Web/index";
import { Routes, Route } from "react-router-dom";

const WebBody = () => {
  return (
    <WebContainer>
      <div className="container-layout">
        <Routes>
          {webRoutes.map(({ path, element: SubPage }, idx) => {
            return <Route path={path} element={<SubPage />} key={idx} />;
          })}
        </Routes>
      </div>
    </WebContainer>
  );
};

export default WebBody;
