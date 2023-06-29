/* eslint-disable react/prop-types */
function BuildingBlock({ id, fn, cssRule, units, type, label }) {
  return (
    <label className="flex items-center justify-between" htmlFor={id}>
      {label}:
      <input
        onChange={(e) =>
          fn((prev) => {
            const updatedCssRule = { [cssRule]: e.target.value + units };
            console.log(updatedCssRule);
            return { ...prev, ...updatedCssRule };
          })
        }
        type={type}
        name={id}
        id={id}
      />
    </label>
  );
}

export default BuildingBlock;
