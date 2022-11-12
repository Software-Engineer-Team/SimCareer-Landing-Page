import React from "react";
import {
  ActivitiesContainer,
  ActivitiesTitle,
  ActivitiesPillars,
  ActivitiesImage,
  ActivitiesContent,
  PillarContainer,
  LoadingSpinner,
  LoopingPath,
  LoopingPathAnimation,
} from "./Activities.styled";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { Fade, Flip } from "react-reveal";

const Activities = () => {
  const pillars = [
    {
      id: 1,
      title: "SIM CV",
      type: "left",
      text: "Tìm hiểu thêm",
      contents: [
        "Tối ưu hóa hồ sơ tuyển dụng ",
        "Giới thiệu việc làm phù hợp ",
        "Thiết lập lộ trình phát triển cá nhân",
      ],
    },
    {
      id: 2,
      title: "SIM Interview",
      type: "left",
      text: "coming soon",
      contents: [
        "Thư viện tổng hợp nội dung phỏng vấn",
        "Kỹ Năng tham gia phỏng vấn",
        "Tư vấn 1-1 từ chuyên gia",
        "Phỏng vấn mô phỏng",
      ],
    },
    {
      id: 3,
      title: "SIM Experience",
      text: "coming soon",
      type: "right",
      contents: ["Virtual Intern", "Mô phỏng dự án thực tế"],
    },
    {
      id: 4,
      title: "SIM Networking",
      type: "right",
      text: "coming soon",
      contents: [
        "Chuỗi tư vấn chuyên sâu từ các chuyên gia",
        "Event, WorkShop, Webinar...",
        "Coaching 1-1",
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
            <Fade left>
              <GoTriangleRight className="left-triangle" />
            </Fade>
            <Fade right>
              <GoTriangleLeft className="right-triangle" />
            </Fade>
          </ActivitiesImage>
          <ActivitiesPillars>
            {pillars.map(({ title, id, contents, text, number, type }) => {
              return (
                <PillarContainer type={type} number={number} key={id} id={id}>
                  <Fade
                    left={(id === 1 || id === 3) && true}
                    right={(id === 2 || id === 4) && true}
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
