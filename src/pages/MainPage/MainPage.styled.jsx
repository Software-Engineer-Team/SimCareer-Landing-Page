import styled from "styled-components";

export const Split = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .btn {
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    width: 15rem;
    padding: 1rem;
    z-index: 2;
  }

  .split-left,
  .split-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;

    small,
    span {
      text-transform: uppercase;
      margin-bottom: 8px;
      color: #ffffff;
      display: inline-block;
      font-size: 1.375rem;
      opacity: 0.8;
      font-weight: 500;
      z-index: 1;
    }

    h1 {
      font-size: 50px;
      font-weight: 400;
      z-index: 2;
      margin: 0;
      margin-bottom: 8px;
      color: #fff;
    }

    span {
      margin-bottom: 18px;
      font-size: 1rem;
    }
  }

  .split-left {
    background-image: url("/images/students.jpg");
    width: 50%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--left-bg-color);
      z-index: 1;
    }

    .btn:hover {
      background: var(--left-btn-hover-color);
      border-color: var(--left-btn-hover-color);
    }
  }

  .split-right {
    background-image: url("/images/employers.jpg");
    width: 50%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--right-bg-color);
      z-index: 1;
    }

    .btn:hover {
      background: var(--right-btn-hover-color);
      border-color: var(--right-btn-hover-color);
    }
  }

  .split-left,
  .split-right,
  .split-left::before,
  .split-right::before {
    transition: all var(--speed) ease-in-out;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }

    .btn {
      padding: 1.2rem;
      width: 12rem;
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &.hover-left {
    ${Split} {
      .split-left {
        width: var(--hover-width);
      }
    }
  }

  &.hover-left {
    background-color: red;
    ${Split} {
      .split-right {
        width: var(--other-width);
      }
    }
  }

  &.hover-right {
    background-color: red;
    ${Split} {
      .split-right {
        width: var(--hover-width);
      }
    }
  }

  &.hover-right {
    background-color: red;
    ${Split} {
      .split-left {
        width: var(--other-width);
      }
    }
  }
`;
