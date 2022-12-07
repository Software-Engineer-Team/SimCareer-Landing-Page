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

  @media screen and (max-width: 500px) {
    margin-top: 0px;
    height: 400px;
    div.inner-wrap {
      width: 100%;
      & .create-account {
        bottom: -6px;
        margin-right: -10px;
        width: 5rem;
        font-size: 9px;
        padding: 5px;
        height: 1.5rem;
        z-index: 100px;
        /* display: none; */
      }
      div.title-image {
        width: auto;
        h2.title {
          width: 100%;
          height: 70px;
          font-size: 18px;
          z-index: 1;
          &:after {
            top: -30px;
          }
        }
        div.image {
          width: 329px;
          top: 30px;
          div {
            min-width: 130px;
            div.process-1 {
              top: 130px;
              left: 0px;
            }
            div.process-2 {
              flex-direction: row-reverse;
              top: 40px;
              left: 5px;
            }
            div.process-3 {
              top: 220px;
              left: 130px;
            }
            div.process-4 {
              top: 90px;
              left: 210px;
              div {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
`;
