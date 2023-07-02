/* eslint-disable react/prop-types */
function InputBuildBuildingBlock({
  id,
  type = "text",
  label = id.slice(0, 1).toUpperCase() + id.slice(1),
  required = undefined,
}) {
  if (required) {
    return (
      <label className="flex items-center justify-between" htmlFor={id}>
        {label}:
        <input
          className="rounded-sm outline-none"
          required
          type={type}
          id={id}
        />
      </label>
    );
  }

  return (
    <label className="flex items-center justify-between" htmlFor={id}>
      {label}:
      <input className="rounded-sm outline-none" type={type} id={id} />
    </label>
  );
}

export default InputBuildBuildingBlock;
