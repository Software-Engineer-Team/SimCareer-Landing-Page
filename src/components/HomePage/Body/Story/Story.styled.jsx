import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;

  @media (max-width: 1340px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  align-items: center;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
  padding-right: 75px;
  display: flex;
  flex-direction: column;

  .content-left {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.5;
      margin: 0;
    }

    .content-left-description {
      font-family: "Nunito";
      text-align: justify;
      line-height: 1.5;
      font-weight: 400;
      font-size: 20px;
    }

    .necessary-orientation-container {
      width: 100%;
      flex-direction: row;
      display: flex;
      align-items: center;

      & > div:first-child {
        width: 25%;
        align-items: center;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        img {
          max-width: 100%;
        }
      }

      & > div:last-child {
        h5 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 0;
  }
`;
export const ContentRight = styled.div`
  width: 40%;
  padding: 0px;
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-direction: column;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;
