import { Container, Content } from "./Footer.styled";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <Container id="contact-us">
      <Content>
        <div className="img-text">
          <img src="/images/simcareer-1.png" alt="Logo" />
          <div className="text">
            SIMULATE your Work
            <br /> SIMPLIFY your career !
          </div>
        </div>
        {/* <div className="useful-link"> */}
        {/*   <div className="text">Useful Links</div> */}
        {/*   <Link to={"#"}>Follow our Instagram</Link> */}
        {/*   <Link to={"#"}>Connect us on LinkedIn</Link> */}
        {/*   <Link to={"#"}>Move To Web App</Link> */}
        {/* </div> */}
        <div className="contact-us">
          <div className="text">
            Hãy liên hệ với Bộ phận phụ trách để chúng tôi có thê giới thiệu và
            tư vấn trực tiếp cho bạn quan tâm.
            <br />
            SIM Career luôn sẵn lòng lắng nghe và hỗ trợ bạn!
          </div>
          <div className="email">
            <MdEmail></MdEmail>
            <span>contact@simcareer.vn</span>
          </div>
          <div className="address">
            <MdLocationOn></MdLocationOn>
            <span>Room 740, 7F, 19W, Technology Park</span>
          </div>
        </div>
      </Content>
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <hr />
        <div>© 2022. Sim Career</div>
      </div>
    </Container>
  );
};

export default Footer;
