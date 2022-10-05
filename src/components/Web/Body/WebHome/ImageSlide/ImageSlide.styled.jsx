import Slider from "react-slick";
import styled from "styled-components";

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    z-index: 1;
    width: 5vw;
  }

  & > button:hover {
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  ul li button {
    &:before {
      color: #fff;
      font-size: 10px;
    }
  }

  li.slick-active button:before {
    color: white !important;
  }

  .slick-list {
    /* overflow: hidden; */
  }

  .slick-prev {
    left: 1px;
    color: white;
  }

  .slick-next {
    right: 1px;
    color: white;
  }
`;

export const Wrap = styled.div`
  position: relative;
  border-radius: 4px;
  position: relative;

  a {
    border: 0px;
    /* padding: -8px; */
    display: block;
    text-decoration: none;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
