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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setButtonState({ ...buttonState, [name]: value });
  };

  return (
    <>
      <h1>Builder</h1>
      {/* handler inputs */}
      <div className="flex flex-col text-white bg-purple-600 rounded-md px-4 py-4">
        <div className="flex  flex-col">
          <label>Button Title</label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
      </div>
      <ButtonBuilder />
    </>
  );
};

export default BulderHandler;
