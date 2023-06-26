import { useContext } from "react";
import InputBuild from "./components/InputBuild";
import MainForm from "./components/MainForm";
import FormContext from "./context/form-context";
import FormOptions from "./components/FormOptions";

function App() {
  const { formFields, setFormFields } = useContext(FormContext);

  return (
    <>
      <h1 className="text-7xl text-orange-700 p-4 pb-36 text-center">
        Form Builder
      </h1>

      <textarea
        onChange={(e) => {
          if (e.target.value === "") {
            return setFormFields([]);
          }
          return setFormFields(JSON.parse(e.target.value));
        }}
        className="block mx-auto mb-20 max-w-lg w-full h-36 resize-none outline-none"
        name="jsonForm"
        id="jsonForm"
        value={JSON.stringify(formFields)}
      ></textarea>
      <div className="grid grid-cols-2 items-center justify-center">
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
