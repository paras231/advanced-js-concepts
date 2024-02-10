import React from "react";
import "./popover.css";
const PopperComponent = () => {
  return (
    <>
      <details data-popover="up">
        <summary>I'm a popover</summary>
        <div>
          <h1>Popovers can have lots of content!</h1>
          <p>Like paragraphs</p>
          <a href="#">and links</a>
        </div>
      </details>
    </>
  );
};

export default PopperComponent;
