export const CustomCheckbox = ({ value, label, state, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        className="rounded text-pink-500"
        value={value}
        checked={value == state}
        onChange={(e) => onChange(e.target.value)}
      />
      {label}
    </label>
  );
};
