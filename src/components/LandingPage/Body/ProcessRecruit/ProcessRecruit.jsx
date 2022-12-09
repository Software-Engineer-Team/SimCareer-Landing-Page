import React from "react";
import { Bounce, Fade } from "react-reveal";
import Process from "./Process/Process";
import { Container } from "./ProcessRecruit.styled";

const ProcessRecruit = () => {
  return (
    <Container id="process-recruit">
      <div className="inner-wrap">
        <div className="title-image">
          <h2 className="title">4 Bước Chinh Phục Nhà Tuyển Dụng</h2>
          <div className="image">
            <Fade left>
              <Process
                number={1}
                text="Tìm hiểu và trải nghiệm doanh nghiệp bạn quan tâm"
                top={380}
                left={-30}
              />
            </Fade>

            <Bounce top>
              <Process
                number={2}
                text="Tiếp nhận đánh giá từ  cố vấn nhân sự"
                top={120}
                left={-10}
              />
            </Bounce>

            <Bounce bottom>
              <Process
                number={3}
                text="Nâng cao kỹ năng cần có cho công việc"
                top={630}
                left={330}
              />
            </Bounce>

            <Bounce top>
              <Process
                number={4}
                text="Tự tin tham gia ứng tuyển"
                top={220}
                left={600}
              />
            </Bounce>
            <img src="/images/process-recruit.jpg" alt="Test" />
          </div>
        </div>

        <a
          href={process.env.REACT_APP_ENDPOINT_SIMCAREER}
          target="_blank"
          className="create-account"
        >
          <span>Tham Gia Ngay</span>
        </a>
      </div>
    </Container>
  );
};
export default ProcessRecruit;
