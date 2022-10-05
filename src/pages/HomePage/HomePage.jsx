import React from "react";
import Header from "@components/HomePage/Header/Header";
import Body from "@components/HomePage/Body/Body";
import Footer from "@components/HomePage/Footer/Footer";
import FoundingMember from "@components/HomePage/Body/FoundingMember/FoundingMember";
import Story from "@components/HomePage/Body/Story/Story";
import Connection from "~/components/HomePage/TechFoundation/Connection";
import VocationAssistance from "@components/HomePage/VocationAssistance/VocationAssistance";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Body>
        {/* <Story></Story> */}
        {/* <Connection /> */}
        {/* <FoundingMember></FoundingMember> */}
        <VocationAssistance></VocationAssistance>
      </Body>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomePage;
