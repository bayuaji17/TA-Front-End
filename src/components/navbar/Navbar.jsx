import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname.replace(/^\//, "");

  return (
    <>
      <div className="h-20 w-full bg-cyan-600 shadow font-lato">
        <div className="flex flex-row justify-between items-center h-full px-10">
          <h1 className="flex items-center h-full font-bold tracking-wider uppercase">
            <span className="text-white text-2xl">{pathName}</span>
          </h1>
        </div>
      </div>
    </>
  );
};