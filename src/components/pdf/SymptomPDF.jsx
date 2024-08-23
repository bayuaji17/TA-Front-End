import { forwardRef } from "react";
import useFetch from "../../services/useFetch";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { jwtDecode } from "jwt-decode";

const SymptomPDF = forwardRef((props, ref) => {
  const { data: dataSymptoms } = useFetch("/symptoms?page=1&limit=100");
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
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = now.toLocaleDateString("id-ID", option);
  const token = CookieStorage.get(CookieKeys.AuthToken)
  const decode = jwtDecode(token)
  
  return (
    <div ref={ref} className="print-container">
      <div className="px-10">
        <div className="pb-5">
        <h1 className="text-center text-5xl font-semibold">
          Laporan Data Gejala
        </h1>
        <p className="pt-3 text-center">{`Periode ${formattedNow} sampai ${formattedSixMonthsLater}`}</p>
        </div>
        <table className="table-fixed border-2 border-black w-full">
          <thead>
            <tr>
              <th className="border-r-2 border-black text-md py-[3px] w-2/12">
                Kode Gejala
              </th>
              <th className="border-r-2 border-black text-md py-[3px]">
                Nama Gejala
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSymptoms?.data?.map((symptoms, index) => (
              <tr key={index}>
                <td className="border-2 border-black px-4 text-center text-md py-[3px]">
                  {symptoms.kode_gejala}
                </td>
                <td className="border-2 border-black px-4 text-md py-[3px]">
                  {symptoms.nama_gejala}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end w-full pt-10">
        <p className="pr-10">Jakarta, {formattedDate}</p>
        <p className="pr-10 pt-24">
          (<span className="px-5">{decode.nama_admin}</span> )
        </p>
      </div>
    </div>
  );
});
SymptomPDF.displayName = "SymptomPDF";
export default SymptomPDF;
