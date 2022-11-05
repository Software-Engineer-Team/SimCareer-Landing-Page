import { Story, FoundingMember } from "@components/index";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Container>
      {/* <div className="img"> */}
      {/*   <img src="/images/introductionbg.jpg" alt="Introduction" /> */}
      {/* </div> */}
      <Story></Story>
      <FoundingMember></FoundingMember>
    </Container>
  );
};

export default Introduction;

const Container = styled.section`
  width: 100%;
  background-color: #ffffff;
  div.img img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 500px;
  }
`;
