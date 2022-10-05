import PageHeaderGeneral from "@utils/PageHeaderGeneral/PageHeaderGeneral";
import {
  AssistanceContainer,
  AssistanceContent,
  AssistanceContentRight,
  AssistanceContentLeft,
  AssistanceBtn,
} from "./VocationAssistance.styled";
const VocationAssistance = () => {
  return (
    <>
      <PageHeaderGeneral
        bg="/images/vocation-assistance4.png"
        headerTitle="Vocation Assistance"
      />
      <AssistanceContainer>
        <div className="text">
          <p>
            Faced with the situation that many students choose the wrong
            profession to study and when they graduate without applying the
            knowledge they have learned to their jobs, it is a big waste. The
            YOOT technology platform has come up with a system to help students
            be more successful:
          </p>
        </div>
        <AssistanceContent>
          <div className="inner-content-reverse">
            <AssistanceContentRight>
              <img
                src="/images/Isometric_webpage-02-1.png"
                alt="Isometric_webpage"
              />
            </AssistanceContentRight>
            <AssistanceContentLeft>
              <h3>
                <span>1.</span>
                Understand yourself.
              </h3>
              <div>
                Students can discover themselves through the test, and from
                there predict careers that may match their personality.
                <br />
              </div>
              <p>Students can take the test by clicking HERE.</p>
              <AssistanceBtn>
                <a href="#">Take a test</a>
              </AssistanceBtn>
            </AssistanceContentLeft>
          </div>

          <div className="inner-content">
            <AssistanceContentLeft>
              <h3>
                <span>2.</span>
                Recognize your professional position
              </h3>
              <div>
                In order to help students understand their career position and
                feel that they are suitable for any career position, YOOT has
                cooperated with many prestigious enterprises, Saigon
                Entrepreneur Newspaper, Human Resource Forecasting Center,
                together build a video library, visually depicting a typical
                working day for career positions. From there, students and
                parents better understand and choose the right career.
                <br />
              </div>
            </AssistanceContentLeft>
            <AssistanceContentRight>
              <img
                src="/images/Isometric_webpage-01-1.png"
                alt="Isometric_webpage"
              />
            </AssistanceContentRight>
          </div>

          <div className="inner-content-reverse">
            <AssistanceContentRight>
              <img
                src="/images/Isometric_webpage-03-1.png"
                alt="Isometric_webpage"
              />
            </AssistanceContentRight>
            <AssistanceContentLeft>
              <h3>
                <span>3.</span>
                Choose your major
              </h3>
              <div>
                When choosing a suitable career position, YOOT will continue to
                advise students: what program to study to best prepare for the
                chosen career.
                <br />
              </div>
            </AssistanceContentLeft>
          </div>

          <div className="inner-content">
            <AssistanceContentLeft>
              <h3>
                <span>4.</span>
                Skill and quality baggage
              </h3>
              <div>
                Students are equipped with knowledge at the school, YOOT helps
                students develop skills and qualities through the YOOT
                technology platform.
                <br />
              </div>

              <p>Skill forging information</p>
              <AssistanceBtn>
                <a href="#">See more</a>
              </AssistanceBtn>
            </AssistanceContentLeft>
            <AssistanceContentRight>
              <img
                src="/images/Isometric_webpage-01-1.png"
                alt="Isometric_webpage"
              />
            </AssistanceContentRight>
          </div>

          <div className="inner-content-reverse">
            <AssistanceContentRight>
              <img
                src="/images/Isometric_webpage-02-1.png"
                alt="Isometric_webpage"
              />
            </AssistanceContentRight>
            <AssistanceContentLeft>
              <h3>
                <span>5.</span>
                Make Contact with Recruiters
              </h3>
              <div>
                The YOOT technology platform is also a place to connect students
                with employers. Quality students who have trained skills and
                qualities on the YOOT technology platform can be selected by
                employers even before they graduate.
                <br />
              </div>
              <p>Need job connections?</p>
              <AssistanceBtn>
                <a href="#">Connect jobs now</a>
              </AssistanceBtn>
            </AssistanceContentLeft>
          </div>
        </AssistanceContent>
      </AssistanceContainer>
    </>
  );
};

export default VocationAssistance;
