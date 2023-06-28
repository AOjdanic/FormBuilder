import { useContext } from "react";
import FormContext from "../context/form-context";

/* eslint-disable react/prop-types */
function InputComponent({
  props: {
    id,
    label,
    placeholder,
    type,
    required,
    min,
    max,
    step,
    radios,
    question,
  },
}) {
  let { elementOptions, labelOptions, inputOptions } = useContext(FormContext);

  if (type === "color") {
    inputOptions = { ...inputOptions, padding: "0 0 0 0" };
  }

  if (type === "range") {
    inputOptions = { ...inputOptions, padding: "0.5rem 0 0.5rem 0" };
  }

  if (type === "radio" || type === "checkbox") {
    return (
      <article style={elementOptions} className=" flex flex-col gap-4">
        <p style={labelOptions}>{question}</p>
        <div className="flex justify-between flex-wrap">
          {radios.map((el) => (
            <label
              style={labelOptions}
              className="flex items-center justify-end gap-2 mb-4 basis-1/5"
              key={el}
            >
              {el}
              <input
                style={inputOptions}
                className="h-6 w-6 cursor-pointer outline-none"
                type={type}
                id={el}
                name={label}
                {...required}
              />
            </label>
          ))}
        </div>
      </article>
    );
  }

  if (type === "textarea") {
    return (
      <article style={elementOptions} className=" flex flex-col gap-4">
        <label style={labelOptions} htmlFor={id}>
          {label}
        </label>
        <textarea
          style={inputOptions}
          className="outline-none rounded-lg"
          id={id}
          placeholder={placeholder}
          name={label}
          {...required}
        ></textarea>
      </article>
    );
  }

  if (type === "select") {
    return (
      <article style={elementOptions} className="flex flex-col gap-4">
        <p style={labelOptions}>{label}</p>
        <select
          style={inputOptions}
          className="cursor-pointer outline-none"
          name={label}
          id={id}
        >
          {radios.map((el) => (
            <option key={el} id={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </article>
    );
  }

  return (
    <article style={elementOptions} className="flex flex-col gap-4">
      <label style={labelOptions} htmlFor={id}>
        {label}
      </label>
      <input
        style={inputOptions}
        className={`${
          type === "submit" || type === "reset" ? "cursor-pointer" : ""
        }  outline-none `}
        type={type}
        id={id}
        placeholder={placeholder}
        name={label}
        {...required}
        min={min}
        max={max}
        step={step}
      />
    </article>
  );
}

export default InputComponent;
