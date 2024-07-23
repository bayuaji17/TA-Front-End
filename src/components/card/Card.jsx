import { PropTypes } from "prop-types";

export const Card = ({ children, className }) => {
  return (
    <>
      <div className="max-w-full max-h-full flex flex-col">
        <div
          className={`rounded-2xl ${className} border-2 `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
