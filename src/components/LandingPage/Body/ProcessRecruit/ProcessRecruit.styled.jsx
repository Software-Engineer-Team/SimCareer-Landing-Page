import styled from "styled-components";

export const Container = styled.section`
  margin-top: 180px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 1300px;
  background-color: black;

  div.inner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    max-width: 1740px;
    border-radius: 40px;
    height: 100%;
    margin: 0 auto;
    & .create-account {
      align-self: flex-end;
      position: absolute;
      bottom: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 21rem;
      margin-right: 20px;
      height: 4.9rem;
      border-radius: 37px;
      border: 1px solid #6a3ce8;
      background-color: #6a3ce8;
      font-family: "Anton", sans-serif;
      font-size: 43.25px;
      color: #ffffff;
      cursor: pointer;
      transition: all 100ms ease-in;
      &:hover {
        background-color: #ffffff;
        color: #6a3ce8;
      }
    }
    div.title-image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 1329px;
      h2.title {
        height: 100%;
        width: 80%;
        position: absolute;
        top: 0;
        text-align: center;
        padding: 20px 0;
        color: white;
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-size: 75px;
        &:after {
          top: 50px;
          left: 0;
          position: absolute;
          content: "";
          width: 100%;
          z-index: 100;
          height: 0px;
          box-shadow: -3px 94px 128px 41px rgba(55, 81, 219, 0.74);
          -webkit-box-shadow: -3px 94px 128px 41px rgba(55, 81, 219, 0.74);
          -moz-box-shadow: -3px 94px 128px 41px rgba(55, 81, 219, 0.74);
        }
      }
      div.image {
        width: 1329px;
        position: relative;
        img {
          width: 100%;
        }
      }
    }
  }
`;
