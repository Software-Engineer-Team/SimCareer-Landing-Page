import React from "react";
import { Fade } from "react-reveal";
import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
} from "./Introduction.styled";

const Introduction = () => {
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
              <div className="slogon">
                <div className="slogon-title">
                  Cùng bạn chinh phục nhà tuyên dụng!
                </div>
                <div className="slogon-content">
                  <img src="/images/complete-cv.jpg" alt="" />
                  <div className="text">Hoàn thiện CV - Lo chi việc khó</div>
                </div>
                <div className="slogon-content">
                  <img src="/images/route.jpg" alt="" />
                  <div className="text">Lộ trình rõ ràng - Vô vàn cơ hội</div>
                </div>
                <div className="slogon-content">
                  <img src="/images/virtual-work.jpg" alt="" />
                  <div className="text">
                    Làm thực tập ảo - Nhận công việc thật
                  </div>
                </div>
              </div>
              <div className="content-left-introduction">
                <div className="create-account">
                  <span>Tạo tài khoản</span>
                </div>
                <div className="watch-video">
                  <span>Xem video</span>
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

export default Introduction;
