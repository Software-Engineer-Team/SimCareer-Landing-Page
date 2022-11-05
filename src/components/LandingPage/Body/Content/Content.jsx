import React from "react";
import { Fade } from "react-reveal";
import { Container } from "./Content.styled";

const Content = () => {
  const contents = [
    {
      url: "/images/content-1.jpg",
      title: "Hiểu mình hiểu nghề",
      text: "Cùng bạn trên con đường khám phá bản thân và lựa chọn nghành nghề phù hợp.",
    },
    {
      url: "/images/content-2.jpg",
      title: "Kiến thức đi đối với trải nghiệm",
      text: "Cung cấp các khóa đào tạo chuyên sâu về kiến thức và kỹ năng thực tế trong lĩnh vực mà bạn quan tâm.",
    },
    {
      url: "/images/content-3.jpg",
      title: "Cơ hội thực tập & làm việc tại tập đoàn lớn",
      text: "Chương trình trải nghiệm làm việc ảo mang lại cho sinh viên lợi thế nghề nghiệp thực với các công ty hàng đầu.",
    },
  ];
  return (
    <Container>
      <div className="inner-wrap">
        {contents.map(({ url, title, text }) => (
          <div className="content">
            <Fade bottom>
              <div className="image">
                <img src={url} alt="Test" />
              </div>
              <h2 className="title">{title}</h2>
              <p className="text">{text}</p>
            </Fade>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Content;
