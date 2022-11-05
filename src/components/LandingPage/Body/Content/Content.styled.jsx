import styled from "styled-components";

export const Container = styled.section`
  margin-top: 180px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 920px;
  div.inner-wrap {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    padding: 30px;
    max-width: 2040px;
    /* border: 6px solid #6a3ce8; */
    /* border-radius: 40px; */
    height: 100%;
    margin: 0 auto;
    & .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 2px solid #000000;
      border-radius: 20px;
      padding: 15px;
      & .image {
        width: 330px;
        min-height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      & .title {
        font-family: "Anton", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
      }
      & .text {
        font-family: Cambria, Georgia, serif;
        font-size: 35px;
      }
    }

    & > img {
      width: 270px;
      height: 270px;
      object-fit: cover;
      position: absolute;
      top: -180px;
    }
  }
`;
