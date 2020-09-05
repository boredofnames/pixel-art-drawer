import React from "react";

const Icon = ({ d, viewBox, onClick, name, style }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="eraser"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={style}
      onClick={onClick}
    >
      <path fill="currentColor" d={d}>
        <title>{name}</title>
      </path>
    </svg>
  );
};

export default Icon;
