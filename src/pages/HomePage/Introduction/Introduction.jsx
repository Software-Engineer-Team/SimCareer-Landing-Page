import { Story, FoundingMember } from "@components/index";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Container>
      <div className="img">
        <img src="/images/introductionbg.jpg" alt="Introduction" />
      </div>
      <Story></Story>
      <FoundingMember></FoundingMember>
    </Container>
  );
};

export default Introduction;

const Container = styled.section`
  background: rgb(26, 25, 27);
  background: linear-gradient(
    0deg,
    rgba(26, 25, 27, 1) 0%,
    rgba(16, 7, 40, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(2, 113, 252, 1) 0%,
    rgba(236, 236, 236, 1) 50%,
    rgba(27, 107, 196, 1) 89%
  );
  width: 100%;
  div.img img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 500px;
  }
`;
