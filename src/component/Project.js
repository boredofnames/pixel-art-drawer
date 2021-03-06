import React, { useRef } from "react";
import { compress, decompress } from "../js/utils";
import Icon from "./Icon";

export const Import = ({ setCells, setGridSize }) => {
  const importRef = useRef(null);
  const doImport = () => {
    var file = importRef.current.files[0];
    var reader = new FileReader();
    reader.onloadend = (e) => onLoad(e);
    reader.readAsText(file);
  };
  const onLoad = (e) => {
    var cells = decompress(e.target.result),
      size = getSize(cells);
    setSize(size);
    setTimeout(() => setCells(cells), 100);

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
  return (
    <div className="import">
      <label>
        <Icon
          viewBox="0 0 576 512"
          d="M528 288H384v-32h64c42.6 0 64.2-51.7 33.9-81.9l-160-160c-18.8-18.8-49.1-18.7-67.9 0l-160 160c-30.1 30.1-8.7 81.9 34 81.9h64v32H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80L288 48l160 160H336v160h-96V208H128zm400 256H48V336h144v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32h144v128zm-40-64c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
        />
        Load Project
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

export const Export = ({ cells }) => {
  const doExport = (e) => {
    let name = prompt("File name?", "new");
    if (!name) return;
    e.currentTarget.href = URL.createObjectURL(new Blob([compress(cells)]));
    e.currentTarget.download = `${name}.pxl`;
  };

  return (
    <div className="import">
      {/* eslint-disable-next-line*/}
      <a onClick={doExport}>
        <Icon
          viewBox="0 0 576 512"
          d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"
          style={{ width: "15px", height: "15px" }}
        />
        Save Project
      </a>
    </div>
  );
};
