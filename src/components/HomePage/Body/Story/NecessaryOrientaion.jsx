import React from "react";

const NecessaryOrientation = ({ url, orientation }) => {
  return (
    <div className="necessary-orientation-container">
      <div>
        <img src={url} alt="" />
      </div>
      <div>
        <h5>{orientation}</h5>
      </div>
    </div>
  );
};

export default NecessaryOrientation;
