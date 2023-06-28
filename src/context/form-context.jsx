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
    padding: "3rem 3rem 3rem 3rem",
    boxShadow: "0 0 10px 5px #fff",
    title: "Form Title",
    fontSize: "2.25rem",
    fontWeight: "700",
  });

  const [elementOptions, setElementOptions] = useState({
    padding: "2.5rem 2rem 2.5rem 2rem",
  });

  const [labelOptions, setLabelOptions] = useState({
    fontSize: "1.25rem",
    fontWeight: "600",
  });

  const [inputOptions, setInputOptions] = useState({
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    padding: "0.5rem 1rem 0.5rem 1rem",
    fontSize: "1.5rem",
    borderRadius: "0.5rem",
    accentColor: "#c2410c",
  });

  const fields = {
    formFields,
    setFormFields,
    formOptions,
    setFormOptions,
    elementOptions,
    setElementOptions,
    labelOptions,
    setLabelOptions,
    inputOptions,
    setInputOptions,
  };

  return <FormContext.Provider value={fields}>{children}</FormContext.Provider>;
};

export default FormContext;
