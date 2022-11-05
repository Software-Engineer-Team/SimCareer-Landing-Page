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

const Activities = () => {
  const pillars = [
    {
      id: 1,
      title: "Sim CV",
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
      title: "Sim Interview",
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
      title: "Sim Experience",
      text: "coming soon",
      type: "right",
      contents: ["Virtual Intern", "Mô phỏng dự án thực tế"],
    },
    {
      id: 4,
      title: "Sim Networking",
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
      {/* <PageHeaderGeneral */}
      {/*   bg="/images/activity-bg.jpg" */}
      {/*   headerTitle="Activities" */}
      {/* /> */}
      <ActivitiesContainer id="activity">
        <ActivitiesContent>
          <ActivitiesTitle>Sản Phẩm</ActivitiesTitle>
          <ActivitiesImage>
            <div className="laptop">
              <img src="/images/laptop.png" alt="Laptop" />
              <img
                src="/images/pagedemo.jpg"
                alt="Pro Dashboard"
                className="dashboard"
              />
            </div>
            <GoTriangleRight className="left-triangle" />
            <GoTriangleLeft className="right-triangle" />
          </ActivitiesImage>
          <ActivitiesPillars>
            {pillars.map(({ title, id, contents, text, number, type }) => {
              return (
                <PillarContainer type={type} number={number} key={id} id={id}>
                  <div className="content">
                    <div className="bg">
                      <div className="info">
                        <div className="title">
                          <div className="pilar">{title}</div>
                          <div className="btn">{text}</div>
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
