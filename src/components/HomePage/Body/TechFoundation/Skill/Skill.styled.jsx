import styled from "styled-components";
import { Container } from "@components/HomePage/Body/TechFoundation/Connection/Connection.styled";

export const ContainerSkill = styled(Container)`
  background: white;

  .inner-content,
  .inner-content-reverse {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      & > div {
        color: black;
      }
    }
  }
`;
