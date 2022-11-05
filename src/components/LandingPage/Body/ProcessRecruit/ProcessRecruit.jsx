import React from "react";
import Process from "./Process/Process";
import { Container } from "./ProcessRecruit.styled";

const ProcessRecruit = () => {
  return (
    <Container>
      <div className="inner-wrap">
        <div className="title-image">
          <h2 className="title">4 Bước Chinh Phục Nhà Tuyển Dụng</h2>
          <div className="image">
            <Process
              number={1}
              text="Lựa chọn ngành nghề mong muốn & nộp hồ sơ ứng tuyển tại đây và chúng tôi sẽ đánh giá giúp bạn."
              top={500}
              left={-30}
            />

            <Process
              number={2}
              text="Tiếp nhận đánh giá từ  cố vấn nhân sự"
              top={170}
              left={-10}
            />

            <Process
              number={3}
              text="Tham gia lộ trình phát triển được cá nhân hóa từ hồ sơ ứng tuyển"
              top={830}
              left={400}
            />

            <Process
              number={4}
              text="Kết nối tuyển dụng"
              top={220}
              left={600}
            />
            <img src="/images/process-recruit.jpg" alt="" />
          </div>
        </div>

        <div className="create-account">
          <span>Tham Gia Ngay</span>
        </div>
      </div>
    </Container>
  );
};
export default ProcessRecruit;