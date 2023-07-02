import { useContext, useState } from "react";
import FormContext from "../context/form-context";
import InputBuildBuildingBlock from "./building blocks/InputBuildBuildingBlock";

function InputBuild() {
  const { setFormFields } = useContext(FormContext);
  const [selectValue, setSelectValue] = useState();
  const [boxNumber, setBoxNumber] = useState(0);
  const options = [
    "text",
    "email",
    "password",
    "number",
    "search",
    "checkbox",
    "radio",
    "range",
    "color",
    "date",
    "time",
    "month",
    "week",
    "file",
    "url",
    "reset",
    "submit",
    "textarea",
    "select",
  ];

  let radioArr = new Array(boxNumber).fill(0);

  const createFormElement = (e) => {
    e.preventDefault();
    const formElements = Array.from(e.target.elements).slice(0, -1);
    const propsObj = {};

    if (
      selectValue === "checkbox" ||
      selectValue === "radio" ||
      selectValue === "select"
    ) {
      const nonRadios = formElements.filter((el) => !el.id.startsWith("radio"));

      const radios = formElements.filter((el) => el.id.startsWith("radio"));

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

    setFormFields((prev) => [...prev, propsObj]);
  };

  return (
    <form
      onSubmit={createFormElement}
      className="container mx-auto flex flex-col gap-5 p-4 font-bold text-red-900 lg:w-96"
    >
      <p className="text-center text-3xl">Build form elements</p>
      {/* select menu for input type */}

      <label className="flex items-center justify-between" htmlFor="type">
        For:
        <select
          className="w-[212px] rounded-sm outline-none"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          name="type"
          id="type"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      {/* id field, neccessary for every input */}

      <InputBuildBuildingBlock required id="id" />

      {/* title of the input field */}

      {selectValue !== "reset" && selectValue !== "submit" && (
        <InputBuildBuildingBlock required id="label" label="Title" />
      )}

      {/* Creating placeholder for input element if needed */}

      {selectValue !== "select" &&
        selectValue !== "color" &&
        selectValue !== "radio" &&
        selectValue !== "checkbox" &&
        selectValue !== "range" &&
        selectValue !== "file" &&
        selectValue !== "reset" &&
        selectValue !== "submit" &&
        selectValue !== "date" &&
        selectValue !== "time" &&
        selectValue !== "month" &&
        selectValue !== "week" && <InputBuildBuildingBlock id="placeholder" />}

      {/* Defining range values */}

      {selectValue === "range" && (
        <>
          <InputBuildBuildingBlock
            required
            id="min"
            label="Minimum"
            type="number"
          />
          <InputBuildBuildingBlock
            required
            id="max"
            label="Maximum"
            type="number"
          />
          <InputBuildBuildingBlock required id="step" type="number" />
        </>
      )}

      {/* Question for checkboxes/radios */}

      {(selectValue === "radio" || selectValue === "checkbox") && (
        <InputBuildBuildingBlock required id="question" />
      )}

      {/* creating additional radios,checkboxes and options as per need */}

      {(selectValue === "radio" ||
        selectValue === "checkbox" ||
        selectValue === "select") && (
        <label
          className=" flex items-center justify-between"
          htmlFor="noOfBoxes"
        >
          Number of fields:
          <input
            className="rounded-sm outline-none"
            value={boxNumber}
            onChange={(e) => {
              if (Number(e.target.value) < 0) return;
              return setBoxNumber(Number(e.target.value));
            }}
            required
            type="number"
            id="noOfBoxes"
          />
        </label>
      )}

      {/* checkbox for making element required or not */}

      {selectValue !== "reset" && selectValue !== "submit" && (
        <label
          htmlFor="required"
          className=" flex items-center justify-between"
        >
          Required: &nbsp;
          <input
            type="checkbox"
            name="required"
            id="required"
            className="h-6 w-6 accent-red-900"
          />
        </label>
      )}

      {/* options for radios, checkboxes and select */}

      {(selectValue === "radio" ||
        selectValue === "checkbox" ||
        selectValue === "select") &&
        radioArr.map((el, i) => (
          <label
            key={i}
            className=" flex items-center justify-between"
            htmlFor={`radio${i}`}
          >
            Value {i + 1}:
            <input required type="text" id={`radio${i}`} />
          </label>
        ))}

      {/* create element button */}

      <button className="rounded-sm bg-red-900 px-10 py-2 text-xl font-extrabold text-slate-900 ">
        Create
      </button>
    </form>
  );
}

export default InputBuild;
