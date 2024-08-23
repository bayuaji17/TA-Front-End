import { forwardRef } from "react";
import useFetch from "../../services/useFetch";
import { jwtDecode } from "jwt-decode";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

const RulesPDF = forwardRef((props, ref) => {
  const { data } = useFetch("/rules?page=1&limit=100");
  const now = new Date();
  const sixMonthsLater = new Date(now);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  const option = { year: "numeric", month: "long", day: "numeric" };
  const formattedNow = now.toLocaleDateString("id-ID", option);
  const formattedSixMonthsLater = sixMonthsLater.toLocaleDateString(
    "id-ID",
    option
  );
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = now.toLocaleDateString("id-ID", options);
  const token = CookieStorage.get(CookieKeys.AuthToken)
  const decode = jwtDecode(token)
  return (
    <div ref={ref}>
      <div className="my-10 px-10">
        <div className="pb-10">
          <h1 className="text-center text-5xl font-semibold">
            Laporan Data Aturan Penyakit
          </h1>
          <p className="pt-3 text-center">{`Periode ${formattedNow} sampai ${formattedSixMonthsLater}`}</p>
        </div>
        <table className="table-fixed border-2 border-black w-full">
          <thead>
            <tr>
              <th className="border-r-2 border-black text-md py-2 w-3/12">
                Kode Aturan
              </th>
              <th className="border-r-2 border-black text-md py-2">
                Kode Gejala
              </th>
              <th className="border-r-2 border-black text-md py-2">
                Nama Penyakit
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((rules, index) => (
              <tr key={index}>
                <td className="border-2 border-black px-4 text-center text-md py-2">
                  {rules.kode_aturan}
                </td>
                <td className="border-2 border-black px-4 text-md py-2">
                  IF {rules.kode_gejala}
                </td>
                <td className="border-2 border-black px-4 text-md py-2">
                  {rules.nama_penyakit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end w-full">
        <p className="pr-10">Jakarta, {formattedDate}</p>
        <p className="pr-10 pt-24">
        (<span className="px-5">{decode.nama_admin}</span> )
        </p>
      </div>
    </div>
  );
});
RulesPDF.displayName = "RulesPDF";
export default RulesPDF;
