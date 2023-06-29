import { useContext, useState } from "react";
import FormContext from "../context/form-context";
import BuildingBlock from "./building blocks/BuildingBlock";
import FontWeightBuildingBlock from "./building blocks/FontWeightBuildingBlock";
import PaddingBoxShadowBuildingBlock from "./building blocks/PaddingBoxShadowBuildingBlock";

function FormOptions() {
  const {
    setFormOptions,
    setElementOptions,
    setLabelOptions,
    setInputOptions,
  } = useContext(FormContext);

  const [showFormOptions, setShowFormOptions] = useState(true);
  const [showInputOptions, setShowInputOptions] = useState(true);

  const formOptionsProps = [
    {
      id: "formTitle",
      fn: setFormOptions,
      cssRule: "title",
      type: "text",
      label: "Form title",
      units: "",
    },
    {
      id: "formColor",
      fn: setFormOptions,
      cssRule: "backgroundColor",
      type: "color",
      label: "Form background color",
      units: "",
    },
    {
      id: "formTextColor",
      fn: setFormOptions,
      cssRule: "color",
      type: "color",
      label: "Form text color",
      units: "",
    },
    {
      id: "formFontSize",
      fn: setFormOptions,
      cssRule: "fontSize",
      type: "number",
      label: "Form font size (in rem)",
      units: "rem",
    },
    {
      id: "formFontWeight",
      fn: setFormOptions,
      name: "formFontWeight",
      values: ["300", "400", "600", "700"],
      label: "Form font weight",
      isFontWeight: true,
    },
    {
      id: "formMaxWidth",
      fn: setFormOptions,
      cssRule: "maxWidth",
      type: "number",
      label: "Form max width (in rem)",
      units: "rem",
    },
    {
      id: "formPadding",
      fn: setFormOptions,
      label: "Form padding (in rem)",
      ids: [
        "formPaddingTop",
        "formPaddingRight",
        "formPaddingBottom",
        "formPaddingLeft",
      ],
      units: "rem",
      cssRule: "padding",
      isPBS: true,
    },
    {
      id: "formBorderRadius",
      fn: setFormOptions,
      cssRule: "borderRadius",
      type: "number",
      label: "Form border radius (in rem)",
      units: "rem",
    },
    {
      id: "formBoxShadow",
      fn: setFormOptions,
      label: "Form box shadow (in px)",
      ids: [
        "formBoxShadowX",
        "formBoxShadowY",
        "formBoxShadowBlur",
        "formBoxShadowSpread",
        "formBoxShadowColor",
      ],
      units: "px",
      cssRule: "boxShadow",
      isPBS: true,
    },
  ];

  const elementOptionsProps = [
    {
      id: "elementPadding",
      fn: setElementOptions,
      label: "Element padding (in rem)",
      ids: [
        "elementPaddingTop",
        "elementPaddingRight",
        "elementPaddingBottom",
        "elementPaddingLeft",
      ],
      units: "rem",
      cssRule: "padding",
      isPBS: true,
    },
    {
      id: "labelFontSize",
      fn: setLabelOptions,
      cssRule: "fontSize",
      type: "number",
      label: "Label font size (in rem)",
      units: "rem",
    },
    {
      id: "labelFontWeight",
      fn: setLabelOptions,
      name: "labelFontWeight",
      values: ["300", "400", "600", "700"],
      label: "Label font weight",
      isFontWeight: true,
    },
    {
      id: "inputFontSize",
      fn: setInputOptions,
      cssRule: "fontSize",
      type: "number",
      label: "Input font size (in rem)",
      units: "rem",
    },
    {
      id: "inputTextColor",
      fn: setInputOptions,
      cssRule: "color",
      type: "color",
      label: "Input text color",
      units: "",
    },
    {
      id: "inputBackgroundColor",
      fn: setInputOptions,
      cssRule: "backgroundColor",
      type: "color",
      label: "Input background color",
      units: "",
    },
    {
      id: "inputPadding",
      fn: setInputOptions,
      label: "Input padding (in rem)",
      ids: [
        "inputPaddingTop",
        "inputPaddingRight",
        "inputPaddingBottom",
        "inputPaddingLeft",
      ],
      units: "rem",
      cssRule: "padding",
      isPBS: true,
    },
    {
      id: "inputBorderRadius",
      fn: setInputOptions,
      cssRule: "borderRadius",
      type: "number",
      label: "Input border radius (in rem)",
      units: "rem",
    },
    {
      id: "inputAccentColor",
      fn: setInputOptions,
      cssRule: "accentColor",
      type: "color",
      label: "Accent color",
      units: "",
    },
  ];

  return (
    <form className="mx-auto flex w-96 flex-col gap-5 p-4 font-bold text-orange-700">
      <div className="flex justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            return setShowFormOptions(!showFormOptions);
          }}
          className="rounded-lg bg-orange-700 p-2 text-slate-900"
        >
          {`${showFormOptions === true ? "Hide" : "Show"} form options`}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            return setShowInputOptions(!showInputOptions);
          }}
          className="rounded-lg bg-orange-700 p-2 text-slate-900"
        >
          {`${showInputOptions === true ? "Hide" : "Show"} input options`}
        </button>
      </div>
      {showFormOptions &&
        formOptionsProps.map((propsObj) => {
          if (propsObj.isFontWeight) {
            return <FontWeightBuildingBlock key={propsObj.id} {...propsObj} />;
          }

          if (propsObj.isPBS) {
            return (
              <PaddingBoxShadowBuildingBlock key={propsObj.id} {...propsObj} />
            );
          }

          return <BuildingBlock key={propsObj.id} {...propsObj} />;
        })}

      {showInputOptions &&
        elementOptionsProps.map((propsObj) => {
          if (propsObj.isFontWeight) {
            return <FontWeightBuildingBlock key={propsObj.id} {...propsObj} />;
          }

          if (propsObj.isPBS) {
            return (
              <PaddingBoxShadowBuildingBlock key={propsObj.id} {...propsObj} />
            );
          }

          return <BuildingBlock key={propsObj.id} {...propsObj} />;
        })}
    </form>
  );
}

export default FormOptions;
