import { PropTypes } from "prop-types";
import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/Footer";

export const LayoutResult = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

LayoutResult.propTypes = {
  children: PropTypes.node.isRequired,
};
