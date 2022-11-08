import styled from "styled-components";

export const Container = styled.section`
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 920px;
  background-color: black;

  div.inner-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px 0;
    max-width: 1740px;
    border-radius: 40px;
    height: 100%;
    margin: 0 auto;
    & .create-account {
      align-self: flex-end;
      position: absolute;
      bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18rem;
      margin-right: 10px;
      height: 4.9rem;
      border-radius: 37px;
      border: 1px solid #6a3ce8;
      background-color: #6a3ce8;
      font-family: "Anton", sans-serif;
      font-size: 28.25px;
      color: #ffffff;
      cursor: pointer;
      transition: all 100ms ease-in;
      text-decoration: none;
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
        width: 60%;
        position: absolute;
        top: 0;
        text-align: center;
        padding: 20px 0;
        color: white;
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-size: 50px;
        z-index: 100;
        &:after {
          top: 20px;
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
        width: 1029px;
        position: relative;
        top: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
`;
