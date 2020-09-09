import React from "react";
import Icon from "./Icon";

function Save() {
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
        />{" "}
        Save Image
      </a>
    </div>
  );
}

export default Save;
