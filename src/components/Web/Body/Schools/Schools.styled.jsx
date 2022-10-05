import styled from "styled-components";

export const SchoolsContainer = styled.div`
  .school-container {
    position: relative;
    top: 0;
    display: flex;
    padding-top: 15px;
    margin-bottom: 7px;
    justify-content: center;

    .school-container-content {
      position: relative;
      width: 100%;
      height: 100%;
      background: linear-gradient(215.55deg, #00e7fe 16.14%, #4a00cb 82.92%);
      clip-path: polygon(0 143px, 100% 55px, 100% 100%, 0 100%);
      padding-bottom: 7px;

      h1 {
        margin: 0;
        padding-left: 10px;
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 8px;
        color: #fff;
      }
      ul {
        margin: 0;
        padding-left: 20px;
        padding-right: 15px;
        font-weight: 400;
        margin-bottom: 7px;

        li {
          color: #fff;
          font-size: 10px;
          margin-bottom: 2px;
        }
      }
    }

    .school-container-card {
      .school-container-card-img {
        left: 0;
        position: absolute;
        height: 190px;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        & > div {
          position: relative;
          z-index: 100;

          & > div:first-child {
            background-image: url("/images/dhvl.jpg");
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 18px;
          }

          & > div:last-child {
            background-image: url("/images/star.png");
            position: absolute;
            width: 75px;
            height: 83.27px;
            top: -16px;
            left: -11px;
          }
        }
      }
    }
  }
`;
