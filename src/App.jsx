import InputBuild from "./components/InputBuild";
import MainForm from "./components/MainForm";
import FormOptions from "./components/FormOptions";
import JsonFormFields from "./components/JsonFormFields";
import RawHtml from "./components/RawHtml";
import MainHeading from "./components/MainHeading";

function App() {
  return (
    <>
      <header>
        <MainHeading />
      </header>
      <main>
        <div className="mb-20 grid grid-cols-1 items-start justify-center gap-y-40 px-4 2xl:grid-cols-3">
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
