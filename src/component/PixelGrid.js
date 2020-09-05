import React, { useState } from "react";

const PixelGrid = ({ cells, setCells, color, cellSize, outline }) => {
  const [holding, setHolding] = useState(false);
  const updateCell = (i, j, cs) => {
    let c = [...cells];
    c[i][j] = cs ? cs : color;
    setCells(c);
  };
  const replaceColor = (i, j) => {
    let newCells = cells.map((row) =>
      row.map((col) => {
        if (col === cells[i][j]) return color;
        else return col;
      })
    );
    setCells(newCells);
  };
  const onMouseDown = (e, i, j) => {
    switch (e.button) {
      case 0:
        updateCell(i, j);
        break;
      case 1:
        replaceColor(i, j);
        break;
      case 2:
        updateCell(i, j, "#00000000");
        break;
      default:
        break;
    }
  };
  const onMouseEnter = (i, j) => {
    switch (holding) {
      case 0:
        updateCell(i, j);
        break;
      case 2:
        updateCell(i, j, "#00000000");
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="pixelgrid"
      draggable="false"
      onMouseDown={(e) => {
        setHolding(e.button);
      }}
      onMouseUp={() => setHolding(false)}
    >
      {cells.map((row, i) => {
        return (
          <div key={`row${i}`} style={{ display: "inline-block" }}>
            {row.map((col, j) => {
              const style = {
                width: cellSize,
                height: cellSize,
                backgroundColor: col,
                outline: outline ? "1px solid black" : "none",
              };
              return (
                <div
                  key={`col${j}`}
                  className="cell"
                  style={style}
                  draggable="false"
                  onMouseDown={(e) => onMouseDown(e, i, j)}
                  onContextMenu={(e) => e.preventDefault()}
                  onMouseEnter={() => onMouseEnter(i, j)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PixelGrid;
