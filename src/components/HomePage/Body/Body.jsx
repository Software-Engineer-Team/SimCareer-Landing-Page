import { Container } from "./Body.styled";

/* import FoundingMember from "./FoundingMember/FoundingMember.jsx"; */

const Body = ({ children }) => {
  return (
    <Container>
      {/* <Image> */}
      {/*   <img src="/images/employers.jpg" alt="" /> */}
      {/* </Image> */}
      {/* <StoryFormation></StoryFormation> */}
      {/* <FoundingMember></FoundingMember> */}
      {children}
    </Container>
  );
};

export default Body;
