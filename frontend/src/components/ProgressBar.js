import React from "react";

export const ProgressBar = ({ progress }) => {
  return (
    <div className="container">
      <div className="playerlevel" id="myLevel">
        1
      </div>
      <div id="myProgress">
        <div className="progressbar" id="myBar" style={{ width: { progress } }}>
          {String(progress)}%
        </div>
      </div>
    </div>
  );
};
