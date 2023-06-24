/* eslint-disable react/prop-types */
function InputComponent({
  props: {
    id,
    label,
    placeholder,
    type,
    required,
    min,
    max,
    step,
    radios,
    question,
  },
}) {
  if (type === "radio" || type === "checkbox") {
    return (
      <article className="bg-slate-900 flex flex-col px-8 py-10 gap-4">
        <p className="text-orange-700 text-xl font-semibold " htmlFor={id}>
          {question}
        </p>
        <div className="flex justify-between flex-wrap">
          {radios.map((el) => (
            <label
              className="text-orange-700 text-xl font-semibold flex items-center justify-end gap-2 mb-4 basis-1/5"
              key={el}
            >
              {el}
              <input
                className={`bg-slate-50 py-2  h-6 w-6 cursor-pointer text-slate-900 text-2xl outline-none rounded-lg accent-orange-700`}
                type={type}
                id={el}
                name={label}
                {...required}
              />
            </label>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="bg-slate-900 flex flex-col px-8 py-10 gap-4">
      <label className="text-orange-700 text-xl font-semibold " htmlFor={id}>
        {label}
      </label>
      <input
        className={`bg-slate-50 py-2 ${type !== "range" ? "px-4" : ""} ${
          type === "submit" || type === "reset" ? "cursor-pointer" : ""
        } text-slate-900 text-2xl outline-none rounded-lg`}
        type={type}
        id={id}
        placeholder={placeholder}
        name={label}
        {...required}
        min={min}
        max={max}
        step={step}
      />
    </article>
  );
}

export default InputComponent;
