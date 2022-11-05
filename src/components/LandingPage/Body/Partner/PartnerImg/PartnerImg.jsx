import { Zoom } from "react-reveal";
import styled from "styled-components";

const PartnerImg = ({
  src,
  width,
  height,
  left,
  top,
  borderRadius,
  bg,
  zoomType,
}) => {
  return (
    <Container width={width} height={height} left={left} top={top} bg={bg}>
      <Zoom {...zoomType}>
        <Image src={src} borderRadius={borderRadius}></Image>
      </Zoom>
    </Container>
  );
};

export default PartnerImg;

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => (bg ? bg : "white")};
  justify-content: center;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: ${({ borderRadius }) => (borderRadius ? "50%" : "0%")};
`;
