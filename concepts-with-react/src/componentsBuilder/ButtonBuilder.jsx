import { useState } from "react";

const ButtonBuilder = ({
  textColor,
  bgColor,
  borderRadius,
  height,
  width,
  size,
  variant,
  title,
  eventHandler,
  fontSize,
  fontWeight,
  border,
  outline
}) => {
  console.log(bgColor);
  return (
    <>
      <button
        style={{background:`${bgColor}`}}
        onClick={eventHandler}
        className={`rounded-[${borderRadius}] font-[${fontWeight}]  w-[${width}]  text-[${textColor}]`}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonBuilder;
