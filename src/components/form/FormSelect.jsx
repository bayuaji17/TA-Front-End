import { PropTypes } from "prop-types";

export const FormSelect = ({
  label,
  name,
  onChange,
  options,
  selectedValue,
  defaulValue,
  required
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="py-2 sm:text-lg md:text-xl lg:text-2xl">
        {name}
      </label>
      <div className="relative">
        <select
          name={name}
          id={label}
          className="w-full h-12 rounded-xl px-5 border-2 border-slate-700 focus:outline-none focus:border-2 focus:border-purple-700 bg-transparent shadow-sm shadow-purple-600 placeholder:text-gray-500 "
          onChange={onChange}
          value={selectedValue}
          defaultValue={defaulValue}
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaulValue:PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  required: PropTypes.bool
};
