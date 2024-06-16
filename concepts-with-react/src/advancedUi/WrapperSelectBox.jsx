import React from "react";
import CustomSelectbox from "./CustomSelectbox";

//  this is the wrapper parent component for custom select box , which injects some essential props to it.

const options = [
  {
    value: "red",
    label: "red",
  },
  {
    value: "green",
    label: "green",
  },
  {
    value: "blue",
    label: "blue",
  },
  {
    value: "pink",
    label: "pink",
  },
];

const WrapperSelectBox = () => {
  return (
    <>
      <CustomSelectbox isSearchable={false} options={options} />
    </>
  );
};

export default WrapperSelectBox;
