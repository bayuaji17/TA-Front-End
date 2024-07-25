import {
  House,
  SignOut,
  Stethoscope,
  Thermometer,
  Users,
  Virus,
  WebhooksLogo,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.success("Sign Out Success !");
    navigate("/loginadmin");
  };

  return (
    <aside>
      <div className="w-72 min-h-screen font-lato bg-cyan-500">
        <ul className="p-4 pt-8">
          <li className="text-center mb-14 text-2xl uppercase font-bold p-2 text-white ">
            Sistem Pakar Kesehatan Mental
          </li>
          <Link to={"/dashboard"}>
            <li
              className={`h-14 my-4 py-3  text-lg hover:border-2 rounded-3xl px-4 border-black hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
                location.pathname == "/dashboard"
                  ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
                  : ""
              } `}
            >
              <span className="flex items-center gap-4 font-medium text-white">
                <House size={28} color="white" weight="light" />
                Dashboard
              </span>
            </li>
          </Link>
          <Link to={"/symptom"}>
            <li
              className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
                location.pathname == "/symptom"
                  ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
                  : ""
              }`}
            >
              <span className="flex items-center gap-4 font-medium text-white">
                <Thermometer size={28} color="white" weight="light" />
                Symptom
              </span>
            </li>
          </Link>
          <Link to={"/disease"}>
            <li
              className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
                location.pathname == "/disease"
                  ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
                  : ""
              }`}
            >
              <span className="flex items-center gap-4 font-medium text-white">
                <Virus size={28} color="white" weight="light" />
                Disease
              </span>
            </li>
          </Link>
          <Link to={"/rules"}>
            <li
              className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
                location.pathname == "/rules"
                  ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
                  : ""
              }`}
            >
              <span className="flex items-center gap-4 font-medium text-white">
                <Stethoscope size={28} color="white" weight="light" />
                Rules
              </span>
            </li>
          </Link>
          <Link to={"/relation"}>
            <li
              className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
                location.pathname == "/relation"
                  ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
                  : ""
              }`}
            >
              <span className="flex items-center gap-4 font-medium text-white">
                <WebhooksLogo size={28} color="white" weight="light" />
                Relation
              </span>
            </li>
          </Link>
          {/* <Link to={"/patient"}>
            <li
            className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] ${
              location.pathname == "/patient"
              ? "border-2 border-cyan-800 shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]"
              : ""
              }`}
              >
              <span className="flex items-center gap-4 font-medium text-white">
              <Users size={28} color="white" weight="light" />
                Patient
              </span>
            </li>
            </Link> */}
        </ul>
        <div className="w-72 p-4 pt-8">
          <div
            className={`h-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)] shadow-[0.4rem_0.4rem_0_rgb(22,78,99)]}`}
            onClick={handleSignOut}
          >
            <span className="flex items-center gap-4 font-medium text-white">
              <SignOut size={28} color="white" weight="regular" />
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
