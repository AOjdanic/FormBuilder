import InputBuild from "./components/InputBuild";
import MainForm from "./components/MainForm";
import FormOptions from "./components/FormOptions";
import JsonFormFields from "./components/JsonFormFields";
import RawHtml from "./components/RawHtml";

function App() {
  return (
    <>
      <header>
        <h1 className="p-4 pb-36 text-center text-7xl text-red-900">
          Form Builder
        </h1>
      </header>
      <main>
        <div className="mb-20 grid grid-cols-3 items-start justify-center gap-y-40">
          <InputBuild />
          <MainForm />
          <FormOptions />
          <JsonFormFields />
          <RawHtml />
        </div>
      </main>
    </>
  );
}
export default App;
