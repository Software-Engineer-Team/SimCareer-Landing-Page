import React from "react";
import NecessaryOrientation from "./NecessaryOrientaion";
import { Container, Content, ContentLeft, ContentRight } from "./Story.styled";

const necessaryOrientations = [
  { url: "/images/Polygon1.png", orientation: "Choose the right major" },
  { url: "/images/Polygon2.png", orientation: "Soft skills training" },
  { url: "/images/Polygon3.png", orientation: "Quality training" },
  {
    url: "/images/Polygon4.png",
    orientation: "Connecting students with employers",
  },
];

const Story = () => {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <div className="content-left">
            <h2>Story of creation</h2>
            <div className="content-left-description">
              <p>
                YOOT Technology and Training Joint Stock Company was established
                in August 2019 by successful Entrepreneurs in the field of
                technology and training, sharing the same ideals and enthusiasm
                to improve the capacity of students, in order to meet the demand
                for quality human resources of enterprises in Vietnam in the era
                of national integration and industrialization. <br />
                <br />
                We are dedicated to developing the YOOT technology platform to
                help students:
              </p>
            </div>
            {necessaryOrientations.map(({ url, orientation }, idx) => {
              return (
                <NecessaryOrientation
                  key={idx}
                  url={url}
                  orientation={orientation}
                />
              );
            })}
          </div>
        </ContentLeft>
        <ContentRight>
          <img src="/images/home_img.png" alt="" />
        </ContentRight>
      </Content>
    </Container>
  );
};

export default Story;
