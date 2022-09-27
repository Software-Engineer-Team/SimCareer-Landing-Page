import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <Content>
        <Circle></Circle>
      </Content>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  background: rgb(188, 39, 29);
  opacity: 1;
  display: flex;
  z-index: 9999999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
`;

const Content = styled.div`
  position: absolute;
  margin: auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;

const Circle = styled.div`
  box-sizing: content-box !important;
  width: 20px;
  height: 20px;
  border: 17px dashed white;
  border-radius: 50px;
  background-color: transparent;
  -webkit-animation: plrotate 1.5s infinite linear;
  animation: rotate 1.5s infinite linear;
  background-color: transparent;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
