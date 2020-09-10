import React from "react";
import "../css/Menu.css";

export const MenuItem = ({ children, onClick }) => {
  return (
    <div className="menuitem" onClick={onClick}>
      {children}
    </div>
  );
};

export const Menu = ({ title, children, menu, setMenu }) => {
  return (
    <div
      className="menu"
      onClick={() => setMenu(menu === title ? null : title)}
      style={{ backgroundColor: menu === title ? "#222" : "#555" }}
    >
      <div
        className="inner"
        onClick={(e) => e.stopPropagation()}
        style={{ display: title === menu ? "flex" : "none" }}
      >
        {children}
      </div>
      <div
        className="menutitle"
        style={{
          padding: "5px",
        }}
      >
        {title}
      </div>
    </div>
  );
};
