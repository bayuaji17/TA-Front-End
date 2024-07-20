// import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  console.log(location);
  const pathName = location.pathname.replace(/^\//, "");
  const dateNow = new Date();
  const gmt7Now = new Date(
    dateNow.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
  );
  const formattedDate = gmt7Now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="h-20 w-full bg-cyan-600 shadow font-lato">
        <div className="flex flex-row justify-between items-center h-full px-10">
          <h1 className="flex items-center h-full font-bold tracking-wider uppercase">
            <span className="text-white text-2xl">{pathName}</span>
          </h1>
          <h2 className="text-xl font-medium text-white">{formattedDate}</h2>
        </div>
      </div>
    </>
  );
};

// Navbar.propTypes = {
//   pathPages: PropTypes.string,
// };
