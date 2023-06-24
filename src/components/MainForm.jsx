import { useContext } from "react";
import FormContext from "../context/form-context";
import InputComponent from "./InputComponent";

function MainForm() {
  const { formFields } = useContext(FormContext);
  return (
    <form
      id="mainForm"
      className="bg-slate-900 max-w-3xl p-12 shadow-2xl shadow-white rounded-3xl"
    >
      <h2 className="text-4xl text-orange-700 font-bold">Form Title</h2>
      {formFields.map((field) => (
        <InputComponent key={field.id} props={field} />
      ))}
    </form>
  );
}

export default MainForm;
