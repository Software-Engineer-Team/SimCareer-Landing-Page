import React from "react";
import { Container } from "./FoundingMember.styled";
const FoundingMember = () => {
  return (
    <Container>
      <div className="inner-wrap">
        {/* <h2 className="title">Về chúng tôi</h2> */}
        <img src="/images/simcareer.png" alt="logo" />
      </div>
    </Container>
  );
};

export default FoundingMember;
