import { useState, useRef, useCallback } from "react";

const Elements = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      label: "item one",
    },
    {
      id: 2,
      label: "item two",
    },
    {
      id: 3,
      label: "item three",
    },
    {
      id: 4,
      label: "item four",
    },
  ]);
  const draggedElement = useRef(null);
  const dropTarget = useRef(null);
  function handleDragStart(event, idx) {
    setDraggedItem(idx);
  }

  // change the color of div which is a dropzone
  function onDragEnter(event) {
    dropTarget.current ? (dropTarget.current.style.background = "purple") : "";
    dropTarget.current ? (dropTarget.current.style.opacity = 0.6) : "";
  }
  function onDragLeave(event) {
    dropTarget.current ? (dropTarget.current.style.background = "") : "";
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  /*
  once we drop an item
  we would need to remove it from the actual item state list
  and append that item to dropped items list
  */
  function onDrop(event) {
    event.preventDefault();
    
    const allItems = [...items];
    const removedItems = allItems.splice(draggedItem, 1);
    setItems(allItems);
    setDroppedItems([...droppedItems, ...removedItems]);
  }

  //  handle reset state

  function resetState() {
    setDroppedItems([]);
  }

  return (
    <>
      <h1>Drag and drop examples with react js</h1>
      <div className="grid grid-cols-4">
        {items.map((elem, _idx) => {
          return (
            <div
              ref={draggedElement}
              onDrag={(e) => {
                handleDragStart(e, _idx);
              }}
              draggable
              key={elem.id}
              className="w-[20vw] flex items-center justify-center h-[20vh] bg-red-500"
            >
              {elem.label}
            </div>
          );
        })}
      </div>
      <div
        ref={dropTarget}
        style={{ border: "1px solid red" }}
        className="h-[20vh] p-4 w-[50vw] mt-20"
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={(e) => onDrop(e)}
      >
        drop box here
        <div className="grid grid-cols-4 space-x-4">
          {droppedItems.map((data) => {
            return (
              <div className="w-[15vw] h-[15vh] bg-blue-400" key={data.id}>
                {data.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={resetState}
          className="bg-blue-600 cursor-pointer mt-4 text-white p-2 border-none outline-none rounded-md"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Elements;
