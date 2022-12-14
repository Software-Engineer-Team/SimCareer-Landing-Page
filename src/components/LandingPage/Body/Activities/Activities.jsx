import React from "react";
import {
  ActivitiesContainer,
  ActivitiesTitle,
  ActivitiesPillars,
  ActivitiesImage,
  ActivitiesContent,
  PillarContainer,
} from "./Activities.styled";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { Fade, Flip } from "react-reveal";

const Activities = () => {
  const pillars = [
    /* { */
    /*   id: 1, */
    /*   title: "SIM CV", */
    /*   type: "left", */
    /*   text: "Tìm hiểu thêm", */
    /*   contents: [ */
    /*     "Tối ưu hóa hồ sơ tuyển dụng ", */
    /*     "Giới thiệu việc làm phù hợp ", */
    /*     "Thiết lập lộ trình phát triển cá nhân", */
    /*   ], */
    /* }, */
    {
      id: 2,
      title: "SIM STUDY",
      type: "left",
      text: "coming soon",
      contents: [
        "Thư viện tổng hợp tài liệu hướng dẫn tham khảo từ chính doanh nghiệp",
        "Các khóa học, tài liệu giúp ứng viên tự nâng cao kỹ năng",
      ],
    },
    {
      id: 3,
      title: "SIM Experience",
      text: "coming soon",
      type: "right",
      contents: [
        "Virtual job simualtion",
        "Mô phỏng dự án thực tế từ doanh nghiệp",
        "Video giới thiệu trực quan về doanh nghiệp",
      ],
    },
    {
      id: 4,
      title: "SIM Networking",
      type: "right",
      text: "coming soon",
      contents: [
        "Cộng đồng, blog chia sẻ kiến thức, kinh nghiệm",
        "Event, WorkShop, Webinar...",
        "Kết nối đúng doanh nghiệp và ứng viên bạn quan tâm",
      ],
    },
  ];

  return (
    <>
      <ActivitiesContainer id="activity">
        <ActivitiesContent>
          <Flip left>
            <ActivitiesTitle>Sản Phẩm</ActivitiesTitle>
          </Flip>
          <ActivitiesImage>
            <div className="laptop">
              <img src="/images/laptop.png" alt="Laptop" />
              <Fade bottom>
                <img
                  src="/images/pagedemo.jpg"
                  alt="Pro Dashboard"
                  className="dashboard"
                />
              </Fade>
            </div>
            <Fade bottom>
              <GoTriangleRight className="left-triangle" />
            </Fade>
            <Fade bottom>
              <GoTriangleLeft className="right-triangle" />
            </Fade>
          </ActivitiesImage>
          <ActivitiesPillars>
            {pillars.map(({ title, id, contents, text, number, type }) => {
              return (
                <PillarContainer type={type} number={number} key={id} id={id}>
                  <Fade
                    /* left={(id === 1 || id === 3) && true} */
                    /* right={(id === 2 || id === 4) && true} */
                    bottom
                  >
                    <div className="content">
                      <div className="bg">
                        <div className="info">
                          <div className="title">
                            <div className="pilar">{title}</div>
                            <a href="#process-recruit" className="btn">
                              {text}
                            </a>
                          </div>

                          {contents.map((val, idx) => (
                            <div className="text" key={idx}>
                              <img
                                src="/images/Button-Confirm.svg"
                                alt="Button Confirm"
                              />
                              <span>{val}</span>
                            </div>
                          ))}
                          {id === 4 && (
                            <div className="track-end">
                              <img src="/images/flag.png" alt="" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Fade>
                </PillarContainer>
              );
            })}
          </ActivitiesPillars>
        </ActivitiesContent>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;
