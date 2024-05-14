import { ClockCountdown, FileArrowDown, FileLock } from "@phosphor-icons/react";
import freeMoney from "../assets/svg/free_money.svg";
export const FeatureSection = () => {
  return (
    <div className="bg-cyan-500 max-h-[36rem]">
      <div className="container mx-auto h-[30rem] font-lato">
        <h1 className="text-center font-bold text-4xl text-white py-10 mt-10">
          Our Feature
        </h1>
        <div className="flex max-w-full my-5">
          <div className="w-1/2">
            <div className="flex items-center justify-start gap-10 ml-20 mb-10">
              <FileLock size={100} color="white" weight="light" />
              <h3 className="text-3xl font-semibold text-white">
                Privasi terjaga
              </h3>
            </div>
            <div className="flex items-center justify-start gap-10 ml-20 mb-10">
              <ClockCountdown size={100} color="white" weight="light" />
              <h3 className="text-3xl font-semibold text-white">
                Hanya 10 Menit
              </h3>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center justify-start gap-10 ml-20 mb-10">
              <img src={freeMoney} alt="" />
              <h3 className="text-3xl font-semibold text-white">Gratis</h3>
            </div>
            <div className="flex items-center justify-start gap-10 ml-20 mb-10">
            <FileArrowDown size={100} color="#f2f2f2" weight="light" />
              <h3 className="text-3xl font-semibold text-white">Hasil Instan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
