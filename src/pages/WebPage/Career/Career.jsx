import Schools from "@components/Web/Body/Schools/Schools";
import BreadCrumb from "@components/Web/Body/Career/BreadCrumb/BreadCrumb";
import { CareerContainer, CareerGuidance } from "./Career.styled";

const Career = () => {
  return (
    <CareerContainer>
      <CareerGuidance>
        <BreadCrumb crumbs={["home-page", "/", "career-guidance"]} />
      </CareerGuidance>
      <Schools />
    </CareerContainer>
  );
};

export default Career;
