import { useReducer } from "react";

// manage state with useReducer hook
//add complete form validation

function formReducer(state, action) {
  if (action.type === "inputChange") {
    const { name, value } = action.payload;
     
    return {
      ...state,
      [name]: value,
    };
  }
  return state;
}

const Form = () => {
  const formState = {
    name: "",
    age: "",
    gender: "",
    jobtype: "",
    devtype: "",
    exp: "",
    profilepic: "",
  };

  const [state, dispatch] = useReducer(formReducer, formState);

  const handleChange = (e) => {
    dispatch({
      type: "inputChange",
      payload: e.target,
    });
  };
  console.log(state);
  return (
    <>
      <h1>Form component</h1>
      <form className="flex justify-center items-center flex-col space-y-6">
        <input
          name="name"
          className="h-[4vh] w-[20vw] text-left text-black pl-4"
          type="text"
          onChange={handleChange}
          value={state.name}
          placeholder="Type your name"
        />
        <input
          name="age"
          className="h-[4vh] w-[20vw] text-left text-black pl-4"
          type="text"
          value={state.age}
          onChange={handleChange}
          placeholder="Type your age"
        />
        <span className="font-semibold">Choose Gender</span>
        <label htmlFor="male">Male</label>
        <input
          className="h-[4vh]"
          type="checkbox"
          onChange={handleChange}
          name="gender"
          value={"Male"}
          checked={state.gender === "Male"}
        />
        <label htmlFor="female">Female</label>
        <input
          className="h-[4vh]"
          type="checkbox"
          onChange={handleChange}
          name="gender"
          value={"Female"}
          checked={state.gender === "Female"}
        />
        <label htmlFor="jobtype">Job Type</label>
        <select
          onChange={handleChange}
          className="w-[20vw] h-[4vh]"
          name="jobtype"
        >
          <option value="" selected disabled>
            Choose Job Type
          </option>
          <option>Developer</option>
          <option>Management</option>
          <option>Designer</option>
        </select>
        {/* if person selected developer then ask which kind of  */}
        <label htmlFor="devtype">Choose Developer Type</label>
        <select  onChange={handleChange} className="w-[20vw] h-[4vh]" name="devtype" id="">
          <option selected  value={"Frontend"}>Frontend</option>
          <option value={"Backend"}>Backend</option>
        </select>
        <label htmlFor="exp">Experienced</label>
        <label htmlFor="Yes">Yes</label>
        <input name="Yes" className="h-[4vh]" type="radio" />
        <label htmlFor="No">No</label>
        <input name="No" className="h-[4vh]" type="radio" />
        <input type="file" name="profilepic" />
        <button
          className="w-[15vw] p-3 cursor-pointer rounded-md  border-none outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
