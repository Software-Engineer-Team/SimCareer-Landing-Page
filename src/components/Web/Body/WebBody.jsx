import React from "react";
import Schools from "./Schools/Schools";
import { WebContainer } from "./WebBody.styled";
import WebHome from "./WebHome/WebHome";

const WebBody = () => {
  return (
    <WebContainer>
      <div className="container-layout">
        {/* <WebHome /> */}
        <Schools />
      </div>
    </WebContainer>
  );
};

export default WebBody;
