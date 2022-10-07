import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  padding: 24px 0 24px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;

  .bread-crumb-content {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .bread-crumb-list {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        color: rgb(255, 255, 255);
      }

      .seperator {
        margin-left: 8px;
        margin-right: 8px;
      }

      .bread-crumb-item {
        max-width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        cursor: pointer;
        border: 0px;
        background-color: rgb(66, 66, 66);
        height: 29px;
        font-weight: 400;

        a {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;

          span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-left: 12px;
            padding-right: 12px;
          }

          svg {
            color: rgb(224, 224, 224);
            margin-left: 10px;
            margin-right: -6px;
          }
        }
      }
    }
  }
`;
