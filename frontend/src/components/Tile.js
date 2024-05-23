import React from "react";

export const Tile = ({ data }) => {
  console.log(data);
  return (
    <div className="tile">
      <h1 style={{ textAlign: "left", marginLeft: 10 }}>{data.data.task}</h1>
      <p style={{ marginTop: 20, textAlign: "right", marginRight: 5 }}>
        {data.data.category + " | " + data.data.frequency}
      </p>
    </div>
  );
};
