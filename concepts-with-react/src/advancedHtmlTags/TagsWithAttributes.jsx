import React, { useEffect, useRef, useState } from "react";

const TagsWithAttributes = () => {
  const divRef = useRef(null);
  const [content, setContent] = useState("");
  useEffect(() => {
    // if (divRef) {
    //   const content = divRef.current?.innerText;
    //   console.log(content);
    // }
  }, []);
  //   here we can get the editable content value and post this to an api call,
  console.log(content);
  return (
    <>
      <p title="Hellow world">There is a title inside p tag</p>

      {/* editable content attribute */}
      <div
        ref={divRef}
        contentEditable
        onBlur={(e) => setContent(e.target.innerHTML)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, eius.
      </div>

      <span role="button">Click me</span>
    </>
  );
};

export default TagsWithAttributes;
