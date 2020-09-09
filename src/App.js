import React, { useState, useMemo, useEffect, useCallback } from "react";
import Controls from "./component/Controls";
import PixelGrid from "./component/PixelGrid";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [sColor, setSColor] = useState("#ffffff");
  const [outline, setOutline] = useState(true);
  const [gridWidth, setGridWidth] = useState(32);
  const [gridHeight, setGridHeight] = useState(32);
  const [cellSize, setCellSize] = useState(20);
  const [tool, setTool] = useState("pen");
  const [menu, setMenu] = useState(null);

  const blankCells = useCallback(() => {
    var c = [];
    for (var row = 0; row < gridWidth; row++) {
      c[row] = [];
      for (var col = 0; col < gridHeight; col++) {
        c[row][col] = "#00000000";
      }
    }
    return c;
  }, [gridWidth, gridHeight]);

  const [cells, setCells] = useState(blankCells());

  const history = useMemo(
    () => [
      ...new Set(
        [...cells]
          .flat()
          .filter((color) => color !== "#00000000")
          .sort()
      ),
    ],
    [cells]
  );

  const onKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "a":
        setTool("pen");
        break;
      case "s":
        setTool("colorpicker");
        break;
      case "d":
        setTool("eraser");
        break;
      default:
        break;
    }
  };

  const doSetColor = (which, color) => {
    switch (which) {
      case "primary":
      case 0:
        setColor(color);
        break;
      case "secondary":
      case 1:
        setSColor(color);
        break;
      default:
        break;
    }
    if (tool !== "pen") setTool("pen");
  };

  const onClick = (e) => {
    menu !== null && e.target.className !== "menutitle" && setMenu(null);
  };

  useEffect(() => {
    setCells(blankCells());
  }, [gridWidth, gridHeight, blankCells]);

  return (
    <div
      className="App"
      onClick={(e) => onClick(e)}
      onKeyDown={(e) => onKeyDown(e)}
      tabIndex={0}
    >
      <PixelGrid
        color={color}
        sColor={sColor}
        setColor={doSetColor}
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        cellSize={cellSize}
        outline={outline}
        cells={cells}
        setCells={setCells}
        tool={tool}
      />
      <Controls
        outline={outline}
        setOutline={setOutline}
        gridWidth={gridWidth}
        setGridWidth={setGridWidth}
        gridHeight={gridHeight}
        setGridHeight={setGridHeight}
        cellSize={cellSize}
        setCellSize={setCellSize}
        cells={cells}
        color={color}
        sColor={sColor}
        setColor={doSetColor}
        setCells={setCells}
        blankCells={blankCells}
        history={history}
        tool={tool}
        setTool={setTool}
        menu={menu}
        setMenu={setMenu}
      />
    </div>
  );
}

export default App;
