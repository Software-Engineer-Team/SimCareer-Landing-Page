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
  /* min-width: 500px; */
  width: 100%;
  display: block;
  div.laptop {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 570px;
      min-width: 570px;
    }

    img.dashboard {
      max-width: 270px;
      min-width: 430px;
      height: 285px;
      border-radius: 8px;
      position: absolute;
      top: 8px;
      z-index: 100;
      display: block;
    }
  }

  img.left-triangle {
    position: absolute;
    left: 0;
    width: 150px;
    top: 0;
  }

  img.right-triangle {
    position: absolute;
    right: 0;
    top: 0;
    width: 150px;
  }

  div.text {
    font-size: 24px;
    margin-top: 48px;
    font-weight: 550;
    text-align: center;
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
  width: 35%;
  margin: 65px 0;

  div.content {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: ${({ type }) =>
      type === "left" ? "flex-end" : "flex-start"};
    div.bg {
      background-image: url("/images/triple-circles.svg");
      width: 120px;
      height: 120px;
      min-width: 120px;
      min-height: 120px;
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
      /* Important */
      min-width: 450px;
      background-color: #ffffffcc;
      /* Important */

      position: absolute;
      top: -50px;
      left: ${({ type }) => (type === "left" ? "-520px" : "200px")};
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
          align-self: flex-start;
          margin-right: 12px;
        }
        span {
          font-size: 16px;
          text-align: left;
        }
      }
    }
  }
`;

export const LoadingSpinner = styled.svg`
  width: 100%;
  height: 400px;
  margin: 2em auto;
  position: absolute;
  min-width: 1400px;
  z-index: -10;
  top: 0;

  .master {
    animation: loading-loop 1s linear infinite;
    --total-length: 371.683;

    @keyframes loading-loop {
      0% {
        stroke-dashoffset: var(--total-length);
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
  }
`;

export const LoopingPath = styled.path`
  stroke-width: 0.2;
  stroke-miterlimit: 10;
  fill: none;
  stroke: rgba(0, 0, 0, 0.1);
`;

export const LoopingPathAnimation = styled.path`
  stroke-miterlimit: 10;
  fill: none;
  stroke: #00000070;
  stroke-width: 0.3;
  --total-length: 371.683;
  --looping-percent: 20;
  --looping-length: calc((var(--looping-percent) * var(--total-length)) / 100);
  stroke-dasharray: var(--looping-length),
    calc(var(--total-length) - var(--looping-length));
`;
