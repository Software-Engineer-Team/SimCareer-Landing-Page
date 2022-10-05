import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  width: 100%;
  height: 100%;
  div.inner-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 20px 0;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    h2.title {
      width: 100%;
      align-items: center;
      text-align: center;
      padding: 20px 0;
    }
  }

  div.members {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20px;
    div.member {
      width: 300px;
      align-items: center;
      text-align: center;
      display: flex;
      /* flex-wrap: nowrap; */
      flex-direction: column;
      padding: 20px;
      img {
        border: 0;
        width: 250px;
        height: 250px;
        /* object-fit: corver; */
        border-radius: 50%;
      }
      div.text {
        font-size: 18px;
        font-family: "Nutito";
        font-weight: 400;
        margin-top: 20px;
        p {
          text-align: center;
        }
        p.description {
          text-align: justify;
        }
      }
    }
  }
`;
