import React from "react";
import Header from "./Header";

import "./index.css";

function BaseLayout(props) {
  return (
    <div className="base-layout">
      <Header />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default BaseLayout;
