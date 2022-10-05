import styled from "styled-components";
export const ActivitiesContainer = styled.section`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ActivitiesContent = styled.div`
  padding: 30px;
  max-width: 1440px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ActivitiesTitle = styled.div`
  font-size: 40px;
  color: #000;
  font-weight: 550;
  margin-bottom: 32px;
  margin-top: 48px;
  letter-spacing: 1px;
`;
export const ActivitiesImage = styled.div`
  position: relative;
  height: 100%;
  min-width: 600px;
  display: block;
  img {
    position: relative;
    z-index: 2;
    max-width: 800px;
  }

  video {
    margin-top: 2.5px;
    position: absolute;
    max-width: 74%;
    max-height: 54%;
    width: 100%;
    height: 100%;
    top: 20%;
    left: 13%;
  }

  div.text {
    font-size: 24px;
    width: 800px;
    margin-top: 48px;
    font-weight: 550;
  }
`;

export const ActivitiesPillars = styled.div`
  position: relative;
  padding-top: 32px;
  padding-bottom: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const PillarContainer = styled.div`
  width: 45%;
  margin: 20px 0;

  div.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* flex-direction: ${({ type }) =>
      type === "left" ? "row-reverse" : "row"}; */
    div.bg {
      background-image: url("/images/triple-circles.svg");
      width: 120px;
      height: 120px;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      img {
        width: 30px;
        height: 30px;
      }
    }
    div.info {
      overflow: hidden;
      position: relative;
      left: ${({ type }) => (type === "left" ? "-100px" : "300px")};
      /* right: ${({ type }) => (type === "left" ? "-100px" : "0")}; */
      top: 0px;
      padding: 16px 24px;
      border: 0.5px solid #aaa;
      border-radius: 9px;
      div.title {
        line-height: 1.1;
        font-weight: 600;
        font-size: 20px;
        text-align: left;
        letter-spacing: 1px;
        margin-bottom: 16px;
      }
      div.text {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 22px;
          margin-right: 12px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.svg`
  width: 90%;
  height: 400px;
  margin: 2em auto;
  position: absolute;
  top: 0;
`;

export const LoopingPath = styled.path``;
