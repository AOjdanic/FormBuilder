import { useContext } from "react";
import FormContext from "../context/form-context";
import InputComponent from "./InputComponent";

function MainForm() {
  const { formFields, formOptions } = useContext(FormContext);

  return (
    <form className="mx-auto w-full" id="mainForm" style={formOptions}>
      <h2>{formOptions.title}</h2>
      {formFields.map((field) => (
        <InputComponent key={field.id} props={field} />
      ))}
    </form>
  );
}

export default MainForm;
