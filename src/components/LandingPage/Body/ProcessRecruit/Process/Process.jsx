import styled from "styled-components";

const Process = ({ number, text, top, left }) => {
  return (
    <Container
      top={top}
      left={left}
      isFlexColumn={number === 2 ? false : true}
      className={`process-${number}`}
    >
      <h3>
        <span>{number}</span>
      </h3>
      <div>
        {text}
        <br />
      </div>
    </Container>
  );
};

export default Process;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ isFlexColumn }) => (isFlexColumn ? "column" : "row")};
  padding: 20px;
  width: 50%;
  color: #fff;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  p {
    font-size: 16px;
    font-family: "Nunito";
    color: #fff;
    text-align: justify;
  }

  div {
    font-size: 23px;
    font-weight: 300;
    color: #ffffff;
    font-family: "Nunito";
    margin-bottom: 15px;
    text-align: justify;
    font-family: Cambria, Georgia, serif;
    letter-spacing: 1.2px;
  }

  h1 {
    font-size: 20px;
    color: #ffffff;
    font-weight: 800;
    margin: 0;
    margin-bottom: 35px;
    font-family: "Nunito";
  }

  h3 {
    font-size: 16px;
    color: #ffffff;
    font-family: "Nunito";
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
    span {
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        321.04deg,
        rgba(255, 255, 255, 0.939986) 16.04%,
        rgba(255, 255, 255, 0.545072) 82.01%
      );
      border-radius: 50%;
      margin-top: -5px;
      margin-right: 20px;
      text-align: center;
      line-height: 40px;
      color: #3c3cc1;
      font-weight: 700;
      font-size: 36px;
    }
  }
  @media screen and (max-width: 1200px) {
    &.process-4 {
      width: auto;
      margin-left: 4rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0px;
    max-width: 130px;

    &.process-4 {
      margin-left: 0rem;
    }

    p {
      font-size: 10px;
    }

    div {
      font-size: 10px;
      min-width: 130px;
      max-width: 130px;
      margin: 0 10px;
    }

    h1 {
      font-size: 16px;
    }

    h3 {
      span {
        width: 20px;
        height: 20px;
        font-size: 16px;
      }
    }
  }
`;
