import { Fade } from "react-reveal";
import { Container } from "./Partner.styled";
import PartnerImg from "./PartnerImg/PartnerImg";

const Partner = () => {
  return (
    <Container id="partner">
      <div className="inner-wrap">
        <Fade right>
          <h2>Đối tác của chúng tôi</h2>
        </Fade>
        <PartnerImg
          src="/images/UEH.png"
          width={170}
          height={170}
          left={520}
          top={230}
          borderRadius={true}
          zoomType="bottom"
        />
        <PartnerImg
          src="/images/BuildTalents.jfif"
          width={100}
          height={100}
          left={347}
          top={353}
          borderRadius={true}
        />
        <PartnerImg
          src="/images/Mentoring.png"
          width={140}
          height={140}
          left={100}
          top={270}
          borderRadius={true}
        />
        <PartnerImg
          src="/images/VECIC-v2.png"
          width={204}
          height={107}
          left={270}
          top={100}
          borderRadius={true}
          /* bg={"#288517"} */
          bg={"transparent"}
        />

        <PartnerImg
          src="/images/BMG.jpg"
          width={173}
          height={173}
          left={120}
          top={501}
          borderRadius={true}
          bg={"transparent"}
        />
        <div className="image">
          <img src="/images/jet-engine.jpg" alt="Jet Engine" />
        </div>
      </div>
    </Container>
  );
};

export default Partner;
