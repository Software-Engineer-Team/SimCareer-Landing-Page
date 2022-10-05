import React from "react";
import Header from "@components/HomePage/Header/Header";
import Body from "@components/HomePage/Body/Body";
import Footer from "@components/HomePage/Footer/Footer";
import FoundingMember from "@components/HomePage/Body/FoundingMember/FoundingMember";
const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Body>
        <FoundingMember></FoundingMember>
      </Body>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
