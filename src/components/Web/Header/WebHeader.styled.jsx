import styled from "styled-components";

export const WebContainer = styled.div`
  background-color: #222745;
  height: 60px;
  width: 100%;

  .nav-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0px;
    padding-left: 24px;
    padding-right: 15px;
    max-width: 800px;
    width: 100%;

    .nav-right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;

      & > svg {
        color: rgb(0, 101, 255);
        &:first-child {
          position: relative;
          display: flex;
          margin-left: 5px;
          margin-right: 10px;
        }

        &:nth-child(2),
        &:last-child {
          margin-left: 22px;
        }
      }
    }

    .nav-left {
      height: 100%;
      display: flex;
      flex-direction: row;
      /* justify-content: space-between; */
      align-items: center;
      width: 100%;

      & > a > img {
        width: 125px;
        height: 30px;
      }

      button {
        margin-left: 50px;
        width: 117px;
        height: 25px;
        font-size: 14px;
        font-weight: 700;
        background: linear-gradient(57.03deg, #1624f9 23.11%, #2adeff 88.93%);
        border-radius: 25px;
        color: #fff;
        padding: 0px 8px;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
  }
`;
