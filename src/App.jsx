import InputBuild from "./components/InputBuild";
import MainForm from "./components/MainForm";

function App() {
  return (
    <>
      <h1 className="text-7xl text-orange-700 p-4 pb-36 text-center">
        Form Builder
      </h1>
      <div className="grid grid-cols-2 items-center justify-center">
        <InputBuild />
        <MainForm />
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
