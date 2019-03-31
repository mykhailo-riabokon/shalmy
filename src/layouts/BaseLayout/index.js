import React from "react";
import Header from "./Header";

import "./index.css";

function BaseLayout(props) {
  return (
    <div className="base-layout">
      <Header />
      <div className="content">{props.children}</div>
      <footer>
        <div>
          Logo made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </footer>
    </div>
  );
}

export default BaseLayout;
