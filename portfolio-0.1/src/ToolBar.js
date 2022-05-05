import React from "react";

const ToolBar = (openSidebar) => {
  return (
    <div className="tool-br">
      <div className="burger" onClick={openSidebar}></div>
      <i className="ri-menu-fill"></i>
      <div className="title"> The brave coders </div>
    </div>
  );
};

export default ToolBar;
