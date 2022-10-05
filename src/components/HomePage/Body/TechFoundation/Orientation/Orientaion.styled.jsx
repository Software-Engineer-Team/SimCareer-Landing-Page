import styled from "styled-components";
import { Container } from "@components/HomePage/Body/Introduction/FoundingMember/FoundingMember.styled";

export const OrientationContainer = styled(Container)`
  div.inner-wrap {
    h2.title {
      width: 90%;
      text-align: left;
      color: #215ac9;
    }
  }

  div.members {
    div.member {
      width: 33.3%;
      img {
        border-radius: 0%;
      }
      div.text {
        p {
          text-align: center;
          strong {
            font-size: 22px;
          }
        }
        p.description {
          text-align: justify;
        }
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
