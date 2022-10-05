import React from "react";
import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
} from "./Connection.styled";

const CapacityDevelopment = () => {
  return (
    <Container>
      <Content>
        <div className="inner-content">
          <ContentRight>
            <img
              src="/images/Isometric_webpage-03-1.png"
              alt="Isometric_webpage"
            />
          </ContentRight>
          <ContentLeft>
            <h3>
              <span>2</span>
              Capacity Development
            </h3>
            <div>
              On the platform of YOOT technology, each student is motivated to
              accumulate his/her ability points to demonstrate his/her own
              capacity through the skill courses provided by YOOT, contributing
              to building an active learning community, … Students with higher
              competency scores have the opportunity to develop themselves,
              build personal brands and attractive career opportunities. <br />
            </div>
            <div>
              Student competency points on the YOOT system cannot be purchased
              with money, but can only be obtained through active activities on
              the platform. Employers can see students' competency scores and
              review student interactions on the YOOT technology platform (if
              students allow) to decide on student recruitment options. <br />
            </div>
          </ContentLeft>
        </div>
      </Content>
    </Container>
  );
};

export default CapacityDevelopment;
