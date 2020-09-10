import React, { useState, useMemo, useEffect, useCallback } from "react";
import Controls from "./component/Controls";
import PixelGrid from "./component/PixelGrid";
import Icon from "./component/Icon";
import "./App.css";

const LightBulb = ({ darkMode, setDarkMode }) => {
  return (
    <div className="lightbulb" onClick={() => setDarkMode(!darkMode)}>
      <Icon
        name="Dark Mode"
        viewBox="0 0 352 512"
        d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"
        style={{
          width: "25px",
          height: "25px",
          cursor: "pointer",
          color: darkMode ? "gray" : "black",
        }}
      />
    </div>
  );
};

function App() {
  const [color, setColor] = useState("#000000");
  const [sColor, setSColor] = useState("#ffffff");
  const [outline, setOutline] = useState(true);
  const [gridWidth, setGridWidth] = useState(32);
  const [gridHeight, setGridHeight] = useState(32);
  const [cellSize, setCellSize] = useState(20);
  const [tool, setTool] = useState("pen");
  const [menu, setMenu] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

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
      style={{ backgroundColor: darkMode ? "#222" : "lightgray" }}
      onClick={(e) => onClick(e)}
      onKeyDown={(e) => onKeyDown(e)}
      tabIndex={0}
    >
      <LightBulb darkMode={darkMode} setDarkMode={setDarkMode} />
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
