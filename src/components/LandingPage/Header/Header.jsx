import {
  HeaderTopInfo,
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
  Demo,
} from "./Header.styled";

import {
  MdPhoneIphone,
  MdAssistant,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { SiOpenstreetmap } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { FaBattleNet } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
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
                <span>Call: 1800 703 451</span>
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
            <Link to="/home-page/introduction">
              <span>Trang Chủ</span>
            </Link>
            <Link to="/home-page/technology-foundation">
              <span>Về Chúng Tôi</span>
            </Link>
            <Link to="/home-page/vocation-assistance">
              <span>Sản phẩm</span>
            </Link>
            <Link to="/home-page/activities">
              <span>Đối tác</span>
            </Link>
            <Link to="/home-page/blog">
              <span>Cộng Đồng</span>
            </Link>
            <Link to="/home-page/contact-us">
              <span>Liên hệ</span>
            </Link>
          </NavMenu>
          <Demo>
            <div className="demo-content">
              <span>Demo</span>
            </div>
          </Demo>
        </div>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
