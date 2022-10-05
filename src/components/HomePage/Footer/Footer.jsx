import { Container, Content } from "./Footer.styled";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className="img-text">
          <img src="/logo.png" alt="Logo" />
          <div className="text">
            Democratize Career Mobility,
            <br /> Information & Opportunities
          </div>
        </div>
        <div className="useful-link">
          <div className="text">Useful Links</div>
          <Link to={"#"}>Follow our Instagram</Link>
          <Link to={"#"}>Connect us on LinkedIn</Link>
          <Link to={"#"}>Move To Web App</Link>
        </div>
        <div className="contact-us">
          <div className="text">Contact us</div>
          <div className="email">
            <MdEmail></MdEmail>
            <span>example@gmail.com</span>
          </div>
          <div className="address">
            <MdLocationOn></MdLocationOn>
            <span>Room 740, 7F, 19W, Technology Park</span>
          </div>
        </div>
      </Content>
      <hr />
      <div>© 2022. Career Hackers. All Rights Reserved.</div>
    </Container>
  );
};

export default Footer;
