import { PropTypes } from "prop-types";
export const FormInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  height,
  width,
  value,
  onChange,
  textColor,
}) => {
  return (
    <div className="flex flex-col font-mono my-3">
      <label htmlFor={label}>
        <span
          className={`text-base sm:text-lg md:text-xl lg:text-2xl ${textColor}`}
        >
          {name}
        </span>
      </label>
      <input
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        className={`border-2 rounded-lg border-slate-700 my-1 px-4 focus:outline-none focus:border-2 focus:border-purple-700 bg-transparent shadow-sm shadow-purple-600 ${height} ${width} placeholder:text-gray-500 font-medium text-lg tracking-wide placeholder:text-sm`}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
