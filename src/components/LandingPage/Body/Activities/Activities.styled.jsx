import styled from "styled-components";
export const ActivitiesContainer = styled.section`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ActivitiesContent = styled.div`
  padding: 30px;
  max-width: 1800px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ActivitiesTitle = styled.div`
  font-family: "Anton", sans-serif;
  font-size: 73.25px;
  text-transform: uppercase;
  color: #6a3ce8;
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
  margin-bottom: 100px;
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

  svg.right-triangle {
    color: #6a3ce8;
    position: absolute;
    right: 0;
    top: -47px;
    width: 150px;
    height: 400px;
  }

  svg.left-triangle {
    color: #6a3ce8;
    position: absolute;
    left: 0;
    top: -47px;
    width: 150px;
    height: 400px;
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
  position: relative;
  width: 35%;
  margin: 65px 0;
  /* height: 1000px; */

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
      height: 240px;
      width: 645px;

      /* Important */

      ${({ id }) =>
        (id === 2 || id === 4) &&
        `
        /* display: flex; */
        /* flex-direction: column-reverse; */
        top: -15px!important;
      `}

      position: absolute;
      top: -100px;
      left: ${({ type }) => (type === "left" ? "-720px" : "200px")};
      padding: 16px 24px;
      border: 0.5px solid #aaa;
      border-radius: 9px;
      div.title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-family: "Anton", sans-serif;
        line-height: 1.1;
        font-size: 40px;
        text-align: left;
        margin-bottom: 16px;

        .btn {
          background-color: #6a3ce8;
          font-size: 17px;
          margin-top: 30px;
          margin-right: 20px;
          color: #ffffff;
          text-transform: uppercase;
          font-family: "Anton", sans-serif;
          border-radius: 30px;
          min-width: 140px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .pilar {
          border: 1px solid #6a3ce8;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 75px;
          /* margin-bottom: 60px; */
          width: 100%;

          flex-wrap: nowrap;
          padding: 13px;
        }

        &:last-child {
          width: 500px;
        }
      }

      div.text {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-family: Cambria, Georgia, serif;
        img {
          width: 22px;
          align-self: flex-start;
          margin-right: 12px;
        }
        span {
          font-size: 20px;
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
