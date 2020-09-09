import React, { useEffect } from "react";
import "../css/PixelImg.css";

const PixelImg = ({ cells, cellSize, gridWidth, gridHeight }) => {
  useEffect(() => {
    if (!gridWidth || !gridHeight) return;
    const setPixel = (x, y, color, size) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    };

    var canvas = document.getElementById("canvas");
    canvas.width = gridWidth * cellSize;
    canvas.height = gridHeight * cellSize;
    var ctx = canvas.getContext("2d");
    cells.map((row, i) =>
      row.map((col, j) => setPixel(i * cellSize, j * cellSize, col, cellSize))
    );
  }, [cells, gridWidth, gridHeight, cellSize]);

  const style = {
    width: `${gridWidth * cellSize}px`,
    height: `${gridHeight * cellSize}px`,
    display: "none",
  };

  return (
    <div className="pixelimg">
      <canvas id="canvas" style={style} />
    </div>
  );
};

export default PixelImg;
