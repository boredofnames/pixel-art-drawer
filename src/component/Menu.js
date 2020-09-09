import React from "react";

const Menu = ({ title, children, menu, setMenu }) => {
  return (
    <div
      className="menu"
      onClick={() => setMenu(menu === title ? null : title)}
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
          backgroundColor: title === menu ? "#222" : "#555",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Menu;
