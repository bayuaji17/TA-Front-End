import { PropTypes } from "prop-types";
export const RadioButton = ({
  label,
  name,
  id,
  value,
  onChange,
  required,
  borderColor,
  className,
}) => {
  return (
    <div className="flex flex-col mt-5 ml-20 font-lato">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="peer hidden"
        required={required}
      />
      <label
        htmlFor={id}
        className={`border-2 ${borderColor} w-96 p-4 rounded-2xl font-semibold text-xl hover:bg-cyan-600 hover:text-white  peer-checked:bg-cyan-600 peer-checked:text-white ${className}`}
      >
        {label}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
