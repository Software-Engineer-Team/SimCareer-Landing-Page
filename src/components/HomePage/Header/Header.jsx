import {
  HeaderTopInfo,
  HeaderContainer,
  Nav,
  Logo,
  NavMenu,
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

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTopInfo>
        <div className="top-info">
          <Logo>
            <img src="/logo.png" alt="Logo"></img>
          </Logo>
          <ul>
            <li className="address">
              <SiOpenstreetmap />
              <span>2124 WallStreer, London UK</span>
            </li>
            <li className="phone">
              <MdPhoneIphone />
              <span>+555 65165 156</span>
            </li>
            <li className="email">
              <FiSend />
              <span>top-info@company.com</span>
            </li>
          </ul>
        </div>
      </HeaderTopInfo>
      <Nav>
        <NavMenu>
          <Link to="/home-page/introduction">
            <AiFillHome />
            <span>Introduction</span>
          </Link>
          <Link to="/home-page/technology-foundation">
            <FaBattleNet />
            <span>Technology Foundation</span>
          </Link>
          <Link to="/home-page/vocation-assistance">
            <HiAcademicCap />
            <span>Vocation Assistance</span>
          </Link>
          <Link to="/home-page/activities">
            <MdOutlineVolunteerActivism />
            <span>Activities</span>
          </Link>
          <Link>
            <MdAssistant />
            <span>Recruit</span>
          </Link>
          <Link to="/home-page/contact-us">
            <RiContactsLine />
            <span>Contact Us</span>
          </Link>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
