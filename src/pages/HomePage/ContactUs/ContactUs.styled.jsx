import styled from "styled-components";
import {
  ContentLeft,
  ContentRight,
  Content,
} from "@components/HomePage/Body/TechFoundation/Connection/Connection.styled";

export const ContactUsContainer = styled.section`
  background: rgb(45, 171, 253);
  background: linear-gradient(
    0deg,
    rgba(45, 171, 253, 1) 4%,
    rgba(34, 193, 195, 1) 68%
  );
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ContactUsContent = styled(Content)`
  padding: 0;
  div.inner-content,
  div.inner-content-reverse {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.inner-content-reverse {
    ${ContentLeft} {
      padding-top: 20px;
    }
  }
`;

export const ContactUsContentRight = styled(ContentRight)`
  iframe {
    width: 600px;
    height: 500px;
    border: 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
export const ContactUsContentLeft = styled(ContentLeft)`
  p,
  div,
  h1,
  h3 {
    color: black;
  }

  h3 {
    text-align: left;
  }
`;
