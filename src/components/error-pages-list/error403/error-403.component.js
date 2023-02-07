import React from "react";
import "./error-403.styles.scss";

const Error403 = () => {
  return (
    <div id="app">
      <div>403</div>
      <div className="txt">
        Forbidden<span className="blink">_</span>
      </div>
    </div>
  );
};

export default Error403;
