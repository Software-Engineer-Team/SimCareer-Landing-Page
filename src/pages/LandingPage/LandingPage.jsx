import {
  Activities,
  Introduction,
  Content,
  ProcessRecruit,
} from "@components/index";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container>
      {/* <div className="img"> */}
      {/*   <img src="/images/introductionbg.jpg" alt="Introduction" /> */}
      {/* </div> */}
      <Introduction />
      <Content />
      <Activities />
      <ProcessRecruit />
    </Container>
  );
}

export default LandingPage;

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
