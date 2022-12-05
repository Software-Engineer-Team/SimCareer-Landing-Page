import {
  HeaderTopInfo,
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
  Demo,
} from "./Header.styled";

import { CgMenuGridO } from "react-icons/cg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTopInfo>
        <div className="top-info-container">
          <div className="top-info">
            <ul>
              <li className="email">
                <span>Email: contact@simcareer.vn</span>
              </li>
              <li className="phone">
                <span>Call: 0963985652</span>
              </li>
              <li className="menu-container">
                <div className="menu-logo">
                  <img src="/images/simcareer.png" alt="" />
                  <div>SIRI</div>
                </div>
                <CgMenuGridO />
              </li>
            </ul>
          </div>
        </div>
      </HeaderTopInfo>
      <Nav>
        <div className="nav-container">
          <NavMenu>
            <Logo>
              <img src="/images/simcareer.png" alt="Logo"></img>
            </Logo>
            <a href="#introduction">
              <span>Trang Chủ</span>
            </a>
            <a href="#content">
              <span>Về Chúng Tôi</span>
            </a>
            <a href="#activity">
              <span>Sản phẩm</span>
            </a>
            <a href="#partner">
              <span>Đối tác</span>
            </a>
            <a href="#process-recruit">
              <span>Cộng Đồng</span>
            </a>
            <a href="#contact-us">
              <span>Liên hệ</span>
            </a>
          </NavMenu>
          <Demo>
            <a
              href={process.env.REACT_APP_ENDPOINT_SIMCAREER}
              target="_blank"
              className="demo-content"
            >
              <span>Demo</span>
            </a>
          </Demo>
        </div>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
