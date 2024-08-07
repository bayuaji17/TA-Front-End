import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/Button";
import { Card } from "../../../components/card/Card";
import { LayoutResult } from "./LayoutResult";
import ResultUSerPDF from "../../../components/pdf/ResultUserPDF";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const ResultQuestions = () => {
  const navigate = useNavigate();
  const reportUserRef = useRef();

  const handlePrintReportUser = useReactToPrint({
    content: () => reportUserRef.current,
    documentTitle: "Laporan Diagnosa Awal",
  });

  const result = JSON.parse(localStorage.getItem("resultUsers"));

  useEffect(() => {
    if (result === null) {
      return navigate("/questionnaire");
    }
  }, [result, navigate]);
  if (!result) {
    return null;
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
          <Card className={"lg:w-[40rem] bg-cyan-600 border-none shadow-lg"}>
            <div>
              <div className="flex flex-row items-center pt-4 px-8 justify-between gap-2">
                <h3 className="text-3xl font-semibold text-white">
                  Biodata Pasien
                </h3>
                <button
                  className="border-2 border-white w-28 h-10 hover:bg-white hover:text-cyan-900 rounded-lg text-white font-bold"
                  onClick={handlePrintReportUser}
                >
                  Print Report
                </button>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-10 text-lg font-medium leading-6 text-white">
                      Nama
                    </dt>
                    <dd className="px-10 sm:px-0 mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                      {result.data.nama}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-10 text-lg font-medium leading-6 text-white">
                      Umur
                    </dt>
                    <dd className="px-10 sm:px-0 mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
                      {result.data.umur + "\tTahun"}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="px-10 text-lg font-medium leading-6 text-white">
                      Jenis Kelamin
                    </dt>
                    <dd className="px-10 sm:px-0 mt-1 text-lg leading-6 text-white font-medium sm:col-span-2 sm:mt-0">
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
              bgColor = "bg-[#f45b8b]";
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
            const diseaseName = disease.nama_penyakit;
            let diseaseInfo;
            if (diseaseName == "Depresi") {
              diseaseInfo =
                "Depresi adalah gangguan kesehatan mental yang memengaruhi perasaan, cara berpikir, dan cara bertindak seseorang.";
            }
            if (diseaseName == "Anxiety") {
              diseaseInfo =
                "Anxiety ( gangguan kecemasan ) adalah perasaan khawatir atau cemas yang tidak terkendali dan berlebihan akan banyak hal.";
            }
            if (diseaseName == "Stress") {
              diseaseInfo =
                "Stress adalah suatu bentuk tekanan fisik dan psikologis yang muncul saat menghadapi kondisi yang terasa berbahaya.";
            }
            return (
              <div key={index}>
                <Card
                  className={`w-96 h-[25.5rem] ${bgColor} text-black border-none shadow-sm md:shadow-2xl`}
                >
                  <div className="border-b-2 border-cyan-700">
                    <h1 className="text-6xl text-center py-5 font-semibold ">
                      {disease.nama_penyakit}
                    </h1>
                    <p className="text-sm px-10 text-justify py-4">
                      {diseaseInfo}
                    </p>
                  </div>
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
        <div className="w-full flex flex-col items-center justify-center py-10 ">
          <p className="w-3/4 text-center font-semibold text-lg mt-10 after:content-['*'] after:text-red-600">
            Sistem ini hanya membantu mendiagnosis awal penyakit anda, silahkan
            konsultasi lebih lanjut ke dokter spesialis untuk mendapatkan terapi
            yang lebih akurat.
          </p>
          <Button
            label={"Diagnosa Ulang"}
            variant={"bg-cyan-500"}
            width={"w-52"}
            height={"h-[3rem]"}
            fontBold={"font-bold"}
            textColor={"text-white"}
            borderRadius={"rounded-xl"}
            className={"hover:bg-cyan-700"}
            onClick={handleDeleteLocalStorage}
          />
        </div>
        <div className="hidden">
          <ResultUSerPDF ref={reportUserRef} />
        </div>
      </LayoutResult>
    </div>
  );
};
