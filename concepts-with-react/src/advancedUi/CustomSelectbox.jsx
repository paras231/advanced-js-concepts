import { useState, useRef, useEffect } from "react";
import styles from "./popper.module.css";
import { Popover } from "react-tiny-popover";
import selectstyles from "./selectbox.module.css";
// description and requirements-:

// for a custom select box we first need a popover component that actually show the scrollable options to select.
// then we need a input element that can be used to type and create the options
// it should have multiple select options.
// the select box should be createable , selectable , and searchable.
// it should contain a option to clear all the selected options.

const CustomSelectbox = ({
  options,
  name,
  isDisabled,
  isClearable,
  isSearchable,
  defaultValue,
}) => {
 
  // console.log(windowWidth);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [allOptions, setAllOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [typedValue, setTypedValue] = useState({
    label: "",
    value: "",
  });
  //  calculate  the distance of main input from top -:

  // ref used for input element
  const divref = useRef(null);

  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [distanceFromLeft, setDistanceFromLeft] = useState(0);
  const [popoverWidth, setPopoverWidth] = useState(0);
  useEffect(() => {
    setDistanceFromTop(divref.current?.offsetTop);
    setDistanceFromLeft(divref.current?.offsetLeft);
    setPopoverWidth(divref.current?.offsetWidth);
  }, [distanceFromTop, distanceFromLeft, divref.current?.offsetWidth]);
  console.log(divref.current?.offsetWidth);
  // this margin-top is used to position the popover content,useful for all devices just below the input component
  const marginTop = (distanceFromTop * 30) / 100 + 160;
  const marginLeft = (distanceFromLeft * 50) / 100 + 100;
  const width = popoverWidth;
  // select an option-:
  // while selecting an option we need to display the label in input and get value of selected object
  // we basically need to select the complete object.

  // handler for selecting single option

  function handleSelectSingleOption(option) {
    setSelectedOption(option);
    // close option as selected
    setIsPopoverOpen(false);
  }

  //  clear selected value from input if backspace is pressed-:
  function clearInputOnKeyPress(e) {
    console.log(e.key);
    if (e.key === "Backspace" || e.key === "Delete") {
      // instead of setting it to null we just make it an object.
      setSelectedOption({ ...selectedOption, label: "", value: "" });
      setTypedValue({ ...typedValue, label: "", value: "" });
    }
  }

  // type handler for typedValue-:

  function handleTypedValue(e) {
    setTypedValue({
      ...typedValue,
      value: e.target.value,
      label: e.target.value,
    });
  }

  // make the input searchable

  function filterOptionsOnSearch(e) {
    const originData = [...allOptions];
    setAllOptions((data) => {
      const inputValue = e.target.value.trim().toLowerCase(); // Trim and lowercase input value

      if (inputValue.length > 1) {
        const filteredOptions = data.filter((t) =>
          t.value.toLowerCase().includes(inputValue)
        );

        if (filteredOptions.length > 0) {
          setTypedValue({
            ...typedValue,
            label: filteredOptions[0].label,
            value: filteredOptions[0].value,
          });
        } else {
          setTypedValue({
            ...typedValue,
            // label: e.target.value,
            value: e.target.value,
          });
        }
        return filteredOptions;
      } else {
        setTypedValue({
          ...typedValue,
          label: e.target.value,
          value: e.target.value,
        });
        return originData;
      }
    });
  }

  return (
    <>
      <Popover
        align="center"
        isOpen={isPopoverOpen}
        positions={["bottom"]} // preferred positions by priority
        content={
          <PopoverContent
            width={width}
            marginTop={marginTop}
            marginLeft={marginLeft}
            options={allOptions}
            handleSelectSingleOption={handleSelectSingleOption}
          />
        }
      >
        <InputWrapper
          onFocus={() => setIsPopoverOpen(true)}
          // onBlur={() => setIsPopoverOpen(false)}
          divRef={divref}
          value={selectedOption?.value}
          onKeyDown={clearInputOnKeyPress}
          typedValue={typedValue}
          setTypedValue={setTypedValue}
          isSearchable={isSearchable}
          handleTypedValue={handleTypedValue}
          onSearch={filterOptionsOnSearch}
        />
      </Popover>
    </>
  );
};

export default CustomSelectbox;

function PopoverContent({
  marginTop,
  marginLeft,
  width,
  options,
  handleSelectSingleOption,
}) {
  console.log(width);
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: `${marginTop}px`,
          marginLeft: `${width}px`,
        }}
      >
        <div style={{ width: `${width}px` }} className={styles.popper_content}>
          <div className={styles.options_wrapper}>
            {options.map((option) => {
              return (
                <span
                  onClick={() => handleSelectSingleOption(option)}
                  key={option.value}
                >
                  {option.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function InputWrapper({
  onChange,
  value,
  onFocus,
  onBlur,
  divRef,
  onKeyDown,
  typedValue,
  setTypedValue,
  isSearchable,
  handleTypedValue,
  onSearch,
}) {
  return (
    <>
      <div ref={divRef} className={selectstyles.input_wrapper}>
        <input
          placeholder="Select..."
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          value={value ? value : typedValue.value}
          onKeyDown={onKeyDown}
          onChange={isSearchable ? onSearch : handleTypedValue}
        />
      </div>
    </>
  );
}
