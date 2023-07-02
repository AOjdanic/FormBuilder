import { GithubLogo } from "@phosphor-icons/react";

function MainHeading() {
  return (
    <>
      <h1 className="p-4 pb-36 text-center text-4xl text-red-900 md:text-7xl">
        Form Builder
      </h1>
      <GithubLogo
        className="absolute right-1/2 top-32 translate-x-1/2 cursor-pointer rounded-full bg-red-900 p-2 lg:right-64 lg:top-12"
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
