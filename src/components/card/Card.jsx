import { PropTypes } from "prop-types";

export const Card = ({ children, className }) => {
  return (
    <>
      <div className="max-w-full max-h-full flex flex-col">
        <div
          className={`border-2 border-black rounded-xl shadow-[0.6rem_0.6rem_0_rgba(0,0,0,0.8)] ${className} `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
