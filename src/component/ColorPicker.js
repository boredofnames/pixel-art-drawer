import React from "react";

const ColorPicker = ({ secondary, color, setColor }) => {
  return (
    <input
      className="colorpicker"
      type="color"
      value={color}
      onChange={(e) => {
        secondary
          ? setColor(1, e.currentTarget.value)
          : setColor(0, e.currentTarget.value);
      }}
    />
  );
};

export default ColorPicker;
