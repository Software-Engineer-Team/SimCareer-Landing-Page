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
} from "./Activities.styled";

const Activities = () => {
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
            <img src="/images/laptop.png" alt="Laptop" />
            <video autoPlay={true} loop={true}>
              <source src="" type="video/mp4"></source>
            </video>
            <div className="text">We Strike for Four Pillars of Mastery</div>
          </ActivitiesImage>
          <ActivitiesPillars>
            <PillarContainer type="left">
              <div className="content">
                <div className="bg">
                  <img src="/images/witch-hat.svg" alt="Witch Hat" />
                </div>
                <div className="info">
                  <div className="title">Pillar 1: Application Mastery</div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                </div>
              </div>
            </PillarContainer>

            <PillarContainer type="right">
              <div className="content">
                <div className="bg">
                  <img src="/images/witch-hat.svg" alt="Witch Hat" />
                </div>
                <div className="info">
                  <div className="title">Pillar 1: Application Mastery</div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                </div>
              </div>
            </PillarContainer>

            <PillarContainer type="left">
              <div className="content">
                <div className="bg">
                  <img src="/images/witch-hat.svg" alt="Witch Hat" />
                </div>
                <div className="info">
                  <div className="title">Pillar 1: Application Mastery</div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                </div>
              </div>
            </PillarContainer>

            <PillarContainer type="right">
              <div className="content">
                <div className="bg">
                  <img src="/images/witch-hat.svg" alt="Witch Hat" />
                </div>
                <div className="info">
                  <div className="title">Pillar 1: Application Mastery</div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                  <div className="text">
                    <img
                      src="/images/Button-Confirm.svg"
                      alt="Button Confirm"
                    />
                    <span>Resume and Cover Letter Optimisation</span>
                  </div>
                </div>
              </div>
            </PillarContainer>

            <LoadingSpinner viewBox="0 0 147.5 68">
              <LoopingPath
                d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
                fill="none"
                stroke-miterlimit="10"
                stroke="rgba(0,0,0,.1)"
                id="loopingPath"
              ></LoopingPath>
              <use id="background" xlinkHref="#loopingPath"></use>
            </LoadingSpinner>
          </ActivitiesPillars>
        </ActivitiesContent>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;
