import { PropTypes } from "prop-types";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/Footer";
export const LayoutQuestion = ({ children }) => {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer/>
    </div>
  );
};

LayoutQuestion.propTypes = {
  children: PropTypes.node.isRequired,
};
