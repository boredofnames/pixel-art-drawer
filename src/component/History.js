import React from "react";
import "../css/History.css";

const History = ({ history, setColor }) => {
  const onMouseDown = (e, color) => {
    switch (e.button) {
      case 0:
        setColor(0, color);
        break;
      case 2:
        setColor(1, color);
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
