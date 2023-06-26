import { useContext } from "react";
import FormContext from "../context/form-context";
import InputComponent from "./InputComponent";

function MainForm() {
  const { formFields, formOptions } = useContext(FormContext);

  return (
    <form
      id="mainForm"
      style={{
        backgroundColor: formOptions.backgroundColor,
        color: formOptions.color,
        borderRadius: formOptions.borderRadius,
        maxWidth: formOptions.maxWidth,
        padding: formOptions.padding,
        boxShadow: formOptions.boxShadow,
      }}
    >
      <h2 className="text-4xl font-bold">
        {formOptions.title || "Form Title"}
      </h2>
      {formFields.map((field) => (
        <InputComponent key={field.id} props={field} />
      ))}
    </form>
  );
}

export default MainForm;
