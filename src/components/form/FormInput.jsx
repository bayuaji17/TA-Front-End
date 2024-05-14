import { PropTypes } from "prop-types";
export const FormInput = ({ label, type, name, placeholder,required }) => {
  return (
    <div className="flex flex-col font-mono">
      <label htmlFor={label}>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
          {name}
        </span>
      </label>
      <input
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        className="border-b-2 border-black my-1 px-2 focus:outline-none focus:border-b-2 focus:border-b-red-600 bg-transparent w-full"
        required={required}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
