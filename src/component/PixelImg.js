import React, { useEffect } from "react";

const PixelImg = ({ cells, gridWidth, gridHeight }) => {
  useEffect(() => {
    if (!gridWidth || !gridHeight) return;
    const setPixel = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    };

    const canvas = document.getElementById("canvas");
    canvas.width = gridWidth;
    canvas.height = gridHeight;
    const ctx = canvas.getContext("2d");

    cells.map((row, i) => row.map((col, j) => setPixel(i, j, col)));
  }, [cells, gridWidth, gridHeight]);

  return <canvas id="canvas" />;
};

export default PixelImg;
