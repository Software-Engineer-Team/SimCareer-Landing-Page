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
  font-size: 70.25px;
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
    top: -387px;
    width: 150px;
    height: 400px;
  }

  svg.left-triangle {
    color: #6a3ce8;
    position: absolute;
    left: 0;
    top: -387px;
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
  background-image: url("/images/track.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1200px;
`;

export const PillarContainer = styled.div`
  position: relative;
  width: 35%;
  margin: 65px 0;

  div.content {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: ${({ type }) =>
      type === "left" ? "flex-end" : "flex-start"};
    div.bg {
      /* background-image: url("/images/triple-circles.svg"); */
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
      min-width: 560px;
      background-color: #ffffff;
      transition: all 300ms ease-in;
      position: relative;

      .track-end {
        position: absolute;
        top: -100px;
        right: -50px;
        img {
          width: 190px;
          height: 190px;
        }
      }

      &:hover {
        transform: scale(1.1);
      }

      ${({ id }) =>
        id === 1
          ? `
        top: -150px;
        min-width: 500px;
        left: -520px;
      `
          : id === 2
          ? `
        top: 70px;
        right: 100px;
      `
          : id === 3
          ? `
        top: -200px;
        left: 0px;
        width: 485px;
      `
          : `
        bottom: -250px;
        left: 0px;
        width: 640px;
      `}

      position: absolute;
      padding: 16px 24px;
      border: 0.5px solid #6a3ce8;
      box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 0px 34px -13px rgba(0, 0, 0, 0.75);
      border-radius: 19px;
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
          /* border: 1px solid #6a3ce8; */
          /* border-radius: 30px; */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 75px;
          /* width: 100%; */
          font-size: 40px;

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
          width: 32px;
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
