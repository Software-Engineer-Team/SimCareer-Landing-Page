import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./ImageSlide.styled";

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#">
          <img src="/images/cohoitrungtuyen-banner.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/bannerappdaihocquoctehongbang.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/Arena.png" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#">
          <img src="/images/bannerappdhvanlang.png" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImageSlide;
