import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
  padding: 20px;
`;

export const Content = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  height: 100%;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  max-width: 1400px;
  margin: 0 auto;
  /* align-items: center; */
  justify-content: space-between;

  @media (max-width: 1340px) {
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  margin-top: 130px;
  flex-direction: column;
  justify-content: center;

  .content-left {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;

    .content-left-flag {
      width: 190px;
      height: 190px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content-left-logo {
      width: auto;
      height: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content-left-introduction {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .create-account,
      .watch-video {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 21rem;
        height: 4.9rem;
        border-radius: 37px;
        border: 1px solid #6a3ce8;
        background-color: #6a3ce8;
        font-family: "Anton", sans-serif;
        font-size: 43.25px;
        color: #ffffff;
        cursor: pointer;
        transition: all 100ms ease-in;
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
  @media (max-width: 767px) {
    padding: 0;
  }
`;
export const ContentRight = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  /* margin-left: 200px; */
  /* justify-content: center; */
  flex-wrap: nowrap;
  flex-direction: column;
  img {
    margin-left: 200px;
  }

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;
