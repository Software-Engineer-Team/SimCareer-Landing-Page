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

  @media screen and (max-width: 500px) {
    padding: 0;
    padding-bottom: 10px;
    hr {
      margin-top: 10px;
    }

    & > div:last-child {
      margin: 0;
      font-size: 10px;
      color: #999;
      text-align: left;
    }
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
      font-weight: 500;
      width: 300px;
      margin-top: 16px;
      margin-left: 16px;
      font-size: 16px;
      font-family: Cambria, Georgia, serif;
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
      font-family: Cambria, Georgia, serif;
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
      font-family: Cambria, Georgia, serif;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: Cambria, Georgia, serif;
      svg {
        margin-right: 16px;
        font-size: 35px;
      }
    }
    div.email {
      margin-top: 12px;
      font-size: 16px;
      min-width: 24px;
    }
    div.address {
      margin-top: 20px;
      font-size: 16px;
      min-width: 24px;
    }
  }

  @media screen and (max-width: 500px) {
    div.contact-us {
      padding-left: 0;
      div.text {
        font-size: 12px;
      }
      div.address {
        margin-top: 3px;
      }

      div.address,
      div.email {
        font-size: 12px;
      }
      div svg {
        font-size: 15px;
      }
    }
    div.img-text {
      img {
        width: 150px;
      }
      div.text {
        line-height: 1.2;
        width: 300px;
        margin-top: 5px;
        font-size: 14px;
        text-align: left;
      }
    }
  }
`;
