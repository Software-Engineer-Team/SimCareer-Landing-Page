import React from "react";
import { Container } from "./Content.styled";

const Content = () => {
  return (
    <Container>
      <div className="inner-wrap">
        {/* <h2 className="title">Về chúng tôi</h2> */}
        <img src="/images/simcareer.png" alt="logo" />
      </div>
    </Container>
  );
};

export default Content;
