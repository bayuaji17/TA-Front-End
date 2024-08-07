import { PropTypes } from "prop-types";
export const RadioButton = ({
  label,
  name,
  id,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col font-lato">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="peer hidden"
        required
      />
      <label
        htmlFor={id}
        className={`border-2 border-cyan-600 md:w-64 lg:w-72 p-4 rounded-2xl font-semibold text-sm sm:text-lg md:text-xl hover:bg-cyan-600 hover:text-white  peer-checked:bg-cyan-600 peer-checked:text-white ${className} text-center cursor-pointer`}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
