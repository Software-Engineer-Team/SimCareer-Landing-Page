import useScript from "@hooks/useScript";
import { Container, Split } from "./MainPage.styled";
import { Link } from "react-router-dom";

const MainPage = () => {
  useScript("assets/js/script.js");

  return (
    <Container id="container-mainpage">
      <Split>
        <div className="split-left">
          <small>HACK YOUR CAREER</small>
          <h1>Students Zone</h1>
          <span>
            Break into investment banking, consulting and 20+ <br />
            Industries, AI Resume Anlayzer and more!
          </span>
          <Link to="/home-page" class="btn">
            Learn More
          </Link>
        </div>
        <div className="split-right">
          <small>HACK YOUR CAREER</small>
          <h1>Employers Zone</h1>
          <span>
            Metaverse Hiring, Virtual Experience, Campus Hiring,
            <br /> Social Media Campaigns and more!
          </span>
          <Link to="/home-page" class="btn">
            Learn More
          </Link>
        </div>
      </Split>
    </Container>
  );
};

export default MainPage;
