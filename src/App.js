import React, { useState, useMemo, useEffect, useCallback } from "react";
import Controls from "./component/Controls";
import History from "./component/History";
import PixelGrid from "./component/PixelGrid";
import ColorPicker from "./component/ColorPicker";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [outline, setOutline] = useState(true);
  const [gridWidth, setGridWidth] = useState(32);
  const [gridHeight, setGridHeight] = useState(32);
  const [cellSize, setCellSize] = useState(20);

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

  const history = useMemo(() => [...new Set([...cells].flat().sort())], [
    cells,
  ]);

  useEffect(() => {
    setCells(blankCells());
  }, [gridWidth, gridHeight, blankCells]);

  return (
    <div className="App">
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
        setCells={setCells}
        blankCells={blankCells}
      />
      <div className="colors">
        <ColorPicker color={color} setColor={setColor} />
        <History history={history} setColor={setColor} />
      </div>
      <PixelGrid
        color={color}
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        cellSize={cellSize}
        outline={outline}
        cells={cells}
        setCells={setCells}
      />
    </div>
  );
}

export default App;
