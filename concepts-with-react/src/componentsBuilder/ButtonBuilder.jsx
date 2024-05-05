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
}) => {
  return (
    <>
      <button
        onClick={eventHandler}
        className={`rounded-[${borderRadius}] font-[${fontWeight}]  w-[${width}] bg-[${bgColor}] text-[${textColor}]`}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonBuilder;
