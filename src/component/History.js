import React from "react";

const History = ({ history, setColor, setSColor }) => {
  const onMouseDown = (e, color) => {
    switch (e.button) {
      case 0:
        setColor(color);
        break;
      case 2:
        setSColor(color);
        break;
      default:
        break;
    }
  };
  return (
    <div className="history">
      {history.map((color, i) => (
        <div
          key={`historyitem${i}`}
          onMouseDown={(e) => onMouseDown(e, color)}
          onContextMenu={(e) => e.preventDefault()}
          className="historyitem"
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

export default History;
