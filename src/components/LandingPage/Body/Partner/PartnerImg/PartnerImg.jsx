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
  number,
}) => {
  return (
    <Container
      src={src}
      width={width}
      height={height}
      left={left}
      top={top}
      bg={bg}
      borderRadius={borderRadius}
      className={`partner-${number}`}
    >
      <Zoom {...zoomType}>
        <Image
          width={width}
          height={height}
          src={src}
          borderRadius={borderRadius}
        ></Image>
      </Zoom>
    </Container>
  );
};

export default PartnerImg;

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => (borderRadius ? "50%" : "0%")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: ${({ bg }) => bg};
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: ${({ borderRadius }) => (borderRadius ? "50%" : "0%")};
`;
