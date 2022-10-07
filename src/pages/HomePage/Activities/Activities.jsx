import PageHeaderGeneral from "@utils/PageHeaderGeneral/PageHeaderGeneral";
import {
  ActivitiesContainer,
  ActivitiesTitle,
  ActivitiesPillars,
  ActivitiesImage,
  ActivitiesContent,
  PillarContainer,
  LoadingSpinner,
  LoopingPath,
  LoopingPathAnimation,
} from "./Activities.styled";

const Activities = () => {
  const pillars = [
    {
      id: 1,
      title: "Pillar 1: Application Mastery",
      srcImg: "/images/witch-hat.svg",
      imgAlt: "Witch Hat",
      number: 0,
      type: "left",
      contents: [
        "Resume and Cover Letter Optimisation",
        "Aptitude Test Database and Video Interview Library",
        "Weekly Job Tracker",
        "Career Strategy Formulation",
      ],
    },
    {
      id: 3,
      title: "Pillar 3: Work Experience & ECA",
      srcImg: "/images/easter-egg.svg",
      imgAlt: "Easter Egg",
      number: 0,
      type: "right",
      contents: [
        "Guaranteed Placement with Corporate Partners",
        "Free Venture Capital Dealmaking & Valuation ECA",
        "Iliad Research Team",
        "Pythagorean M&A Group",
      ],
    },
    {
      id: 2,
      title: "Pillar 2: Interview & Technical Mastery",
      srcImg: "/images/swords.svg",
      imgAlt: "Swords",
      number: 1,
      type: "left",
      contents: [
        "Behavioural Interviews",
        "Technical Interviews",
        "Weekly Assessment Centre Practice",
        "Weekly Market News Update",
        "Bi-Weekly Key News and Deals Analysis",
      ],
    },
    {
      id: 4,
      title: "Pillar 4: Networking & Intangibles",
      srcImg: "/images/galaxy.svg",
      imgAlt: "Galaxy",
      number: 1,
      type: "right",
      contents: [
        "Speaker Series & Networking Events with HR and key decision-makers",
        "Alumni Network",
        "Intangibles Factories & Offline Events",
        "Career Hackers Fitness Training",
      ],
    },
  ];

  return (
    <>
      <PageHeaderGeneral
        bg="/images/activities-bg.webp"
        headerTitle="Activities"
      />
      <ActivitiesContainer>
        <ActivitiesContent>
          <ActivitiesTitle>
            All-in-One AI-Driven Career Development Platform
          </ActivitiesTitle>
          <ActivitiesImage>
            <div className="laptop">
              <img src="/images/laptop.png" alt="Laptop" />
              <img
                src="/images/ProDashboard.png"
                alt="Pro Dashboard"
                className="dashboard"
              />
            </div>
            <img
              src="/images/left-triangle.svg"
              alt="Left Triangle"
              className="left-triangle"
            />
            <img
              src="/images/right-triangle.svg"
              alt="Right Triangle"
              className="right-triangle"
            />
            <div className="text">We Strike for Four Pillars of Mastery</div>
          </ActivitiesImage>
          <ActivitiesPillars>
            {pillars.map(
              ({ title, id, srcImg, imgAlt, contents, number, type }) => {
                return (
                  <PillarContainer type={type} number={number} key={id}>
                    <div className="content">
                      <div className="bg">
                        <img src={srcImg} alt={imgAlt} />
                        <div className="info">
                          <div className="title">{title}</div>

                          {contents.map((val, idx) => (
                            <div className="text" key={idx}>
                              <img
                                src="/images/Button-Confirm.svg"
                                alt="Button Confirm"
                              />
                              <span>{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PillarContainer>
                );
              }
            )}
            <LoadingSpinner viewBox="0 -8 146.5 70">
              <LoopingPath
                d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
                id="loopingPath"
              />
            </LoadingSpinner>
            <LoadingSpinner viewBox="0 -8 146.5 70">
              <LoopingPathAnimation
                d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
                className="master"
              />
            </LoadingSpinner>
          </ActivitiesPillars>
        </ActivitiesContent>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;
