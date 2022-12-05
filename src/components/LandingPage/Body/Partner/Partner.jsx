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
          number={1}
        />
        {/* <PartnerImg */}
        {/*   src="/images/BuildTalents.jfif" */}
        {/*   width={100} */}
        {/*   height={100} */}
        {/*   left={347} */}
        {/*   top={353} */}
        {/*   borderRadius={true} */}
        {/* /> */}
        <PartnerImg
          src="/images/Mentoring.png"
          width={160}
          height={160}
          left={120}
          top={240}
          borderRadius={true}
          number={2}
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
          number={3}
        />

        <PartnerImg
          src="/images/ivn.webp"
          width={443}
          height={133}
          left={150}
          top={491}
          borderRadius={true}
          bg={"#fff"}
          number={4}
        />
        <div className="image">
          {/* <img src="/images/jet-engine.jpg" alt="Jet Engine" /> */}
          <img src="/images/partner-img.jpg" alt="Jet Engine" />
        </div>
      </div>
    </Container>
  );
};

export default Partner;
