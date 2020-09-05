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
          .filter((color) => {
            return color !== "#00000000";
          })
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

  useEffect(() => {
    setCells(blankCells());
  }, [gridWidth, gridHeight, blankCells]);

  return (
    <div className="App" onKeyDown={(e) => onKeyDown(e)} tabIndex={0}>
      <PixelGrid
        color={color}
        setColor={setColor}
        sColor={sColor}
        setSColor={setSColor}
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
        setColor={setColor}
        sColor={sColor}
        setSColor={setSColor}
        setCells={setCells}
        blankCells={blankCells}
        history={history}
        tool={tool}
        setTool={setTool}
      />
    </div>
  );
}

export default App;
