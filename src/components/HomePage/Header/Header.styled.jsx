import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0f172abf;
`;
export const HeaderTopInfo = styled.div`
  width: 100%;
  /* color: #7f90a0; */
  color: #ffffff;
  background-color: #0f172a50;
  div.top-info {
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        line-height: 43px;
        padding: 0 10px;
        svg {
          /* color: #7f90a0; */
          /* background-color: #7f90a0; */
          font-size: 1.5rem;
          margin-right: 10px;
        }
      }
      li.email {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
/* export const HeaderContent = styled.div` */
/*   width: 100%; */
/*   div.navbar { */
/*     max-width: 970px; */
/*     padding: 0 15px; */
/*     margin: 0 auto; */
/*     width: 100%; */
/*   } */
/* `; */

export const Nav = styled.nav`
  /* position: fixed; */
  /* top: 0; */

  padding: 0 15px;
  width: 100%;
  height: 75px;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1.5px;
  z-index: 3;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
  display: block;
  & img {
    width: 100%;
    display: block;
  }
`;

export const NavMenu = styled.div`
  overflow: hidden;
  display: flex;
  margin-left: 25px;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  color: #ffffff;

  & a {
    padding: 0 12px;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    &:hover {
      & > span:before {
        transform: scaleX(1);
      }
    }
  }

  & svg {
    height: 20px;
    width: 20px;
    min-width: 20px;
  }

  & span {
    font-size: 13px;
    padding: 1px 0;
    margin-left: 8px;
    line-height: 1.5;
    cursor: pointer;
    position: relative;
    letter-spacing: 1.42px;
    line-height: 2.98;
    &:before {
      content: "";
      background: #f9f9f9;
      border-radius: 0 0 8px 8px;
      height: 2px;
      position: absolute;
      bottom: 0px;
      width: 100%;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }
  }

  @media (max-width: 930px) {
    display: none;
  }
`;
