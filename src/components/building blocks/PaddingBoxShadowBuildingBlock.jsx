/* eslint-disable react/prop-types */
function PaddingBoxShadowBuildingBlock({ ids, fn, label, units, cssRule }) {
  return (
    <label className="flex items-center justify-between">
      {label}:
      <div className="flex max-w-[262px] gap-4">
        {ids.map((id, i) => (
          <input
            key={id}
            className="max-w-[40px] rounded-sm outline-none"
            onChange={(e) =>
              fn((prev) => {
                const values = prev[cssRule].split(" ");

                values.splice(i, 1, e.target.value + `${i === 4 ? "" : units}`);
                return {
                  ...prev,
                  [cssRule]: values.join(" "),
                };
              })
            }
            type={i === 4 ? "color" : "number"}
            id={id}
          />
        ))}
      </div>
    </label>
  );
}

export default PaddingBoxShadowBuildingBlock;
