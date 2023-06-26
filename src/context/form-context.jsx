/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const [formFields, setFormFields] = useState([]);
  const [formOptions, setFormOptions] = useState({
    backgroundColor: "#0f172a",
    color: "#c2410c",
    borderRadius: "1.5rem",
    maxWidth: "48rem",
    padding: "3rem",
    boxShadow: "0 0 10px 5px #fff",
    title: "Form Title",
    fontSize: "2.25rem",
    fontWeight: "700",
  });

  const fields = {
    formFields,
    setFormFields,
    formOptions,
    setFormOptions,
  };

  return <FormContext.Provider value={fields}>{children}</FormContext.Provider>;
};

export default FormContext;
