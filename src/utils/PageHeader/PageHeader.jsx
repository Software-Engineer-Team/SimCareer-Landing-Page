import styled from "styled-components";

const PageHeaderGeneral = ({ headerTitle, bg }) => {
  return (
    <PageHeader>
      <PageHeaderBg bg={bg} />
      <PageHeaderContainer>
        <h2>{headerTitle}</h2>
      </PageHeaderContainer>
    </PageHeader>
  );
};

const PageHeader = styled.section`
  position: relative;
  padding: 123px 0 120px;
  z-index: 1;
  width: 100%;
`;
const PageHeaderBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  &:before {
    position: absolute;
    inset: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;
const PageHeaderContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-wrap: break-word;
  h2 {
    font-size: 60px;
    color: #ffffff;
    line-height: 60px;
    letter-spacing: 10px;
    margin-bottom: 13px;
    font-weight: 700;
    margin: 13px 0;
    font-family: "Amatic SC", cursive;
  }
`;

export default PageHeaderGeneral;
