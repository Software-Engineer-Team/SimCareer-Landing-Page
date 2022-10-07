import React from "react";
import { Link } from "react-router-dom";
import ImageSlide from "@components/Web/Body/WebHome/ImageSlide/ImageSlide";
import { MainMenu } from "./WebHome.styled";
import Schools from "@components/Web/Body/Schools/Schools";

const images = [
  { src: "/images/hn-banner.png", url: "/web/career-guidance" },
  { src: "/images/vl-banner.png" },
  { src: "/images/dh-n2.png" },
  { src: "/images/kn-banner.png" },
  { src: "/images/cd-banner.png" },
  { src: "/images/chat-banner.png" },
];

const WebHome = () => {
  return (
    <MainMenu className="main-menu">
      <div className="main-menu-banner">
        <ImageSlide />
      </div>
      <div className="main-menu-item">
        {images.map(({ src, url }, idx) => {
          return (
            <div class="item" key={idx}>
              <Link to={url ? url : "#"}>
                <img src={src} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="special-school-list">
        <div className="title">
          <img src="/images/SpecialSchoolTitle.png" alt="" />
        </div>
        <p>
          <Link to={"#"}>Show all</Link>
        </p>
        <Schools />
      </div>
    </MainMenu>
  );
};

export default WebHome;
