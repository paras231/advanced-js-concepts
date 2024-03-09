import React, { useState, useRef } from "react";

/* a custom drag and drop file uploader component-::::::::*/

/* 
  1. This component should have both drag and drop files and choose files feature
  2. It should have cutomize styles for file input feature
*/
const FileUploader = () => {
  const inputref = useRef(null);
  const [droppedFile, setDroppedFile] = useState("");
  const [files, setFiles] = useState([]);
  function onDragEnter(event) {
    inputref.current ? inputref.current.style.background === "pink" : "";
    inputref.current ? inputref.current.style.opacity === 0.5 : "";
  }

  function onDragLeave(event) {
    inputref.current ? inputref.current.style.background === "" : "";
  }

  function onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    // console.log(event);
  }

  function onDrop(event) {
    event.preventDefault();
    // drag event gives a dataTransfer object which contains the files.
    const allFiles = event.dataTransfer.files;
    const file = event.dataTransfer.files[0];
    setFiles(allFiles);
    setDroppedFile(file.name);
  }

  function fileOnChange(event) {
    setDroppedFile(event.target.files[0].name);
    setFiles(event.target.files)
  }

 
  return (
    <>
      <h1>Drag and drop file uploader</h1>
        <span className="font-bold text-blue-700">It supports multiple files</span>
      {/* drop target div */}

      <div
        style={{ border: "1px solid red" }}
        ref={inputref}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
        className="w-[30vw] mt-10 h-[30vh] flex justify-center flex-col items-center"
      >
        <label
          className="bg-blue-500 text-center rounded-sm h-[5vh] w-[20vw] text-white p-2 cursor-pointer"
          htmlFor="file_input"
        >
          Choose file or Drag and drop
          <input
            onChange={fileOnChange}
            id="file_input"
            type="file"
            multiple
            className="hidden"
          />
        </label>
        {Array.from(files).map((file, idx) => {
          return (
            <span key={idx} className="font-bold text-lg text-blue-400">
              {file.name}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default FileUploader;
