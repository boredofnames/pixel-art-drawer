import React, { useRef } from "react";
import { compress, decompress } from "../js/utils";

export const Import = ({ setCells }) => {
  const importRef = useRef(null);
  const doImport = () => {
    var file = importRef.current.files[0];
    var reader = new FileReader();
    reader.onloadend = (evt) => {
      setCells(decompress(evt.target.result));
      importRef.current.value = "";
    };
    reader.readAsText(file);
  };
  return (
    <div className="import">
      <label>
        Import
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
    e.currentTarget.href = URL.createObjectURL(new Blob([compress(cells)]));
    e.currentTarget.download = "pixel.art";
  };

  return (
    <div className="import">
      {/* eslint-disable-next-line*/}
      <a onClick={doExport}>Export</a>
    </div>
  );
};
