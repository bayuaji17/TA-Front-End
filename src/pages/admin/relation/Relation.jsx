import { useSWRConfig } from "swr";
import { Navbar } from "../../../components/navbar/Navbar";
import useFetch from "../../../services/useFetch";
import { Layout } from "../Layout";
import { useRef, useState } from "react";
import { AddRelations } from "../../../components/AddRelations";

export const Relation = () => {
  const [page, setPage] = useState(1);
  const dialogRef = useRef(null);
  const { data, isLoading } = useFetch(`/relation?page=${page}&limit=7`);
  const { data: dataDisease } = useFetch(`/disease`);
  console.log(dataDisease, "dari dataDisease");
  //   const { mutate } = useSWRConfig();
  console.log(data);
  const totalPages = data?.pagination?.totalPages;
  const offset = data?.pagination?.offset;
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const tableHead = [
    "No",
    "Symptom Code",
    "Disease Code",
    "CF Value",
    "Disease Name",
    "Action",
  ];
  const handleCancel = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <div>
      <AddRelations ref={dialogRef} onClick={handleCancel} />
      <Layout>
        <Navbar />
        <main className="m-10">
          <div className="inline-flex justify-end w-full mb-2 ">
            <button
              className="border-2 border-cyan-700 rounded-lg h-10 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
              onClick={openDialog}
            >
              Add Relation
            </button>
          </div>
          <div className="border rounded-lg w-[75dvw] h-[65dvh] overflow-scroll">
            <table className=" divide-y divide-gray-200 w-full h-full">
              <thead className="bg-cyan-700">
                <tr>
                  {tableHead.map((head) => (
                    <th
                      key={head}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase "
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              {isLoading ? (
                <div>Loading</div>
              ) : (
                <tbody className="divide-y divide-gray-200 ">
                  {data?.data?.map((id_gejala, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 w-[5%] whitespace-normal text-sm font-medium text-gray-800 ">
                        {offset + index + 1}
                      </td>
                      <td className="px-6 py-4 w-[10%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.kode_gejala}
                      </td>
                      <td className="px-6 py-4 w-[20%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.kode_penyakit}
                      </td>
                      <td className="px-6 py-4 w-[15%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.nilai_cf}
                      </td>
                      <td className="px-6 py-4 w-[30%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.nama_penyakit}
                      </td>
                      <td className="px-6 py-4 w-[20%] whitespace-nowrap text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none pr-3"
                          //   onClick={() => editSymptom(id_gejala.id_gejala)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                          //   onClick={() => deleteSymptom(id_gejala.id_gejala)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          <div className="flex w-full justify-end gap-4 mt-4 pr-2">
            <button
              className="w-20 h-10 border-2 border-black rounded-lg hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none disabled:bg-cyan-600 disabled:cursor-not-allowed"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="w-20 h-10 border-2 border-black rounded-lg hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none disabled:bg-cyan-600 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </Layout>
    </div>
  );
};
