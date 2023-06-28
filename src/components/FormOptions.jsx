import { useContext } from "react";
import FormContext from "../context/form-context";

function FormOptions() {
  const {
    setFormOptions,
    setElementOptions,
    setLabelOptions,
    setInputOptions,
  } = useContext(FormContext);
  return (
    <form className="mx-auto text-orange-700 font-bold flex flex-col gap-5 w-96 p-4">
      <label className="flex justify-between items-center" htmlFor="formTitle">
        Form title:
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
          type="text"
          name="formTitle"
          id="formTitle"
        />
      </label>

      <label className="flex justify-between items-center" htmlFor="formColor">
        Form background color:
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, backgroundColor: e.target.value };
            })
          }
          type="color"
          name="formColor"
          id="formColor"
        />
      </label>
      <label
        className="flex justify-between items-center"
        htmlFor="formTextColor"
      >
        Form text color:
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, color: e.target.value };
            })
          }
          type="color"
          name="formTextColor"
          id="formTextColor"
        />
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="formFontSize"
      >
        Form font size (in rem):
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, fontSize: e.target.value + "rem" };
            })
          }
          type="number"
          name="formFontSize"
          id="formFontSize"
        />
      </label>

      <label className="flex justify-between items-center">
        Form font weight:
        <span>
          300
          <input
            onChange={(e) =>
              setFormOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="formFontWeight"
            id="formFontWeight300"
            value={"300"}
          />
        </span>
        <span>
          400
          <input
            onChange={(e) =>
              setFormOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="formFontWeight"
            id="formFontWeight400"
            value={"400"}
          />
        </span>
        <span>
          500
          <input
            onChange={(e) =>
              setFormOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="formFontWeight"
            id="formFontWeight500"
            value={"500"}
          />
        </span>
        <span>
          600
          <input
            onChange={(e) =>
              setFormOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="formFontWeight"
            id="formFontWeight600"
            value={"600"}
          />
        </span>
        <span>
          700
          <input
            onChange={(e) =>
              setFormOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="formFontWeight"
            id="formFontWeight700"
            value={"700"}
          />
        </span>
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="formBorderRadius"
      >
        Form border radius (in rem):
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, borderRadius: e.target.value + "rem" };
            })
          }
          type="number"
          name="formBorderRadius"
          id="formBorderRadius"
        />
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="formMaxWidth"
      >
        Form max width (in rem):
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, maxWidth: e.target.value + "rem" };
            })
          }
          type="number"
          name="formMaxWidth"
          id="formMaxWidth"
        />
      </label>
      {/* paddings */}
      <label className="flex justify-between items-center">
        Form padding (in rem):
        <div className="flex max-w-[212px] gap-4">
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(0, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="formPaddingTop"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(1, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="formPaddingRight"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(2, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="formPaddingBottom"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(3, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="formPaddingLeft"
          />
        </div>
      </label>
      {/* box shadow generator */}

      <label
        className="flex justify-between items-center"
        htmlFor="formBoxShadow"
      >
        Form box shadow (in px):
        <div className="flex max-w-[212px] gap-4">
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.boxShadow.split(" ");

                values.splice(0, 1, e.target.value + "px");

                return {
                  ...prev,
                  boxShadow: values.join(" "),
                };
              })
            }
            type="number"
            name="formBoxShadow"
            id="formBoxShadowX"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.boxShadow.split(" ");

                values.splice(1, 1, e.target.value + "px");

                return {
                  ...prev,
                  boxShadow: values.join(" "),
                };
              })
            }
            type="number"
            name="formBoxShadow"
            id="formBoxShadowY"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.boxShadow.split(" ");

                values.splice(2, 1, e.target.value + "px");

                return {
                  ...prev,
                  boxShadow: values.join(" "),
                };
              })
            }
            type="number"
            name="formBoxShadow"
            id="formBoxShadowBlur"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setFormOptions((prev) => {
                const values = prev.boxShadow.split(" ");

                values.splice(3, 1, e.target.value + "px");

                return {
                  ...prev,
                  boxShadow: values.join(" "),
                };
              })
            }
            type="number"
            name="formBoxShadow"
            id="formBoxShadowSpread"
          />
        </div>
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="FormBoxShadowColor"
      >
        Form box shadow color:
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              const values = prev.boxShadow.split(" ");

              values.splice(4, 1, e.target.value);

              return {
                ...prev,
                boxShadow: values.join(" "),
              };
            })
          }
          type="color"
          name="FormBoxShadow"
          id="FormBoxShadowColor"
        />
      </label>

      {/* article paddings */}

      <label className="flex justify-between items-center">
        Element padding (in rem):
        <div className="flex max-w-[212px] gap-4">
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setElementOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(0, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="elementPaddingTop"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setElementOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(1, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="elementPaddingRight"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setElementOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(2, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="elementPaddingBottom"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setElementOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(3, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="elementPaddingLeft"
          />
        </div>
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="labelFontSize"
      >
        Label font size (in rem):
        <input
          onChange={(e) =>
            setLabelOptions((prev) => {
              return { ...prev, fontSize: e.target.value + "rem" };
            })
          }
          type="number"
          name="labelFontSize"
          id="labelFontSize"
        />
      </label>

      <label className="flex justify-between items-center">
        Label font weight:
        <span>
          300
          <input
            onChange={(e) =>
              setLabelOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="labelFontWeight"
            id="labelFontWeight300"
            value={"300"}
          />
        </span>
        <span>
          400
          <input
            onChange={(e) =>
              setLabelOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="labelFontWeight"
            id="labelFontWeight400"
            value={"400"}
          />
        </span>
        <span>
          500
          <input
            onChange={(e) =>
              setLabelOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="labelFontWeight"
            id="labelFontWeight500"
            value={"500"}
          />
        </span>
        <span>
          600
          <input
            onChange={(e) =>
              setLabelOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="labelFontWeight"
            id="labelFontWeight600"
            value={"600"}
          />
        </span>
        <span>
          700
          <input
            onChange={(e) =>
              setLabelOptions((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name="labelFontWeight"
            id="labelFontWeight700"
            value={"700"}
          />
        </span>
      </label>

      {/* set input options */}

      <label
        className="flex justify-between items-center"
        htmlFor="inputBackgroundColor"
      >
        Input background color:
        <input
          onChange={(e) =>
            setInputOptions((prev) => {
              return { ...prev, backgroundColor: e.target.value };
            })
          }
          type="color"
          name="inputBackgroundColor"
          id="inputBackgroundColor"
        />
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="inputTextColor"
      >
        Input text color:
        <input
          onChange={(e) =>
            setInputOptions((prev) => {
              return { ...prev, color: e.target.value };
            })
          }
          type="color"
          name="inputTextColor"
          id="inputTextColor"
        />
      </label>

      <label className="flex justify-between items-center">
        Input padding (in rem):
        <div className="flex max-w-[212px] gap-4">
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setInputOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(0, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="inputPaddingTop"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setInputOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(1, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="inputPaddingRight"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setInputOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(2, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="inputPaddingBottom"
          />
          <input
            className="max-w-[40px]"
            onChange={(e) =>
              setInputOptions((prev) => {
                const values = prev.padding.split(" ");

                values.splice(3, 1, e.target.value + "rem");

                return {
                  ...prev,
                  padding: values.join(" "),
                };
              })
            }
            type="number"
            id="inputPaddingLeft"
          />
        </div>
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="inputFontSize"
      >
        Input font size (in rem):
        <input
          onChange={(e) =>
            setInputOptions((prev) => {
              return { ...prev, fontSize: e.target.value + "rem" };
            })
          }
          type="number"
          name="inputFontSize"
          id="inputFontSize"
        />
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="inputBorderRadius"
      >
        Input border radius (in rem):
        <input
          onChange={(e) =>
            setInputOptions((prev) => {
              return { ...prev, borderRadius: e.target.value + "rem" };
            })
          }
          type="number"
          name="inputBorderRadius"
          id="inputBorderRadius"
        />
      </label>

      <label
        className="flex justify-between items-center"
        htmlFor="accentColor"
      >
        Accent color:
        <input
          onChange={(e) =>
            setInputOptions((prev) => {
              return { ...prev, accentColor: e.target.value };
            })
          }
          type="color"
          name="accentColor"
          id="accentColor"
        />
      </label>
    </form>
  );
}

export default FormOptions;
