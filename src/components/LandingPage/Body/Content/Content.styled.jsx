import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;

  div.inner-wrap {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 30px;
    max-width: 1640px;
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
      transition: all 300ms ease-in;
      &:hover {
        transform: scale(1.1);
        box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
      }
      & .image {
        width: 230px;
        min-height: 250px;
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
        font-size: 28px;
      }
      & .text {
        font-family: Cambria, Georgia, serif;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0;
    div.inner-wrap {
      display: flex;
      flex-wrap: wrap;
      padding: 12px;
      padding-top: 0px;
      & .content {
        padding: 0px 15px;
        &:hover {
          transform: scale(1.01);
        }
        & .image {
          width: 180px;
          min-height: 180px;
        }
        & .title {
          font-size: 16px;
        }
        & .text {
          font-size: 14px;
          margin: 10px;
          line-height: 1.2;
        }
      }
    }
  }
`;
