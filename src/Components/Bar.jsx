import React from "react";
import "../Styles/bar.css";

const Bar = ({ value: { icon, name, level } }) => {
  const bar__width = `${level}%`;

  return (
    <div className="bar__">
      <div
        className="bar__wrapper "
        style={{
          width: bar__width,
        }}
      >
        <span className="bar__name">
          <> {icon} </>
          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
