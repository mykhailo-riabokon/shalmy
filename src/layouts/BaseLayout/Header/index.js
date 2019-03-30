import React from "react";

function Header() {
  const name = "Shamly user name";

  return (
    <div className="header">
      <div className="logo">
        <div className="icon" />
        <div className="text">shalmy</div>
      </div>
      {name && <div className="user-name">{name}</div>}
    </div>
  );
}

export default Header;
