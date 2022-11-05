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
      title: "Interview Mastery",
      srcImg: "/images/witch-hat.svg",
      imgAlt: "Witch Hat",
      number: 0,
      type: "left",
      contents: [
        "Thư viện tổng hợp nội dung phỏng vấn",
        "Kỹ Năng tham gia phỏng vấn",
        "Tư vấn 1-1 từ chuyên gia",
        "Phỏng vấn mô phỏng",
      ],
    },
    {
      id: 3,
      title: "Networking",
      srcImg: "/images/easter-egg.svg",
      imgAlt: "Easter Egg",
      number: 0,
      type: "right",
      contents: [
        "Chuỗi tư vấn chuyên sâu từ các chuyên gia",
        "Event, WorkShop, Webinar...",
        "Coaching 1-1",
      ],
    },
    {
      id: 2,
      title: "Application Mastery",
      srcImg: "/images/swords.svg",
      imgAlt: "Swords",
      number: 1,
      type: "left",
      contents: [
        "Tối ưu hóa hồ sơ tuyển dụng ",
        "Giới thiệu việc làm phù hợp ",
        "Thiết lập lộ trình phát triển cá nhân",
      ],
    },
    {
      id: 4,
      title: "Work Experience",
      srcImg: "/images/galaxy.svg",
      imgAlt: "Galaxy",
      number: 1,
      type: "right",
      contents: ["Virtual Intern", "Mô phỏng dự án thực tế"],
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
            {pillars.map(
              ({ title, id, srcImg, imgAlt, contents, number, type }) => {
                return (
                  <PillarContainer type={type} number={number} key={id} id={id}>
                    <div className="content">
                      <div className="bg">
                        <img src={srcImg} alt={imgAlt} />
                        <div className="info">
                          <div className="title">
                            <div className="btn">Tìm hiểu thêm</div>
                            <div className="pilar">{title}</div>
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
                        </div>
                      </div>
                    </div>
                  </PillarContainer>
                );
              }
            )}
            <LoadingSpinner viewBox="0 -8 146.5 70">
              <LoopingPath
                d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
                id="loopingPath"
              />
            </LoadingSpinner>
            <LoadingSpinner viewBox="0 -8 146.5 70">
              <LoopingPathAnimation
                d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
                className="master"
              />
            </LoadingSpinner>
          </ActivitiesPillars>
        </ActivitiesContent>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;
