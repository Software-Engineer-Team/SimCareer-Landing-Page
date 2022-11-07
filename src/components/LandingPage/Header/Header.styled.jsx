import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: black;
  width: 100%;
`;

export const HeaderTopInfo = styled.div`
  color: #ffffff;
  div.top-info-container {
    background-color: #0f172a50;
    max-width: 1740px;
    margin: 0 auto;
  }
  div.top-info {
    display: flex;
    padding: 0 15px;
    height: 75px;
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      justify-content: flex-end;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 43px;
        padding: 0 10px;
        font-weight: 500;
        letter-spacing: 0.5px;

        &.phone,
        &.email {
          font-family: Cambria, Georgia, serif;
          margin-right: 90px;
        }

        svg {
          margin-right: 10px;
        }
      }

      li.menu-container {
        display: flex;
        .menu-logo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 35px;
            height: 35px;
            object-fit: cover;
          }
          div {
            font-family: "Anton", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            height: 15px;
          }
        }
        svg {
          width: 35px;
          height: 35px;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 115px;
  background-color: white;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  & .nav-container {
    max-width: 2000px;
    width: 1500px;
    margin: 0 auto;
    height: 115px;
    display: flex;
  }
`;

export const Logo = styled.a`
  width: 130px;
  height: 130px;
  margin-left: 20px;

  & img {
    width: 100%;
    display: block;
  }
`;

export const NavMenu = styled.div`
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #000000;
  height: 100%;
  width: 100%;
  color: #000000;
  & > a:first-child {
    padding-left: 5px;
  }

  & a {
    padding: 0 12px;
    display: flex;
    align-items: center;
    color: #000000;
    text-decoration: none;
    &:hover {
      & > span:before {
        transform: scaleX(1);
      }
    }
  }

  & span {
    font-size: 24.25px;
    font-family: "Anton", sans-serif;
    margin-left: 20px;
    text-transform: uppercase;
    height: auto;
    cursor: pointer;
    position: relative;
    line-height: 2.98;

    &:before {
      content: "";
      background: #000000;
      height: 2px;
      position: absolute;
      bottom: 5px;
      width: 100%;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export const Demo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .demo-content {
    font-family: "Anton", sans-serif;
    font-size: 24.25px;
    border: 1px solid #000000;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    text-align: center;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
      background: #000000;
      color: #ffffff;
    }
  }
`;
