import { useContext, useState } from "react";
import FormContext from "../context/form-context";

function InputBuild() {
  const { setFormFields } = useContext(FormContext);
  const [selectValue, setSelectValue] = useState();
  const [boxNumber, setBoxNumber] = useState(0);

  let radioArr = new Array(boxNumber).fill(0);

  const createFormElement = (e) => {
    e.preventDefault();
    const formElements = Array.from(e.target.elements).slice(0, -1);
    const propsObj = {};

    console.log(formElements);

    if (selectValue === "checkbox" || selectValue === "radio") {
      const nonRadios = formElements.filter((el) => !el.id.startsWith("radio"));
      console.log(nonRadios);
      const radios = formElements.filter((el) => el.id.startsWith("radio"));
      console.log(radios);

      let newObj = {};

      nonRadios.forEach((el) => {
        if (el.id === "noOfBoxes") return;
        if (el.id === "required") {
          return (newObj[el.id] = { required: el.checked });
        }
        newObj[el.id] = el.value;
      });
      newObj.radios = [];
      radios.forEach((el) => {
        newObj.radios.push(el.value);
        console.log(newObj);
      });
      setFormFields((prev) => [...prev, newObj]);
      return;
    }

    formElements.forEach((el) => {
      if (el.id === "noOfBoxes") return;

      if (el.id === "required") {
        return (propsObj[el.id] = { required: el.checked });
      }
      return (propsObj[el.id] = el.value);
    });
    console.log(propsObj);
    setFormFields((prev) => [...prev, propsObj]);
  };

  return (
    <form
      onSubmit={createFormElement}
      className=" mx-auto text-orange-700 font-bold flex flex-col gap-5 w-96 p-4"
    >
      <label className="flex justify-between items-center" htmlFor="type">
        For:
        <select
          className="w-[212px]"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          name="type"
          id="type"
        >
          <option value="text">text</option>
          <option value="email">email</option>
          <option value="password">password</option>
          <option value="number">number</option>
          <option value="search">search</option>
          <option value="checkbox">checkbox</option>
          <option value="radio">radio</option>
          <option value="range">range</option>
          <option value="color">color</option>
          <option value="date">date</option>
          <option value="time">time</option>
          <option value="month">month</option>
          <option value="week">week</option>
          <option value="file">file</option>
          <option value="url">url</option>
          <option value="reset">reset</option>
          <option value="submit">submit</option>
        </select>
      </label>

      {selectValue !== "radio" && selectValue !== "checkbox" && (
        <label className=" flex justify-between items-center" htmlFor="id">
          Id:
          <input required type="text" id="id" placeholder="enter id here" />
        </label>
      )}

      {selectValue !== "reset" && selectValue !== "submit" && (
        <label className=" flex justify-between items-center" htmlFor="label">
          Title:
          <input
            required
            type="text"
            id="label"
            placeholder="enter title here"
          />
        </label>
      )}

      {selectValue !== "radio" &&
        selectValue !== "checkbox" &&
        selectValue !== "range" &&
        selectValue !== "file" &&
        selectValue !== "reset" &&
        selectValue !== "submit" && (
          <label
            className=" flex justify-between items-center"
            htmlFor="placeholder"
          >
            Placeholder:
            <input
              type="text"
              id="placeholder"
              placeholder="enter placeholder here"
            />
          </label>
        )}

      {selectValue === "range" && (
        <>
          <label className=" flex justify-between items-center" htmlFor="min">
            Minimum:
            <input
              required
              type="number"
              id="min"
              placeholder="enter minimum value"
            />
          </label>
          <label className=" flex justify-between items-center" htmlFor="max">
            Maximum:
            <input
              required
              type="number"
              id="max"
              placeholder="enter maximum value"
            />
          </label>

          <label className=" flex justify-between items-center" htmlFor="step">
            Step:
            <input
              required
              type="number"
              id="step"
              placeholder="enter step value for slider"
            />
          </label>
        </>
      )}

      {(selectValue === "radio" || selectValue === "checkbox") && (
        <label
          className=" flex justify-between items-center"
          htmlFor="question"
        >
          Question:
          <input
            required
            type="text"
            id="question"
            placeholder="enter question"
          />
        </label>
      )}

      {(selectValue === "radio" || selectValue === "checkbox") && (
        <label
          className=" flex justify-between items-center"
          htmlFor="noOfBoxes"
        >
          Number of fields:
          <input
            value={boxNumber}
            onChange={(e) => {
              if (Number(e.target.value) < 0) return;
              return setBoxNumber(Number(e.target.value));
            }}
            required
            type="number"
            id="noOfBoxes"
            placeholder="enter amount of options"
          />
        </label>
      )}

      {selectValue !== "reset" && selectValue !== "submit" && (
        <label
          htmlFor="required"
          className=" flex justify-between items-center"
        >
          Required: &nbsp;
          <input
            type="checkbox"
            name="required"
            id="required"
            className="accent-orange-700 h-6 w-6"
          />
        </label>
      )}

      {(selectValue === "radio" || selectValue === "checkbox") &&
        radioArr.map((el, i) => (
          <label
            key={i}
            className=" flex justify-between items-center"
            htmlFor={`radio${i}`}
          >
            Value {i + 1}:
            <input
              required
              type="text"
              id={`radio${i}`}
              placeholder="enter field value here"
            />
          </label>
        ))}
      <button className="bg-orange-700 text-slate-900 text-xl py-2 px-10 font-extrabold ">
        Create
      </button>
    </form>
  );
}

export default InputBuild;

{
  /* <textarea name="" id="" cols="30" rows="10"></textarea>
        <select name="" id="">
        <option value=""></option>
      </select> */
}
