import React from "react";

const History = ({ history, setColor }) => {
  return (
    <div className="history">
      {history.map((color, i) => (
        <div
          key={`historyitem${i}`}
          onClick={() => setColor(color)}
          className="historyitem"
          style={{ background: color }}
        />
      ))}
    </div>
  );
};

export default History;
