import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 100%;

  div.inner-wrap {
    position: relative;
    padding: 20px;
    max-width: 1740px;
    border-radius: 40px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    & h2 {
      position: absolute;
      top: 160px;
      right: -80px;
      font-size: 100px;
      font-weight: 500;
      text-transform: uppercase;
      font-family: "Anton", sans-serif;
    }
    & .image {
      width: 1740px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
