/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const [formFields, setFormFields] = useState([]);

  const fields = {
    formFields,
    setFormFields,
  };

  return <FormContext.Provider value={fields}>{children}</FormContext.Provider>;
};

export default FormContext;
