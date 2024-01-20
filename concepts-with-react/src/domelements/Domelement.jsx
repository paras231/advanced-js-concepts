import React, { useEffect, useRef } from "react";

const Domelement = () => {
  const formRef = useRef();
  useEffect(() => {
    const form = document.createElement("form");
    let input = document.createElement("input");
    input.placeholder = "Write your name";
    const marker = document.getElementsByClassName("elem_marker");
    console.log(marker);
    if (formRef) {
      formRef.current.appendChild(form);
      formRef.current.appendChild(input);
    }
  }, []);

  return (
    <>
      <div className="elem_marker" ref={formRef}></div>
    </>
  );
};

export default Domelement;
