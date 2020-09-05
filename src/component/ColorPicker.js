import React from "react";

const ColorPicker = ({ color, setColor }) => {
  return (
    <input
      className="colorpicker"
      type="color"
      value={color}
      onChange={(e) => setColor(e.currentTarget.value)}
    />
  );
};

export default ColorPicker;
