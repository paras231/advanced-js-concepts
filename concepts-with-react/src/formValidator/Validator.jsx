import React, { useRef } from "react";

const Validator = () => {
  const register = (fieldName) => {
    return {
      name: "",
    };
  }
  return (
    <>
      <input type="text" name="name" {...register("name")} />
    </>
  );
};

export default Validator;
