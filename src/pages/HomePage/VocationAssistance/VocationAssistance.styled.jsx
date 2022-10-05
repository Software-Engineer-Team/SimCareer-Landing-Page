import styled from "styled-components";
import {
  ContentLeft,
  ContentRight,
  Content,
} from "@components/HomePage/Body/TechFoundation/Connection/Connection.styled";

export const AssistanceContainer = styled.section`
  width: 100%;
  padding: 20px;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 9, 121, 1) 0%,
    rgba(0, 232, 255, 1) 83%
  );

  div.text {
    padding: 30px;
    max-width: 1440px;
    text-align: left;
    width: 100%;
    margin: 0 auto;
  }
`;

export const AssistanceContent = styled(Content)`
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

export const AssistanceContentRight = styled(ContentRight)``;

export const AssistanceContentLeft = styled(ContentLeft)`
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

export const AssistanceBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 30;
  a {
    background-color: #ecdd5e;
    color: #404a3d;
    position: relative;
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
    padding: 5px 40px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    z-index: 1000;
    border: 0;
    &:hover {
      color: #ffffff;
      background-color: transparent;
      &:after {
        transform: scale(1);
        background-color: #558e4c;
        opacity: 1;
      }
    }
    &:after {
      transition: all 0.35s ease-in-out;
      border-radius: 5px;
      content: "";
      position: absolute;
      transform-origin: center;
      inset: 0;
      transform: scale(0);
      z-index: -1;
      opacity: 0;
    }
  }
`;
