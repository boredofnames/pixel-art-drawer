import React, { useState } from "react";

const PixelGrid = ({
  cells,
  setCells,
  color,
  setColor,
  sColor,
  cellSize,
  outline,
  tool,
}) => {
  const [holding, setHolding] = useState(false);
  const updateCell = (i, j, cs) => {
    let c = [...cells];
    c[i][j] = cs ? cs : color;
    setCells(c);
  };
  const replaceColor = (i, j) => {
    let newCells = cells.map((row) =>
      row.map((col) => {
        if (col === cells[i][j]) return tool === "eraser" ? "#00000000" : color;
        else return col;
      })
    );
    setCells(newCells);
  };
  const onMouseDown = (e, i, j) => {
    switch (e.button) {
      case 0:
        if (tool === "pen") updateCell(i, j);
        else if (tool === "eraser") updateCell(i, j, "#00000000");
        else if (tool === "colorpicker" && cells[i][j] !== "#00000000")
          setColor(0, cells[i][j]);
        break;
      case 1:
        replaceColor(i, j);
        break;
      case 2:
        if (tool === "pen") updateCell(i, j, sColor);
        else if (tool === "colorpicker" && cells[i][j] !== "#00000000")
          setColor(1, cells[i][j]);
        break;
      default:
        break;
    }
  };
  const onMouseEnter = (i, j) => {
    switch (holding) {
      case 0:
        if (tool === "pen") updateCell(i, j);
        else if (tool === "eraser") updateCell(i, j, "#00000000");
        break;
      case 2:
        updateCell(i, j, sColor);
        break;
      default:
        break;
    }
  };
  const onTouchMove = (e) => {
    var cell = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
    if (!cell) return;
    var pos = cell.getAttribute("data-index");
    if (!pos) return;
    pos = pos.split(":");
    updateCell(pos[0], pos[1]);
  };
  return (
    <div className="pixelgrid-container">
      <div
        className="pixelgrid"
        draggable="false"
        onMouseDown={(e) => setHolding(e.button)}
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
                  outline:
                    outline && col !== "#000000"
                      ? "1px solid black"
                      : outline && col === "#000000"
                      ? "1px solid #111"
                      : "none",
                };
                return (
                  <div
                    key={`col${j}`}
                    data-index={`${i}:${j}`}
                    className="cell"
                    style={style}
                    draggable="false"
                    onMouseDown={(e) => onMouseDown(e, i, j)}
                    onContextMenu={(e) => e.preventDefault()}
                    onMouseEnter={() => onMouseEnter(i, j)}
                    onTouchMove={onTouchMove}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PixelGrid;
