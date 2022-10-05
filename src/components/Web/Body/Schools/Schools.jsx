import React from "react";
import { SchoolsContainer } from "./Schools.styled";

const Schools = () => {
  return (
    <SchoolsContainer className="school-container">
      <div class="school-container-card">
        <div className="schools">
          <div className="school-container">
            <div class="school-container-card">
              <div className="school-container-card-img">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div />
                  <div />
                </div>
              </div>
              <div className="school-container-content">
                <div style={{ height: "200px" }}></div>
                <h1>Van Hien University</h1>
                <ul>
                  <li>Quality of training: Practical, highly applied</li>
                  <li>
                    Professional development: Internship, study abroad
                    opportunities, open job introduction
                  </li>
                  <li>The teaching staff is full of "national" teachers.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="school-container">
            <div class="school-container-card">
              <div className="school-container-card-img">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div />
                  <div />
                </div>
              </div>
              <div className="school-container-content">
                <div style={{ height: "200px" }}></div>
                <h1>Van Hien University</h1>
                <ul>
                  <li>Quality of training: Practical, highly applied</li>
                  <li>
                    Professional development: Internship, study abroad
                    opportunities, open job introduction
                  </li>
                  <li>The teaching staff is full of "national" teachers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SchoolsContainer>
  );
};

export default Schools;
