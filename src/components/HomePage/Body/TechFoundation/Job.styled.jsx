import styled from "styled-components";
import { OrientationContainer } from "./Orientaion.styled";

export const JobContainer = styled(OrientationContainer)`
  background-image: url("/images/bgxyx.png");
  background-repeat: no-repeat;
  background-size: 100%;

  div.inner-wrap {
    padding-top: 140px;
    padding-right: 75px;
    padding-bottom: 250px;
    padding-left: 75px;

    h2.title {
      color: white;
      font-size: 40px;
    }
  }

  div.members {
    div.member {
      img {
        border-radius: 50%;
      }
      div.text {
        color: white;
        font-size: 18px;
        font-family: "Nutito";
        font-weight: 400;
        margin-top: -20px;
        p {
          text-align: center;
        }
        p.description {
          text-align: justify;
        }
      }
    }
  }
`;
