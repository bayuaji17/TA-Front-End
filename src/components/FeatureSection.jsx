import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faFileArrowDown,
  faFileShield,
  faSackXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FeatureSection = () => {
  return (
    <div className="bg-cyan-500 lg:max-h-[40rem]">
      <div className="container mx-auto h-[36rem] lg:h-[30rem] font-lato">
        <h1 className="text-center font-bold text-4xl text-white py-10 mt-10 uppercase">
          Fitur
        </h1>
        <div className="lg:flex max-w-full my-5">
          <div className="lg:w-1/2">
            <div className="flex items-center lg:justify-start lg:gap-10 lg:ml-20 mb-10">
              <FontAwesomeIcon
                icon={faFileShield}
                color="white"
                className="text-6xl lg:text-8xl w-2/5"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                Privasi terjaga
              </h3>
            </div>
            <div className="flex items-center lg:justify-start lg:gap-10 lg:ml-20 mb-10">
              <FontAwesomeIcon
                icon={faClock}
                color="white"
                className="text-6xl lg:text-8xl w-2/5"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                Hanya 10 Menit
              </h3>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center lg:justify-start lg:gap-10 lg:ml-20 mb-10">
              <FontAwesomeIcon
                icon={faSackXmark}
                color="white"
                className="text-6xl lg:text-8xl w-2/5"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                Gratis
              </h3>
            </div>
            <div className="flex items-center lg:justify-start lg:gap-10 lg:ml-20 mb-10">
              <FontAwesomeIcon
                icon={faFileArrowDown}
                color="white"
                className="text-6xl lg:text-8xl w-2/5"
              />
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                Hasil Instan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
