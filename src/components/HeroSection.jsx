import { Button } from "./button/Button";
import doctorSVG from "../assets/svg/doctor_illustration.svg";
export const HeroSection = () => {
  return (
    <div className="container mx-auto font-lato">
      <h1 className="text-center py-16 font-bold text-3xl  md:text-5xl lg:text-6xl text-cyan-600">
        Sistem Pakar Kesehatan Mental
      </h1>
      <div className=" md:flex ">
        <div className=" w-[90dvw] md:w-4/6 ml-3 font-medium">
          <h1 className="text-cyan-500 text-3xl py-6">
            Periksa Kesehatan Mental Anda secara <strong>Gratis</strong>
          </h1>
          <p className="md:w-3/4 text-cyan-900 text-lg font-medium py-5">
            Dapatkan Dukungan Kesehatan Mental untuk Meningkatkan Kualitas
            Hidupmu. Mulai Cek Sekarang!
          </p>
          <Button
            label={"Cek Kesehatan Mentalmu Sekarang !"}
            variant={"bg-cyan-700"}
            width={"w-[20.5rem]"}
            height={"h-11"}
            textColor={"text-white"}
            fontBold={"font-bold"}
          />
        </div>
        <div className="md:w-2/6">
          <img src={doctorSVG} alt="" className=" w-[95dvw] h-80 md:w-[30-rem]" />
        </div>
      </div>
    </div>
  );
};
