import React from "react";
import { UserDataContext } from "../../../context";

class Header extends React.Component {
  static contextType = UserDataContext;

  render() {
    const { name } = this.context.userData;

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
}

export default Header;
