import React from "react";
import { JobContainer } from "./Job.styled";

const Job = () => {
  return (
    <JobContainer>
      <div className="inner-wrap">
        <h2 className="title">Occupation</h2>
        <div className="members">
          <div className="member">
            <img src="/images/Group-649.png" alt="" />
            <div className="text">
              <p>
                <strong>Choose the business you want</strong>
              </p>
              <p className="description">
                Thousands of businesses are operating on YOOT that will meet the
                job search needs of students with all industries and forms of
                work. Students can choose the right business for themselves
                based on the business information provided in the job
                description. Operating with the motto "Work is difficult - YOOT
                has taken care of", YOOT will be a place to provide and support
                students on the path to choosing the job they want.
              </p>
            </div>
          </div>

          <div className="member">
            <img src="/images/Group-648.png" alt="" />
            <div className="text">
              <p>
                <strong>Multimedia CV</strong>
              </p>
              <p className="description">
                With a modern technology platform, YOOT pioneers in helping
                users create multimedia CVs quickly and easily. Students only
                need to fill in the corresponding information in the headings
                and the YOOT system will automatically design the layout for the
                CV. This helps students save time and limit common mistakes in
                the CV making process. In addition, with a multimedia CV,
                students can easily express themselves through vivid and
                creative videos that clearly show their own ego to make a strong
                impression on employers.
              </p>
            </div>
          </div>
          <div className="member">
            <img src="/images/Group-646.png" alt="" />
            <div className="text">
              <p>
                <strong>Connecting jobs conveniently and quickly</strong>
              </p>
              <p className="description">
                YOOT system is developing modern technology to help connect
                candidates with suitable employers. CVs and jobs in the same
                field/industry are easily linked together to shorten the search
                time for both candidates and businesses. At YOOT, a two-way job
                search platform, not only students can easily find job
                advertisements by themselves, but employers can also find CVs
                that match their own requirements. This opens up opportunities
                for both students and businesses to connect with each other.
              </p>
            </div>
          </div>
        </div>
        <div className="members"></div>
      </div>
    </JobContainer>
  );
};

export default Job;
