// import doctorSVG from "../assets/svg/doctor_illustration.svg";
import { CTASection } from "../components/CTASection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSection } from "../components/HeroSection";
// import { Button } from "../components/button/Button";
export const Home = () => {
  return (
    <div className="">
      <HeroSection/>
      <FeatureSection/>
      <CTASection/>
    </div>
    // <div className="container mx-auto h-screen font-lato">
    //   <h1 className="text-center py-16 font-bold text-6xl text-cyan-500">
    //     Sistem Pakar Kesehatan Mental
    //   </h1>
    //   <div className="flex ">
    //     <div className="w-4/6 ml-3 font-bold">
    //       <h1 className="text-cyan-500 text-3xl py-6">
    //         Periksa Kesehatan Mental Anda secara <strong>Gratis</strong>
    //       </h1>
    //       <p className="w-3/4 text-black text-lg font-medium py-5">
    //         Dapatkan Dukungan Kesehatan Mental untuk Meningkatkan Kualitas
    //         Hidupmu. Mulai Cek Sekarang!
    //       </p>
    //       <Button
    //         label={"Cek Kesehatan Mentalmu Sekarang !"}
    //         variant={"bg-cyan-700"}
    //         width={"w-[20.5rem]"}
    //         height={"h-11"}
    //         textColor={"text-white"}
    //       />
    //     </div>
    //     <div className="w-2/6">
    //       <img src={doctorSVG} alt="" className="w-[30-rem]" />
    //     </div>
    //   </div>
    // </div>
  );
};
