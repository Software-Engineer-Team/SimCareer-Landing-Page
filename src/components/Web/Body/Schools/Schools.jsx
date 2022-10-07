import React from "react";
import School from "./School/School";
import { SchoolsContainer } from "./Schools.styled";

const schools = [
  {
    school: "Van Hien University",
    descriptions: [
      "Quality of training: Practical, highly applied",
      "Professional development: Internship, study abroad opportunities, open job introduction",
      "The teaching staff is full of national teachers.",
    ],
  },
  {
    school: "Van Hien University",
    descriptions: [
      "Quality of training: Practical, highly applied",
      "Professional development: Internship, study abroad opportunities, open job introduction",
      "The teaching staff is full of national teachers.",
    ],
  },
];

const Schools = () => {
  return (
    <SchoolsContainer>
      <div className="schools">
        {schools.map(({ school, descriptions }, index) => (
          <School schoolName={school} descriptions={descriptions} key={index} />
        ))}
      </div>
    </SchoolsContainer>
  );
};

export default Schools;
