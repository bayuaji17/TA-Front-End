import { PropTypes } from "prop-types";
export const RadioButton = ({
  label,
  name,
  id,
  value,
  onChange,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  onChange: PropTypes.func,
};
