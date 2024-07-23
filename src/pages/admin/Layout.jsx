import { PropTypes } from "prop-types";
import { Sidebar } from "../../components/sidebar/Sidebar";
export const Layout = ({ children }) => {
  return (
      <div className="max-h-screen flex">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
