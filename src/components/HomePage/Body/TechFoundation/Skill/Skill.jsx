import React from "react";
import {
  Content,
  ContentLeft,
  ContentRight,
} from "@components/HomePage/Body/TechFoundation/Connection/Connection.styled";
import { ContainerSkill } from "./Skill.styled";

const Skill = () => {
  return (
    <ContainerSkill>
      <Content>
        <div className="inner-content">
          <ContentLeft>
            <div>
              Working with full career guidance values, YOOT promotes the
              development of students' abilities to equip them with solid skills
              to enter life. YOOT constantly seeks out dedicated training
              experts, invites and selects the best soft skills training courses
              provided to students to ensure students have access to quality
              courses.
              <br />
            </div>
          </ContentLeft>
          <ContentRight>
            <img src="/images/Group-664.png" alt="" />
          </ContentRight>
        </div>
        <div className="inner-content-reverse">
          <ContentRight>
            <img src="/images/Group-663.png" alt="" />
          </ContentRight>
          <ContentLeft>
            <div>
              Coming to skills courses, students not only learn about theory
              through lively lectures from experts, but also practice after each
              course and upload to the YOOT platform to receive assessment. With
              the desire to help and train students to develop, soft skills
              courses on YOOT will help students train and develop themselves to
              prepare for the future.
              <br />
            </div>
          </ContentLeft>
        </div>
      </Content>
    </ContainerSkill>
  );
};

export default Skill;
