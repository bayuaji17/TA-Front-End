import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { Card } from "../../../components/card/Card";
import { LayoutResult } from "./LayoutResult";

export const ResultQuestions = () => {
  const navigate = useNavigate();

  const result = JSON.parse(localStorage.getItem("resultUsers"));

  if (result == null) {
    navigate("/questionnaire");
  }

  const handleDeleteLocalStorage = () => {
    localStorage.removeItem("resultUsers");
    navigate("/questionnaire");
  };
  return (
    <div>
      <LayoutResult>
        <h1 className="text-5xl text-center mt-5 font-bold">Hasil Diagnosa</h1>
        <div className="flex flex-col w-full items-center pt-10">
          <Card className={"w-[40rem] bg-cyan-600 border-none shadow-lg"}>
            <div>
              <div>
                <h3 className=" pl-10 text-3xl font-semibold pt-5 text-white">
                  Biodata Pasien
                </h3>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className=" px-10 text-lg font-medium leading-6 text-white">
                      Nama
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                      {result.data.nama}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className=" px-10 text-lg font-medium leading-6 text-white">
                      Umur
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                      {result.data.umur + "\tTahun"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className=" px-10 text-lg font-medium leading-6 text-white">
                      Jenis Kelamin
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                      {result.data.jenisKelamin}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col items-center md:flex md:flex-row justify-center gap-8 md:gap-16 pt-10 font-inter">
          {result?.results?.map((disease, index) => {
            let bgColor;
            if (disease.penyakit == "P01") {
              bgColor = "bg-slate-300";
            } else if (disease.penyakit == "P02") {
              bgColor = "bg-[#FFCF81]";
            } else {
              bgColor = "bg-[#D45079]";
            }
            const CF = disease.combinedCF * 100;
            const cfValue = Math.round(CF);

            let riskLevel;
            if (cfValue <= 25) {
              riskLevel = "Tidak Berisiko";
            } else if (cfValue <= 50) {
              riskLevel = "Risiko Rendah";
            } else if (cfValue <= 75) {
              riskLevel = "Risiko Sedang";
            } else {
              riskLevel = "Risiko Tinggi";
            }
            return (
              <div key={index}>
                <Card
                  className={`w-72 h-80 ${bgColor} text-black border-none shadow-sm md:shadow-2xl`}
                >
                  <h1 className="text-6xl text-center py-5 font-semibold border-b-2 border-cyan-700">
                    {disease.nama_penyakit}
                  </h1>
                  <p className="italic text-center pt-3">Tingkat Keyakinan</p>
                  <p className="text-7xl font-bold text-center py-6 after:content-['%'] ">
                    {cfValue}
                  </p>
                  <h1 className="text-center border-t-2 py-4 border-cyan-700">
                    {riskLevel}
                  </h1>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center py-10 ">
          <Button
            label={"Diagnosa Ulang"}
            variant={"bg-cyan-500"}
            width={"w-52"}
            height={"h-[3rem]"}
            fontBold={"font-bold"}
            textColor={"text-white"}
            borderRadius={"rounded-xl"}
            onClick={handleDeleteLocalStorage}
          />
        </div>
      </LayoutResult>
    </div>
  );
};
