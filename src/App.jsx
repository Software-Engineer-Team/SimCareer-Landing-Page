import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "@components/index";

function App() {
  return (
    <Routes>
      <Route path={"/*"} element={<HomePage />} />
      <Route path={"/"} element={<Navigate to={"/landing-page"} />} />
    </Routes>
  );
}

export default App;
