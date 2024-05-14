import { PropTypes } from "prop-types";
import { Navbar } from "../../components/navbar/Navbar";
export const LayoutQuestion = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

LayoutQuestion.propTypes = {
  children: PropTypes.node.isRequired,
};
