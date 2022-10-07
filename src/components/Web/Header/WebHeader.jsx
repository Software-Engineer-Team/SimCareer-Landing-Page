import React from "react";
import { Link } from "react-router-dom";
import { WebContainer } from "./WebHeader.styled";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const WebHeader = () => {
  return (
    <WebContainer>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to={"#"}>
            <img src="/images/yoot.png" alt="" />
          </Link>
          <button>About Yoot</button>
        </div>
        <div className="nav-right">
          <BsFillBellFill />
          <Link to={"/web"}>
            <AiFillHome />
          </Link>
          <FiMenu />
        </div>
      </nav>
    </WebContainer>
  );
};

export default WebHeader;
