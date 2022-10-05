import React from "react";
import Header from "@components/HomePage/Header/Header";
import Body from "@components/HomePage/Body/Body";
import Footer from "@components/HomePage/Footer/Footer";
import VocationAssistance from "@components/HomePage/Body/VocationAssistance/VocationAssistance";
import FoundingMember from "@components/HomePage/Body/Introduction/FoundingMember/FoundingMember";
import Story from "@components/HomePage/Body/Introduction/Story/Story";
import Connection from "@components/HomePage/Body/TechFoundation/Connection";
import CapacityDevelopment from "@components/HomePage/Body/TechFoundation/CapacityDevelopment";
import Orientation from "@components/HomePage/Body/TechFoundation/Orientation";
import Job from "@components/HomePage/Body/TechFoundation/Job";
import Skill from "@components/HomePage/Body/TechFoundation/Skill";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Body>
        {/* <Story></Story> */}
        {/* <Connection /> */}
        {/* <FoundingMember></FoundingMember> */}
        {/* <VocationAssistance></VocationAssistance> */}
        <Connection />
        <CapacityDevelopment />
        <Orientation />
        <Job />
        <Skill />
      </Body>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
