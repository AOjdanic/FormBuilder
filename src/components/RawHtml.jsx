import { useContext, useState } from "react";
import FormContext from "../context/form-context";

function RawHtml() {
  const { formOptions, elementOptions, inputOptions, labelOptions } =
    useContext(FormContext);
  const [formHtml, setFormHtml] = useState("");
  const [formStyles, setFormStyles] = useState("");
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <p className="mx-auto flex w-full max-w-lg flex-col text-center text-2xl text-red-900">
        Get raw HTML and styles
      </p>
      <textarea
        className="h-32 resize-none bg-slate-50 px-4 outline-none"
        readOnly
        value={`<form>${formHtml}</form>`}
      ></textarea>
      <textarea
        className="h-32 border-t-2 bg-slate-50 px-4 outline-none"
        readOnly
        value={formStyles}
      ></textarea>
      <button
        className="block w-full self-center rounded-sm bg-red-900 p-2 font-bold text-slate-900"
        onClick={() => {
          setFormHtml(document.getElementById("mainForm").innerHTML);
          setFormStyles(
            `_____Form styles_____\n${JSON.stringify(formOptions).slice(
              1,
              -1
            )}\n_____Input styles_____\n${JSON.stringify(inputOptions).slice(
              1,
              -1
            )}\n_____Label styles_____\n${JSON.stringify(labelOptions).slice(
              1,
              -1
            )}\n_____Element styles_____\n${JSON.stringify(
              elementOptions
            ).slice(1, -1)}`
          );
        }}
      >
        Get HTML
      </button>
    </div>
  );
}

export default RawHtml;
