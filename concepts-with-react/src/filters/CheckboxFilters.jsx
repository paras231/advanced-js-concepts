import { useState, useEffect } from "react";
import { shopData } from "../constants";
const CheckboxFilters = () => {
  // multiple checkboxes filters for an array of objects
  const [products, setProducts] = useState([...shopData]);
  const [selectedBox, setSelectedBox] = useState([]);
  const [categoryCheckBoxes, setCategoryCheckboxes] = useState([
    {
      label: "Food",
      value: "food",
    },
    {
      label: "Clothes",
      value: "clothes",
    },
    {
      label: "Jwellery",
      value: "jwellery",
    },
    {
      label: "Shoes",
      value: "shoes",
    },
  ]);
  function handleCheckboxChange(event, index) {
    const { name, checked } = event.target;
    const data = [...categoryCheckBoxes];
    data[index]["checked"] = checked;
    data[index]["name"] = name;
    setCategoryCheckboxes(data);
    // get checkboex which are true
    const filteredCheckboxes = data
      .filter((box) => {
        if (box.hasOwnProperty("checked") && box.checked) {
          return true;
        }
      })
      .map((box) => box.value);
    setSelectedBox(filteredCheckboxes);
  }
  useEffect(() => {
    if (selectedBox.length > 0) {
      const data = products.filter((p) => {
        return selectedBox.includes(p.category);
      });
      setProducts(data);
    }
  }, [selectedBox]);
  return (
    <>
      <div className="flex flex-col space-y-3">
        {categoryCheckBoxes.map((box, idx) => {
          return (
            <div className="flex items-center space-x-3" key={idx}>
              <label htmlFor={box.label}>{box.label}</label>
              <input
                name={box.value}
                className="h-[2vh] w-[2vw]"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, idx)}
              />
            </div>
          );
        })}
        <div className="flex flex-col space-y-4">
          {products.map((d, index) => {
            return (
              <div className="flex space-x-4" key={index}>
                <span>{d.product}</span>
                <span>{d.rating}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CheckboxFilters;
