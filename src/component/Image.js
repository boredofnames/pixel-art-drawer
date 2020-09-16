import React, { useRef } from "react";
import Icon from "./Icon";

export const Save = () => {
  const onClick = (e) => {
    const name = prompt("Filename?"),
      link = document.querySelector("#link");
    link.setAttribute("download", `${name}.png`);
    link.setAttribute(
      "href",
      document
        .querySelector("#canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    if (!name) e.preventDefault();
  };
  return (
    <div>
      {/* eslint-disable-next-line*/}
      <a id="link" onClick={onClick}>
        <Icon
          viewBox="0 0 576 512"
          d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"
          style={{ width: "15px", height: "15px" }}
        />
        Save Image
      </a>
    </div>
  );
};

export const Load = ({ setCells, setGridSize }) => {
  const importRef = useRef(null);

  const rgbToHex = (r, g, b) => {
    return ((r << 16) | (g << 8) | b).toString(16);
  };

  const getPixel = (ctx, x, y) => {
    var p = ctx.getImageData(x, y, 1, 1).data;
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return hex;
  };

  const createCells = (img) => {
    var cells = [];

    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    for (var x = 0, wid = img.width; x < wid; x += 1) {
      for (var y = 0, len = img.height; y < len; y += 1) {
        if (cells[x] === undefined) cells[x] = [];
        cells[x][y] = getPixel(ctx, x, y);
      }
    }
    return cells;
  };
  const onImgLoad = (img) => {
    var cells = createCells(img),
      size = getSize(cells);
    setSize(size);
    setTimeout(() => setCells(cells), 100);
  };
  const createImg = (src) => {
    let img = new Image();
    img.src = src;
    img.onload = () => onImgLoad(img);
  };
  const onLoad = (e) => {
    createImg(e.target.result);
    importRef.current.value = "";
  };

  const getSize = (cells) => {
    return {
      width: cells.length,
      height: cells[0].length,
    };
  };
  const setSize = (size) => {
    setGridSize("width", size.width);
    setGridSize("height", size.height);
  };

  const doImport = () => {
    var file = importRef.current.files[0];
    var reader = new FileReader();
    reader.onloadend = (e) => onLoad(e);
    reader.readAsDataURL(file);
  };

  return (
    <div className="import">
      <label>
        <Icon
          viewBox="0 0 576 512"
          d="M528 288H384v-32h64c42.6 0 64.2-51.7 33.9-81.9l-160-160c-18.8-18.8-49.1-18.7-67.9 0l-160 160c-30.1 30.1-8.7 81.9 34 81.9h64v32H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80L288 48l160 160H336v160h-96V208H128zm400 256H48V336h144v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32h144v128zm-40-64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
        />
        Load Image
        <input
          type="file"
          ref={importRef}
          onChange={doImport}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
};
