import React from "react";
import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
} from "./Connection.styled";

const Connection = () => {
  return (
    <Container>
      <Content>
        <div className="inner-content">
          <ContentLeft>
            <h1>
              Technology Foundation
              <br />
            </h1>
            <h3>
              <span>1</span>
              Connecting Students - Students - Schools - Businesses
            </h3>
            <div>
              With outstanding advantages in technology, YOOT is the place to
              connect Students - Students with Schools and Businesses. Through
              the YOOT application, students can understand themselves,
              understand their careers, find information related to Universities
              and Colleges such as tuition fees, training programs, benchmarks,
              conditions. enrollment, etc. is always regularly updated by YOOT.
              <br />
            </div>
            <div>
              With effective tools from YOOT, students can design a suitable
              learning path, thereby choosing the right school and major for
              themselves to realize the career they dream of.
              <br />
            </div>
          </ContentLeft>
          <ContentRight>
            <img
              src="/images/Isometric_webpage-01-1.png"
              alt="Isometric_webpage"
            />
          </ContentRight>
        </div>
        <div className="inner-content-reverse">
          <ContentRight>
            <img
              src="/images/Isometric_webpage-02-1.png"
              alt="Isometric_webpage"
            />
          </ContentRight>
          <ContentLeft>
            <div>
              Not stopping there, the YOOT technology platform also facilitates
              connecting students with employers while sitting at school.
              Students can search for businesses that match their employment
              needs with a wide range of occupations and types of work.
              Enterprises can also actively search for the right talent for the
              company through thousands of multimedia CVs of students or
              students with good skills and attitudes are identified by the
              competency points that students have accumulated. be on YOOT
              platform.
              <br />
            </div>
            <p>
              YOOT is an important bridge connecting Students - Students with
              the University and Enterprises serving the needs and interests of
              the parties on the path of development.
            </p>
          </ContentLeft>
        </div>
      </Content>
    </Container>
  );
};

export default Connection;
