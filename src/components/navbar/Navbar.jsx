import { useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname.replace(/^\//, "");

  let classParent;
  let classBrand;
  if (pathName === "questionnaire" || pathName === "result") {
    classParent = "justify-center md:justify-between md:px-20 ";
    classBrand = "";
  } else {
    classParent = "justify-end md:px-20";
    classBrand = "hidden";
  }

  return (
    <div className="h-20 w-full bg-cyan-600 shadow font-lato">
      <div className={`flex flex-row items-center ${classParent} h-full`}>
        <h1 className={`font-bold tracking-wider uppercase ${classBrand}`}>
          <a href="/">
            <span className="text-white text-2xl hidden sm:flex">Sistem Pakar</span>
          </a>
        </h1>
        <h1 className="font-bold tracking-wider uppercase">
          <span className="text-white text-2xl">{pathName}</span>
        </h1>
      </div>
    </div>
  );
};
