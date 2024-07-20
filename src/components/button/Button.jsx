import { PropTypes } from "prop-types";
export const Button = ({
  label,
  variant,
  width,
  height,
  textColor,
  fontBold,
  onClick,
  type,
  borderRadius,
  className
}) => {
  return (
    <>
      <div className="max-w-full mt-5">
        <button
          className={`${variant} ${borderRadius} text-lg ${width} ${height} font-lato ${textColor} ${fontBold} ${className} `}
          onClick={onClick}
          type={type}
        >
          {label}
        </button>
      </div>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  fontBold: PropTypes.string,
  className: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};
