import React from "react";
import { Fade } from "react-reveal";
import { Container, Content, ContentLeft, ContentRight } from "./Story.styled";

const Story = () => {
  return (
    <Container id="introduction">
      <Content>
        <ContentLeft>
          <Fade left cascade>
            <div className="content-left">
              <div className="content-left-flag">
                <img src="/images/flag.png" alt="flag" />
              </div>
              <div className="content-left-logo">
                <img src="/images/another-logo.png" alt="flag" />
              </div>
              <div className="content-left-introduction">
                <div className="create-account">
                  <span>Tạo tài khoản</span>
                </div>
                <div className="watch-video">
                  <span>watch video</span>
                </div>
              </div>
            </div>
          </Fade>
        </ContentLeft>
        <ContentRight>
          <Fade right>
            <img src="/images/road.png" alt="" />
          </Fade>
        </ContentRight>
      </Content>
    </Container>
  );
};

export default Story;
