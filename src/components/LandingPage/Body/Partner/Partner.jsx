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
          width={300}
          height={300}
          left={680}
          top={250}
          borderRadius={false}
          zoomType="bottom"
        />
        <PartnerImg
          src="/images/BuildTalents.jfif"
          width={100}
          height={100}
          left={467}
          top={493}
          borderRadius={true}
        />
        <PartnerImg
          src="/images/Mentoring.png"
          width={240}
          height={240}
          left={100}
          top={330}
          borderRadius={true}
        />
        <PartnerImg
          src="/images/VECIC.png"
          width={270}
          height={270}
          left={350}
          top={0}
          borderRadius={true}
          bg={"#288517"}
        />

        <PartnerImg
          src="/images/BMG.png"
          width={280}
          height={280}
          left={140}
          top={680}
          borderRadius={false}
        />
        <div className="image">
          <img src="/images/jet-engine.jpg" alt="Jet Engine" />
        </div>
      </div>
    </Container>
  );
};

export default Partner;
