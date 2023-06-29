/* eslint-disable react/prop-types */
function FontWeightBuildingBlock({ values, fn, name, label }) {
  return (
    <label className="flex items-center justify-between">
      {label}:
      {values.map((value) => (
        <span key={value}>
          {value}
          <input
            onChange={(e) =>
              fn((prev) => {
                return { ...prev, fontWeight: e.target.value };
              })
            }
            type="radio"
            name={name}
            id={name + value}
            value={value}
          />
        </span>
      ))}
    </label>
  );
}

export default FontWeightBuildingBlock;
