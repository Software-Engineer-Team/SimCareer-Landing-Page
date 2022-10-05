import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #3c3cc1 0%, #8284ef 95.54%);
  padding-bottom: 100px !important;
  width: 100%;
`;

export const ContentLeft = styled.div`
  padding: 20px;
  width: 50%;
  color: #fff;

  p {
    font-size: 16px;
    font-family: "Nunito";
    color: #fff;
    text-align: justify;
  }

  div {
    font-size: 16px;
    font-weight: 300;
    color: #ffffff;
    font-family: "Nunito";
    margin-bottom: 15px;
    text-align: justify;
  }

  h1 {
    font-size: 38px;
    color: #ffffff;
    font-weight: 800;
    margin: 0;
    margin-bottom: 35px;
    font-family: "Nunito";
  }

  h3 {
    font-size: 20px;
    color: #ffffff;
    font-family: "Nunito";
    margin: 0;
    margin-bottom: 20px;
    font-weight: 700;
    span {
      width: 40px;
      display: inline-block;
      height: 40px;
      background: linear-gradient(
        321.04deg,
        rgba(255, 255, 255, 0.939986) 16.04%,
        rgba(255, 255, 255, 0.545072) 82.01%
      );
      border-radius: 22.5px;
      margin-top: -5px;
      margin-right: 10px;
      text-align: center;
      line-height: 40px;
      color: #3c3cc1;
      font-weight: 700;
      font-size: 26px;
    }
  }
`;

export const ContentRight = styled.div`
  padding: 20px;
  width: 50%;
  color: white;
`;

export const Content = styled.div`
  padding: 100px 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  .inner-content,
  .inner-content-reverse {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .inner-content {
    ${ContentRight} {
      padding-left: 60px;
    }
  }

  .inner-content-reverse {
    ${ContentRight} {
      padding-right: 60px;
    }

    ${ContentLeft} {
      padding-top: 80px;
    }
  }
`;
