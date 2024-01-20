import React from "react";
import "./tags.css";
const Tags = () => {
  return (
    <>
      {/* use details tag to display details */}
      <details className="tags_details_wrap">
        <summary >Technical</summary>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, earum!
        </span>
      </details>
      <details>
        <summary>Business</summary>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, earum!
        </span>
      </details>
      {/* use mark tag to highlight the text */}
      <span>
        Lorem ipsum, dolor sit amet  <mark>consectetur adipisicing elit.</mark> Repellat, labore?
      </span>

      {/* data list tag to show autocomplete feature for input tag */}
      <input list="languages" placeholder="Enter language" type="text" />
      <datalist id="languages">
        <option value="HTML"/>
        <option value="CSS"/>
        <option value="JavaScript"/>
    </datalist>
    </>
  );
};

export default Tags;
