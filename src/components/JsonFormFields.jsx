import { useContext, useRef } from "react";
import FormContext from "../context/form-context";

function JsonFormFields() {
  const { formFields, setFormFields } = useContext(FormContext);
  const formJsonStringRef = useRef();

  const parseStringIntoJson = (e) => {
    e.preventDefault();

    if (formJsonStringRef.current.value === "") return;

    const arrOfFutObj = formJsonStringRef.current.value.split(".");

    const arrOfProps = arrOfFutObj.map((ObjStr) => ObjStr.split(","));

    const someArr = arrOfProps.map((propArr) => {
      return propArr.map((pairStr) => {
        const pairs = pairStr.split(":");
        if (pairs[0] === "required")
          return `"required":${JSON.stringify({ required: true })}`;
        return `"${pairs[0]}":"${pairs[1]}"`;
      });
    });

    const someArr2 = someArr.map((arr) => `{${arr.join(",")}}`);

    const someArr3 = someArr2.map((arr) => JSON.parse(arr));

    return setFormFields([...someArr3]);
  };

  return (
    <>
      <div>
        <label
          htmlFor="jsonFormEdit"
          className="mx-auto flex w-full max-w-lg flex-col text-center text-2xl text-red-900"
        >
          Create form elements (string into JSON)
          <textarea
            ref={formJsonStringRef}
            className="h-64 w-full max-w-lg resize-none rounded-sm bg-slate-50 outline-none"
            id="jsonFormEdit"
          ></textarea>
        </label>
        <button
          onClick={parseStringIntoJson}
          className="mx-auto block w-full max-w-lg rounded-sm bg-red-900 p-2 font-bold text-slate-900"
        >
          Apply
        </button>
      </div>
      <label
        htmlFor="jsonForm"
        className="mx-auto flex w-full max-w-lg flex-col text-center text-2xl text-red-900"
      >
        Form elements (JSON)
        <textarea
          readOnly
          className="h-64 w-full max-w-lg resize-none rounded-sm bg-slate-50 outline-none"
          id="jsonForm"
          value={JSON.stringify(formFields)}
        ></textarea>
        <div className="mx-auto block w-full max-w-lg rounded-sm bg-red-900 p-5"></div>
      </label>
    </>
  );
}

export default JsonFormFields;
