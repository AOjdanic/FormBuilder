import { useContext } from "react";
import FormContext from "../context/form-context";

function FormOptions() {
  const { setFormOptions } = useContext(FormContext);
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

      <label
        className="flex justify-between items-center"
        htmlFor="formPadding"
      >
        Form padding (in rem):
        <input
          onChange={(e) =>
            setFormOptions((prev) => {
              return { ...prev, padding: e.target.value + "rem" };
            })
          }
          type="number"
          name="formPadding"
          id="formPadding"
        />
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
          name="FormBoxShadowColor"
          id="FormBoxShadowColor"
        />
      </label>
    </form>
  );
}

export default FormOptions;
