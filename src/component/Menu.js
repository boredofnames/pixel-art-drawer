import React, { useState } from "react";

const Menu = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="menu"
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="inner"
        onClick={(e) => e.stopPropagation()}
        style={{ display: open ? "flex" : "none" }}
      >
        {children}
      </div>
      <div
        style={{
          padding: "5px",
          backgroundColor: open ? "#222" : "#555",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Menu;
