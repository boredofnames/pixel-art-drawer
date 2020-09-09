import React from "react";
import History from "./History";
import ColorPicker from "./ColorPicker";
import Icon from "./Icon";
import PixelImg from "./PixelImg";
import Menu from "./Menu";
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
  sColor,
  setCells,
  blankCells,
  history,
  tool,
  setTool,
  menu,
  setMenu,
}) => {
  const trash = () => {
    if (window.confirm("Are you sure?") === true) setCells(blankCells());
  };
  const setGridSize = (dim, size) => {
    if (
      new Set([...cells].flat().filter((cell) => cell !== "#00000000")).size > 0
    )
      if (window.confirm("Are you sure? Will clear the drawing!") === false)
        return;
    switch (dim) {
      case "width":
        setGridWidth(size);
        break;
      case "height":
        setGridHeight(size);
        break;
      default:
        break;
    }
  };
  return (
    <div className="controls">
      <History history={history} setColor={setColor} />
      <div className="tools">
        <div className="colorpickers">
          <ColorPicker color={color} setColor={setColor} />
          <ColorPicker secondary={true} color={sColor} setColor={setColor} />
        </div>
        <Icon
          name="Pen"
          viewBox="0 0 512 512"
          d="M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z"
          onClick={() => setTool("pen")}
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            color: tool === "pen" ? "lime" : "white",
          }}
        />
        <Icon
          name="Color Picker"
          viewBox="0 0 512 512"
          d="M483.89 28.14l-.02-.02-.03-.03c-37.47-37.47-98.26-37.46-135.72.03l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-63.6 63.6c-9.37 9.37-9.37 24.57 0 33.94l16.98 16.98L50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62 16.96 16.96c9.44 9.44 24.65 9.31 33.94 0l63.6-63.6c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.5-37.47 37.5-98.25.02-135.73zM144.8 427.32a15.892 15.892 0 0 1-11.31 4.68H80v-53.49c0-4.27 1.66-8.29 4.69-11.31l126.63-126.62 60.12 60.12L144.8 427.32zm305.14-297.38l-77.09 77.09-33.94 33.94 30.07 30.06-29.66 29.66-128-128 29.66-29.65 30.06 30.07L382.08 62.05c9.05-9.06 21.1-14.05 33.91-14.05 12.82 0 24.86 4.98 33.91 14.04l.04.04C459.01 71.14 464 83.19 464 96.01c0 12.81-5 24.86-14.06 33.93z"
          onClick={() => setTool("colorpicker")}
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            color: tool === "colorpicker" ? "lime" : "white",
          }}
        />
        <Icon
          name="Eraser"
          viewBox="0 0 512 512"
          d="M497.94 273.94a48 48 0 0 0 0-67.88l-160-160a48 48 0 0 0-67.88 0l-256 256a48 48 0 0 0 0 67.88l96 96A48 48 0 0 0 144 480h356a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12H339.88l158.06-158.06zM304 80l160 160-103 103-160-160zM144 432l-96-96 119-119 160 160-55 55z"
          onClick={() => setTool("eraser")}
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            color: tool === "eraser" ? "lime" : "white",
          }}
        />
      </div>
      <div className="menubar">
        <Menu title="File" menu={menu} setMenu={setMenu}>
          <div className="menuitem" onClick={() => trash()}>
            <Icon
              name="Trash"
              viewBox="0 0 448 512"
              d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
              style={{ width: "15px", height: "15px" }}
            />
            <span>Clear</span>
          </div>
          <hr />
          <Import setCells={setCells} />
          <hr />
          <Export cells={cells} />
        </Menu>
        <Menu title="Image" menu={menu} setMenu={setMenu}>
          <label className="col">
            Width: {gridWidth}
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={gridWidth}
              onChange={(e) => {
                setGridSize("width", +e.currentTarget.value);
              }}
            />
          </label>
          <label className="col">
            Height: {gridHeight}
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={gridWidth}
              onChange={(e) => {
                setGridSize("height", +e.currentTarget.value);
              }}
            />
          </label>
          <hr />
          <label className="col">
            Cell Size: {cellSize}
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={cellSize}
              onChange={(e) => {
                setCellSize(+e.currentTarget.value);
              }}
            />
          </label>
        </Menu>
        <Menu title="View" menu={menu} setMenu={setMenu}>
          <label className="sb">
            <span>Outline:</span>
            <input
              type="checkbox"
              defaultChecked={outline}
              onClick={() => {
                setOutline(!outline);
              }}
            />
          </label>
        </Menu>
        <div className="spacer" />
        <PixelImg cells={cells} gridWidth={gridWidth} gridHeight={gridHeight} />
        <div className="logo">pxl-art</div>
      </div>
    </div>
  );
};

export default Controls;
