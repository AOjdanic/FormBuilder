import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../context/form-context";
import { Info } from "@phosphor-icons/react";
import ModalElement from "./ModalElement";
function JsonFormFields() {
  const { formFields, setFormFields, setShowModal, showModal } =
    useContext(FormContext);
  const formJsonStringRef = useRef();
  const formJsonRef = useRef();
  const [formJsonValue, setFormJsonValue] = useState(
    JSON.stringify(formFields)
  );

  useEffect(() => {
    setFormJsonValue(JSON.stringify(formFields));
  }, [formFields]);

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
    console.log(someArr3);
    return setFormFields((prev) => [...prev, ...someArr3]);
  };

  return (
    <>
      {showModal && <ModalElement />}
      <div>
        <label
          htmlFor="jsonFormEdit"
          className="mx-auto flex w-full max-w-lg flex-col text-center text-2xl text-red-900"
        >
          <span className="flex items-center justify-center gap-4">
            Create form elements (string into JSON)
            <Info
              className="cursor-pointer"
              size={28}
              color="#f8fafc"
              weight="bold"
              onClick={() => setShowModal(true)}
            />
          </span>
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
          Create form elements (string structure)
        </button>
      </div>
      <label
        htmlFor="jsonForm"
        className="mx-auto flex w-full max-w-lg flex-col text-center text-2xl text-red-900"
      >
        Form elements (JSON)
        <textarea
          ref={formJsonRef}
          className="h-64 w-full max-w-lg resize-none rounded-sm bg-slate-50 outline-none"
          id="jsonForm"
          value={formJsonValue}
          onChange={(e) => setFormJsonValue(e.target.value)}
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();

            return setFormFields(JSON.parse(formJsonRef.current.value));
          }}
          className="mx-auto block w-full max-w-lg rounded-sm bg-red-900 p-2 text-base font-bold text-slate-900"
        >
          Create form elements (JSON structure)
        </button>
      </label>
    </>
  );
}

export default JsonFormFields;
