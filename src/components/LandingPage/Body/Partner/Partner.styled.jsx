import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10px;
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
      right: 180px;
      font-size: 50px;
      font-weight: 500;
      text-transform: uppercase;
      font-family: "Anton", sans-serif;
    }
    & .image {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 5px;
    margin-top: 0px;
    div.inner-wrap {
      padding: 5px;
      & h2 {
        top: 20px;
        font-size: 18px;
        right: 10px;
      }
      & div.partner-1 {
        top: 20px;
        left: 120px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      & div.partner-2 {
        top: 40px;
        left: -20px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      & div.partner-3 {
        top: 0px;
        left: 20px;
        img {
          width: 100px;
          height: 50px;
        }
      }
      & div.partner-4 {
        top: 170px;
        left: 50px;
        width: 120px;
        height: 40px;
        img {
          width: 100px;
          height: 30px;
        }
      }
    }
  }
`;
