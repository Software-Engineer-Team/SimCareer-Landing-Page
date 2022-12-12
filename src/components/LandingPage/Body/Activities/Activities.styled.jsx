import styled from "styled-components";

export const ActivitiesContent = styled.div`
  padding: 10px;
  max-width: 1600px;
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
  font-size: 55.25px;
  text-transform: uppercase;
  color: #6a3ce8;
  font-weight: 550;
  margin-bottom: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
`;

export const ActivitiesImage = styled.div`
  position: relative;
  height: 100%;
  /* min-width: 500px; */
  width: 100%;
  display: block;
  margin-bottom: 50px;
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
  --width-triangle: 150px;
  --height-triangle: 300px;
  --top-triangle: -387px;

  svg.right-triangle {
    color: #6a3ce8;
    position: absolute;
    right: 0;
    top: var(--top-triangle);
    width: var(--width-triangle);
    height: var(--height-triangle);
  }

  svg.left-triangle {
    color: #6a3ce8;
    position: absolute;
    top: var(--top-triangle);
    left: 0;
    width: var(--width-triangle);
    height: var(--height-triangle);
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
        left: -420px;
      `
          : id === 2
          ? `
        top: -120px;
        right: -100px;
        min-width: 505px;
      `
          : id === 3
          ? `
        top: 300px;
        left: -300px;
        min-width: 505px;
      `
          : `
        bottom: -250px;
        left: 0px;
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
        font-size: 30px;
        text-align: left;

        .btn {
          background-color: #6a3ce8;
          font-size: 14px;
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
          text-decoration: none;
        }

        .pilar {
          /* border: 1px solid #6a3ce8; */
          /* border-radius: 30px; */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 75px;
          /* width: 100%; */
          font-size: 30px;

          flex-wrap: nowrap;
          padding-right: 13px;
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
          font-size: 18px;
          text-align: left;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
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
        width: 20px;
        height: 20px;
        min-width: 20px;
        min-height: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        img {
          width: 10px;
          height: 20px;
        }
      }
      div.info {
        min-width: 200px !important;
        height: 110px;
        .track-end {
          top: -30px;
          right: 15px;
          img {
            width: 50px;
            height: 50px;
          }
        }

        &:hover {
          transform: scale(1.1);
        }

        ${({ id }) =>
          id === 1
            ? `
        top: -100px;
        min-width: 500px;
        left: -130px;
      `
            : id === 2
            ? `
        top: 90px;
        right: -200px;
        min-width: 250px!important;
        height: 110px;
      `
            : id === 3
            ? `
        top: -95px;
        left: -185px;
        min-width: 230px!important;
        height: 110px;
              `
            : `
        bottom: -180px;
        left: -100px;
        min-width: 250px!important;
        height: 120px;
      `}

        padding: 6px 16px;
        div.title {
          .btn {
            font-size: 8px;
            min-width: 65px;
            height: 16px;
            line-height: 1.5;
          }

          .pilar {
            height: 30px;
            font-size: 10px;

            padding-right: 13px;
          }

          &:last-child {
            width: 500px;
          }
        }

        div.text {
          img {
            width: 10px;
          }
          span {
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export const ActivitiesContainer = styled.section`
  width: 100%;
  padding: 20px;
  text-align: center;

  @media screen and (max-width: 500px) {
    ${ActivitiesContent} {
      ${ActivitiesTitle} {
        font-size: 15.25px;
      }
      ${ActivitiesImage} {
        div.laptop {
          width: 170px;
          img {
            max-width: 170px;
            min-width: 160px;
            object-fit: cover;
          }

          img.dashboard {
            min-width: 130px;
            width: 120px !important;
            height: 85px;
            border-radius: 8px;
            top: 2px;
          }
        }
        --width-triangle: 50px;
        --height-triangle: 100px;
        --top-triangle: -107px;
        margin-bottom: 30px;
      }
      ${ActivitiesPillars} {
        height: 450px;
      }
    }
  }
`;

export const LoadingSpinner = styled.svg`
  width: 100%;
  height: 400px;
  margin: 2em auto;
  position: absolute;
  /* min-width: 1400px; */
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
