export default function renderInput(
  name,
  label,
  type,
  handleOnChange,
  formData
) {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        value={formData[name] || ""}
        type={type || "text"}
        onChange={handleOnChange}
      />
    </div>
  );
}
