import { forwardRef } from "react";
const ResultUSerPDF = forwardRef((props, ref) => {
  const resultUser = JSON.parse(localStorage.getItem("resultUsers"));
  const questions = JSON.parse(localStorage.getItem("questions"));
  const date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let formattedDate = date.toLocaleDateString("id-ID", options);

  return (
    <div ref={ref}>
      <div className="mb-10 mt-5 px-10">
        <h1 className="text-center pb-10 text-5xl font-semibold">
          Laporan Hasil Diagnosa Awal
        </h1>
        <div className="flex flex-row w-full pb-5">
          <div className="flex flex-col w-1/4">
            <h1>Nama</h1>
            <h1>Umur</h1>
            <h1>Jenis Kelamin</h1>
            <h1>Tanggal</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="before:content-[':'] before:pr-2">
              {resultUser?.data?.nama}
            </h1>
            <h1 className="before:content-[':'] before:pr-2">
              {resultUser?.data?.umur} Tahun
            </h1>
            <h1 className="before:content-[':'] before:pr-2">
              {resultUser?.data?.jenisKelamin}
            </h1>
            <h1 className="before:content-[':'] before:pr-2">
              {formattedDate}
            </h1>
          </div>
        </div>
        <table className="table-fixed border-2 border-black w-full">
          <thead>
            <tr>
              <th className="border-r-2 border-black text-md py-1 w-[10%]">
                Nomor
              </th>
              <th className="border-r-2 border-black text-md py-1 w-[14%]">
                Kode Gejala
              </th>
              <th className="border-r-2 border-black text-md py-1 w-3/5">
                Pertanyaan
              </th>
              <th className="border-r-2 border-black text-md py-1">Jawaban</th>
            </tr>
          </thead>
          <tbody>
            {resultUser?.data?.answers?.map((answers, index) => {
              const question = questions?.data?.find(
                (q) => q.kode_gejala === answers.questionId
              );
              return (
                <tr key={index}>
                  <td className="border-2 border-black px-4 text-center text-md py-1">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black px-4 text-md py-1 text-center">
                    {answers.questionId}
                  </td>
                  <td className="border-2 border-black px-4 text-md py-1">
                    {question
                      ? question.pertanyaan
                      : "Pertanyaan tidak ditemukan"}
                  </td>
                  <td className="border-2 border-black px-4 text-md py-1">
                    {answers.answer}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h4 className="mt-4 mb-2">Hasil Diagnosa</h4>
        <table className="w-10/12 mb-8">
          <thead>
            <tr>
              <td className="border-2 border-black text-center">
                Nama Penyakit
              </td>
              <td className="border-2 border-black text-center">
                Nilai Akhir CF
              </td>
              <td className="border-2 border-black text-center">Persentase</td>
            </tr>
          </thead>
          <tbody>
            {resultUser?.results?.map((result, index) => {
              return (
                <tr key={index}>
                  <td className="border-2 border-black text-center">
                    {result.nama_penyakit}
                  </td>
                  <td className="border-2 border-black text-center">
                    {result.combinedCF.toFixed(4)}
                  </td>
                  <td className="after:content-['%'] border-2 border-black text-center">
                    {Math.round(result.combinedCF * 100)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-col">
          <h6 className="after:content-['*'] after:text-red-600">Keterangan Jawaban</h6>
          <div className="flex flex-row w-1/2">
            <div className="flex flex-col w-1/2">
              <p>Tidak Pernah</p>
              <p>Kadang Kadang</p>
              <p>Lumayan Sering</p>
              <p>Sering Sekali</p>
            </div>
            <div className="flex flex-col">
              <p className="before:content-['='] before:px-2">0</p>
              <p className="before:content-['='] before:px-2">0,33</p>
              <p className="before:content-['='] before:px-2">0,67</p>
              <p className="before:content-['='] before:px-2">1</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-justify after:content-['*'] after:text-red-600 pt-10">
          Hasil diagnosis ini hanya membantu mendiagnosis awal penyakit anda,
          silahkan konsultasi lebih lanjut ke dokter spesialis untuk mendapatkan
          terapi yang lebih akurat
        </p>
      </div>
    </div>
  );
});
ResultUSerPDF.displayName = "ResultUSerPDF";
export default ResultUSerPDF;
