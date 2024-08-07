import { forwardRef } from "react";
import useFetch from "../../services/useFetch";
import "./print.css"
const SymptomCFpdf = forwardRef((props, ref) => {
  const { data: dataRelations } = useFetch("relation?page=1&limit=200");
  const now = new Date();
  const sixMonthsLater = new Date(now);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedNow = now.toLocaleDateString("id-ID", options);
  const formattedSixMonthsLater = sixMonthsLater.toLocaleDateString(
    "id-ID",
    options
  );
  let option = {
    weekday:"long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = now.toLocaleDateString("id-ID", option);

  return (
    <div ref={ref}>
      <div className="px-10">
        <div className="pb-5">
          <h1 className="text-center text-5xl font-semibold">
            Laporan Data Gejala Nilai Certainty Factor
          </h1>
          <p className="pt-3 text-center">{`Periode ${formattedNow} sampai ${formattedSixMonthsLater}`}</p>
        </div>
        <table className="table-fixed border-2 border-black w-full">
          <thead>
            <tr>
              <th
                scope="col"
                rowSpan={2}
                className="border-2 border-black text-sm py-1 w-2/12"
              >
                Nomor
              </th>
              <th
                scope="col"
                rowSpan={2}
                className="border-2 border-black text-sm py-1"
              >
                Kode Gejala
              </th>
              <th
                scope="col"
                colSpan={3}
                className="border-2 border-black text-sm py-1"
              >
                Penyakit
              </th>
            </tr>
            <tr>
              <th scope="col" className="border-2 border-black">
                Depresi
              </th>
              <th scope="col" className="border-2 border-black">
                Anxiety
              </th>
              <th scope="col" className="border-2 border-black">
                Stress
              </th>
            </tr>
          </thead>
          <tbody>
            {dataRelations?.data?.map((relation, index) => {
              const nilaiCfDepresi = dataRelations.data.find(
                (item) =>
                  item.kode_gejala === relation.kode_gejala &&
                  item.kode_penyakit === "P01"
              )?.nilai_cf;

              const nilaiCfAnxiety = dataRelations.data.find(
                (item) =>
                  item.kode_gejala === relation.kode_gejala &&
                  item.kode_penyakit === "P02"
              )?.nilai_cf;

              const nilaiCfStress = dataRelations.data.find(
                (item) =>
                  item.kode_gejala === relation.kode_gejala &&
                  item.kode_penyakit === "P03"
              )?.nilai_cf;
              return (
                <tr key={index}>
                  <td className="text-center border-2 border-black">{index + 1}</td>
                  <td className="text-center border-2 border-black">{relation.kode_gejala}</td>
                  <td className="text-center border-2 border-black">{nilaiCfDepresi || "-"}</td>
                  <td className="text-center border-2 border-black">{nilaiCfAnxiety || "-"}</td>
                  <td className="text-center border-2 border-black">{nilaiCfStress || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end w-full pt-10">
        <p className="pr-10">Jakarta, {formattedDate}</p>
        <p className="pr-10 pt-24">
          (<span className="px-[4.7rem]"></span> )
        </p>
      </div>
    </div>
  );
});
SymptomCFpdf.displayName = "SymptomCFpdf";
export default SymptomCFpdf;
