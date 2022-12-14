import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  max-width: 1740px;
  margin: 0 auto;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  width: 50%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  display: flex;
  margin-top: 50px;
  flex-direction: column;

  .content-left {
    display: flex;
    align-self: flex-end;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;

    .content-left-flag {
      width: 200px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .content-left-logo {
      width: 300px;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slogon {
      margin-top: 20px;
      width: 100%;
      .slogon-title {
        font-family: "Alfa Slab One", cursive;
        font-weight: 500;
        font-size: 26.76px;
      }

      .slogon-content {
        display: flex;
        align-items: center;
        margin-left: 40px;
        margin-top: 10px;
        font-weight: 700;

        img {
          width: 40px;
          height: 40px;
        }

        .text {
          font-size: 16px;
        }
      }
      .slogon-content:last-child {
        margin-bottom: 20px;
      }
    }
    .content-left-introduction {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      .create-account,
      .watch-video {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12rem;
        height: 4rem;
        border-radius: 37px;
        border: 1px solid #6a3ce8;
        background-color: #6a3ce8;
        font-family: "Anton", sans-serif;
        font-size: 24.25px;
        color: #ffffff;
        cursor: pointer;
        transition: all 100ms ease-in;
        text-decoration: none;
        &:hover {
          background-color: #ffffff;
          color: #6a3ce8;
        }
      }
      .watch-video {
        color: #000000;
        background-color: #ffffff;

        &:hover {
          background-color: #000000;
          border-color: #000000;
          color: #ffffff;
        }
      }
    }
  }
`;

export const ContentRight = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 40px;
  /* justify-content: center; */
  flex-wrap: nowrap;
  flex-direction: column;
  img {
    height: 500px;
  }
`;

export const Container = styled.section`
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
  padding: 20px;

  @media screen and (max-width: 500px) {
    padding: 10px;
    ${Content} {
      ${ContentLeft} {
        margin-top: 0px;
        .content-left {
          .content-left-flag {
            width: 100px;
            height: 50px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .content-left-logo {
            width: 130px;
          }

          .slogon {
            margin-top: 20px;
            width: 100%;
            .slogon-title {
              font-size: 14.76px;
            }

            .slogon-content {
              margin: 0;
              img {
                width: 25px;
                height: 25px;
              }

              .text {
                font-size: 10px;
                text-align: justify;
              }
            }
          }
          .content-left-introduction {
            justify-content: center;
            margin-top: 10px;
            .create-account,
            .watch-video {
              margin-left: 5px;
              width: 4rem;

              height: 1.5rem;
              border-radius: 4px;
              font-size: 10.25px;
            }
          }
        }
      }
      ${ContentRight} {
        width: 40%;
        display: flex;
        margin-left: 30px;
        img {
          height: 180px;
        }
      }
    }
  }
`;
