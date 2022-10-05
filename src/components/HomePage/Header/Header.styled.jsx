import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgb(4, 189, 178);
  background: linear-gradient(
    0deg,
    rgba(4, 189, 178, 1) 0%,
    rgba(16, 7, 40, 1) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(26, 25, 27, 1) 46%,
    rgba(236, 236, 236, 1) 50%,
    rgba(0, 0, 0, 1) 54%
  );
`;
export const HeaderTopInfo = styled.div`
  color: #ffffff;
  background-color: #0f172a50;
  div.top-info {
    max-width: 1400px;
    padding: 0 15px;
    height: 75px;
    margin: 0 auto;
    width: 100%;
    display: flex;
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
        font-size: 12px;
        line-height: 43px;
        padding: 0 10px;
        svg {
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
  height: 55px;
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
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  color: #ffffff;
  & > a:first-child {
    padding-left: 5px;
  }

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
