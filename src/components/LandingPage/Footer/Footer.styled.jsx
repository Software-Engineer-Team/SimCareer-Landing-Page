import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  padding: 4rem 8rem;
  background-color: black;
  border-top: 1px solid white;
  hr {
    margin-top: 80px;
    margin-bottom: 16px;
    height: 0;
    border: 1px solid #222;
  }
  & > div:last-child {
    margin-left: 0;
    font-size: 16px;
    color: #999;
    text-align: left;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0;
  height: 100%;
  margin: 0 auto;
  max-width: 1740px;

  div.img-text {
    display: flex;
    flex-direction: column;
    img {
      height: auto;
      width: 280px;
      margin-right: auto;
      align-self: left;
      margin-left: 0;
    }
    div.text {
      color: #fff;
      text-align: left;
      line-height: 1.2;
      font-weight: 500;
      width: 300px;
      margin-top: 16px;
      margin-left: 16px;
      font-size: 16px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
  }
  div.useful-link {
    padding-left: 112px;
    color: #fff;
    padding-top: 16px;
    margin-left: 16px;
    text-align: left;
    min-width: 300px;
    flex: 1 1 0%;
    div.text {
      font-size: 28px;
      margin-top: 0;
      font-weight: 800;
      font-family: "Roboto";
    }
    a {
      display: block;
      text-decoration: none;
      color: #fff;
      margin-top: 12px;
      text-align: left;

      line-height: 1.2;
      font-weight: 300;
      max-width: 200px;
      font-size: 16px;
    }
  }

  div.contact-us {
    padding-left: 80px;
    align-self: flex-end;
    color: #fff;
    padding-top: 16px;
    margin-left: 16px;
    text-align: left;
    div.text {
      font-size: 20px;
      margin-top: 0;
      font-weight: 800;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 16px;
        font-size: 35px;
      }
      span {
        font-size: 16px;
        min-width: 24px;
      }
    }
    div.email {
      margin-top: 12px;
    }
    div.address {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1580px) {
    div.contact-us {
      padding-left: 0;
      div.address {
        margin-top: 3px;
      }
      div svg {
        font-size: 20px;
      }
    }
  }

  /*   div.useful-link { */
  /*     padding-left: 0; */
  /*     width: 50%; */
  /*     max-width: 50%; */
  /*     a { */
  /*       margin-top: 3px; */
  /*     } */
  /*   } */
  /* } */

  /* @media screen and (max-width: 890px) { */
  /*   div.useful-link { */
  /*     padding-left: 0; */
  /*     margin-top: 16px; */
  /*   } */
  /*   div.contact-us { */
  /*     width: 100%; */
  /*   } */
  /* } */
`;
