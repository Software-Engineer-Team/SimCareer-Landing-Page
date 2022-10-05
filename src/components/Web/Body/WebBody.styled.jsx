import styled from "styled-components";

export const WebContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 60px);
  justify-content: center;
  background-color: #181c34;

  .container-layout {
    max-width: 800px;
    width: 100%;
    position: relative;
    background: radial-gradient(circle at top, #414a7b 0%, #1d223d 15%);
  }
`;
