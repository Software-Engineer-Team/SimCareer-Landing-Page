import React from "react";
import { OrientationContainer } from "./Orientaion.styled";

const Orientation = () => {
  return (
    <OrientationContainer>
      <div className="inner-wrap">
        <h2 className="title">Vocational guidance</h2>
        <div className="members">
          <div className="member">
            <img src="/images/Group-644-1.png" alt="" />
            <div className="text">
              <p>
                <strong>Personality Test DISC</strong>
              </p>
              <p className="description">
                To find out if a major or job is right for you, YOOT offers the
                DISC personality test that has been tested by industry experts.
                Through the test, the employee can know which personality group
                they belong to and which work groups are suitable for. This is
                an effective support tool to help learners understand themselves
                to get orientation for learning and making the future.
              </p>
            </div>
          </div>

          <div className="member">
            <img src="/images/Group-300x277.png" alt="" />
            <div className="text">
              <p>
                <strong>Understanding the profession</strong>
              </p>
              <p className="description">
                In order to help Students - Students have an objective view of
                real work, YOOT collaborates with companies in many different
                industries to create detailed introduction videos about jobs.
                Through the video, viewers will have a clear understanding of
                the profession so that they can make informed decisions and
                prepare for future work.
              </p>
            </div>
          </div>
          <div className="member">
            <img src="/images/Group-644.png" alt="" />
            <div className="text">
              <p>
                <strong>Understand the industry</strong>
              </p>
              <p className="description">
                On the way to realizing their career dreams, YOOT helps students
                orientate their respective majors so that they can be best
                prepared for their career journey. Information about the majors
                trained at Universities - Colleges has been screened and updated
                by YOOT with the Schools regularly in order to bring accurate
                and timely information for students to learn about their
                careers. pupil.
              </p>
            </div>
          </div>
        </div>
        <div className="members"></div>
      </div>
    </OrientationContainer>
  );
};

export default Orientation;
