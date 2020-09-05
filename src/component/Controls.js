import React from "react";
import Icon from "./Icon";
import PixelImg from "./PixelImg";
import { Import, Export } from "./Imexport";

const Controls = ({
  outline,
  setOutline,
  gridWidth,
  setGridWidth,
  gridHeight,
  setGridHeight,
  cellSize,
  setCellSize,
  cells,
  color,
  setColor,
  setCells,
  blankCells,
}) => {
  return (
    <div className="controls">
      <div>
        Width:{" "}
        <input
          type="number"
          min="1"
          defaultValue={gridWidth}
          onChange={(e) => {
            setGridWidth(+e.currentTarget.value);
          }}
        />
      </div>
      <div>
        Height:{" "}
        <input
          type="number"
          min="1"
          defaultValue={gridWidth}
          onChange={(e) => {
            setGridHeight(+e.currentTarget.value);
          }}
        />
      </div>
      <div>
        Size:{" "}
        <input
          type="range"
          min="5"
          max="40"
          defaultValue={cellSize}
          onChange={(e) => {
            setCellSize(+e.currentTarget.value);
          }}
        />
      </div>
      <div>
        Outline:{" "}
        <input
          type="checkbox"
          defaultChecked={outline}
          onClick={() => {
            setOutline(!outline);
          }}
        />
      </div>
      <div>
        <Icon
          name="Eraser"
          viewBox="0 0 512 512"
          d="M497.94 273.94a48 48 0 0 0 0-67.88l-160-160a48 48 0 0 0-67.88 0l-256 256a48 48 0 0 0 0 67.88l96 96A48 48 0 0 0 144 480h356a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12H339.88l158.06-158.06zM304 80l160 160-103 103-160-160zM144 432l-96-96 119-119 160 160-55 55z"
          onClick={() => setColor("#00000000")}
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            color: color === "#00000000" ? "lime" : "white",
          }}
        />
        <Icon
          name="Trash"
          viewBox="0 0 448 512"
          d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
          onClick={() => setCells(blankCells())}
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
      </div>
      <div>
        <PixelImg cells={cells} gridWidth={gridWidth} gridHeight={gridHeight} />
      </div>
      <Import setCells={setCells} />
      <Export cells={cells} />
    </div>
  );
};

export default Controls;
