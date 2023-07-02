import { GithubLogo } from "@phosphor-icons/react";

function MainHeading() {
  return (
    <>
      <h1 className="p-4 pb-36 text-center text-7xl text-red-900">
        Form Builder
      </h1>
      <GithubLogo
        className="absolute right-64 top-12 cursor-pointer rounded-full bg-red-900 p-2"
        size={40}
        color="#0f172a"
        weight="bold"
        onClick={() =>
          window.open("https://github.com/AOjdanic/FormBuilder", "_blank")
        }
      />
    </>
  );
}

export default MainHeading;
