import styled from "styled-components";

export const MainMenu = styled.div`
  &.main-menu {
    padding: 10px 0 32px 0px;
    margin: 0 auto;
    & > div {
      color: red !important;
      border: 0 !important;
      outline: none;
    }
    .main-menu-banner {
      padding: 15px 70px 15px 60px;
      width: 100%;
      position: relative;
      .slick-list {
        height: 100%;
      }
    }

    .main-menu-item {
      display: grid;
      margin-top: 30px;
      padding: 0px 80px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 12px 14px;

      .item {
        cursor: pointer;
        position: relative;
        img {
          width: 100%;
        }
      }
    }

    .special-school-list {
      margin-top: 20px;

      & > p {
        text-align: right;
        margin: auto;
        padding-bottom: 10px;
        a {
          font-size: 15px;
          color: #00d1ff;
          margin-right: 20px;
          text-decoration: underline;
          font-family: Helvetica;
          font-weight: 700;
        }
      }

      .title {
        width: 400px;
        height: 98px;
        margin: auto;
      }

      .schools {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        padding-left: 36px;
        padding-right: 36px;
        height: 310px;
      }
    }
  }
`;
