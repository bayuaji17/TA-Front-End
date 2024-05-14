import {
  House,
  Stethoscope,
  Thermometer,
  Users,
  Virus,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div>
      <div className="w-64 h-screen font-lato bg-cyan-500">
        <ul className="p-4 pt-8">
          <li className="text-center mb-14 text-2xl uppercase font-bold p-2 text-white ">
            Sistem Pakar Kesehatan Mental
          </li>
          <Link to={"/dashboard"}>
            <li className="h-14 my-4 py-3  text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-4 font-medium text-white">
                <House size={28} color="white" weight="light" />
                Dashboard
              </span>
            </li>
          </Link>
          <Link to={"/symptom"}>
            <li className="-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-4 font-medium text-white">
                <Thermometer size={28} color="white" weight="light" />
                Symptom
              </span>
            </li>
          </Link>
          <Link to={"/disease"}>
            <li className="-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-4 font-medium text-white">
                <Virus size={28} color="white" weight="light" />
                Disease
              </span>
            </li>
          </Link>
          <Link to={"/rules"}>
            <li className="-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-4 font-medium text-white">
                <Stethoscope size={28} color="white" weight="light" />
                Rules
              </span>
            </li>
          </Link>
          <Link to={"/patient"}>
            <li className="-14 my-4 py-3 text-lg hover:border-2 rounded-3xl px-4 border-black  hover:cursor-pointer transition duration-300 hover:shadow-[0.4rem_0.4rem_0_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-4 font-medium text-white">
                <Users size={28} color="white" weight="light" />
                Patient
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
