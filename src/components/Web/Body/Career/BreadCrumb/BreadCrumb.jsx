import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumbContainer } from "./BreakCrumb.styled";
import { IoHomeSharp } from "react-icons/io5";

const BreadCrumb = (props) => {
  return (
    <BreadCrumbContainer>
      <div className="bread-crumb-content">
        <ul className="bread-crumb-list">
          {props.crumbs.map((crumb, idx) => {
            if (crumb === "/") {
              return (
                <li key={idx} className="seperator">
                  {crumb}
                </li>
              );
            } else if (crumb === "home-page") {
              return (
                <li key={idx} className="bread-crumb-item">
                  <Link to={"/web"}>
                    <IoHomeSharp />
                    <span>{crumb}</span>
                  </Link>
                </li>
              );
            }
            return (
              <li key={idx} className="bread-crumb-item">
                <Link to={`/web/${crumb}`}>
                  <span>{crumb}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
