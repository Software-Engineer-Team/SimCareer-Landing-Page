import {
  HeaderContent,
  HeaderTopInfo,
  HeaderContainer,
  Nav,
  Logo,
  Login,
  NavMenu,
  UserImg,
  SignOut,
  DropDown,
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
        <Logo>
          <img src="/logo.png" alt="Logo"></img>
        </Logo>
        <NavMenu>
          <Link to="/home">
            <AiFillHome />
            <span>Introduction</span>
          </Link>
          <a>
            <FaBattleNet />
            <span>Technology Foundation</span>
          </a>
          <a>
            <HiAcademicCap />
            <span>Vocation Assistance</span>
          </a>
          <a>
            <MdOutlineVolunteerActivism />
            <span>Activities</span>
          </a>
          <a>
            <MdAssistant />
            <span>Recruit</span>
          </a>
          <a>
            <RiContactsLine />
            <span>Contact Us</span>
          </a>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
