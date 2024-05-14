import { PropTypes } from "prop-types";
export const Button = ({ label, variant,width, height,textColor,fontBold }) => {
  return (
    <>
      <div>
        <button
          className={`${variant} rounded-full text-lg ${width} ${height} font-lato ${textColor} ${fontBold} `}
        >
          {label}
        </button>
      </div>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textColor:PropTypes.string.isRequired,
  fontBold:PropTypes.string.isRequired
};
