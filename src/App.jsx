import { useContext } from "react";
import InputBuild from "./components/InputBuild";
import MainForm from "./components/MainForm";
import FormContext from "./context/form-context";
import FormOptions from "./components/FormOptions";

function App() {
  const { formFields, setFormFields } = useContext(FormContext);

  return (
    <>
      <h1 className="p-4 pb-36 text-center text-7xl text-red-900">
        Form Builder
      </h1>

      <textarea
        onChange={(e) => {
          if (e.target.value === "") {
            return setFormFields([]);
          }
          return setFormFields(JSON.parse(e.target.value));
        }}
        className="mx-auto mb-20 block h-36 w-full max-w-lg resize-none outline-none"
        name="jsonForm"
        id="jsonForm"
        value={JSON.stringify(formFields)}
      ></textarea>
      <div className="grid grid-cols-3 items-start justify-center">
        <InputBuild />
        <MainForm />
        <FormOptions />
        {/* <button
          onClick={() => {
            console.log(document.getElementById("mainForm").innerHTML);
          }}
        >
          Get HTML
        </button> */}
      </div>
    </>
  );
}
export default App;
