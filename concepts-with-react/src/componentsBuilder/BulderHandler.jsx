import { useState } from "react";
import ButtonBuilder from "./ButtonBuilder";

const BulderHandler = () => {
  const [buttonState, setButtonState] = useState({
    textColor: "",
    width: "",
    height: "",
    title: "",
    fontSize: "",
    fontWeight: "",
    borderRadius: "",
    bgColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setButtonState({ ...buttonState, [name]: value });
  };

  return (
    <>
      <h1>Builder</h1>
      {/* handler inputs */}
      <div className="flex flex-col   rounded-md px-4 py-4">
        <div className="flex  flex-col">
          <label>Button Title</label>
          <input
            value={buttonState.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            className=" text-black w-[15vw] h-[4vh]"
          />
        </div>
        <div className="flex  mt-4 flex-col">
          <label>Background</label>
          <input
            type="color"
            value={buttonState.bgColor}
            name="bgColor"
            onChange={handleChange}
            className="w-[15vw] h-[4vh]"
          />
        </div>
        <div className="flex  mt-4 flex-col">
          <label>Border Radius</label>
          <input
            type="range"
            value={buttonState.buttonState}
            name="bgColor"
            onChange={handleChange}
            className="w-[15vw] h-[4vh]"
          />
        </div>
      </div>
      <div>
        <ButtonBuilder bgColor={buttonState.bgColor} title={buttonState.title} />
      </div>
    </>
  );
};

export default BulderHandler;
