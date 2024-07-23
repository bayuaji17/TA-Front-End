import { Layout } from "../Layout";
import { Navbar } from "../../../components/navbar/Navbar";
import useFetch from "../../../services/useFetch";
import { useRef, useState } from "react";
import { useSWRConfig } from "swr";
import { AddRules } from "../../../components/AddRules";
export const RulesDisease = () => {
  const [page, setPage] = useState(1);
  const dialogRef = useRef(null);
  const { data, error, isLoading } = useFetch(`/rules?page=${page}&limit=6`);
  const { mutate } = useSWRConfig();
  const totalPages = data?.pagination?.totalPages;
  const offset = data?.pagination?.offset;
  console.log(data);
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
    "Rule Code",
    "Symptom Code",
    "Disease Code",
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
      <AddRules ref={dialogRef} onClick={handleCancel}/>
      <Layout>
        <Navbar />
        <main className="m-10">
          <div className="inline-flex justify-end w-full mb-2 ">
            <button
              className="border-2 border-cyan-700 h-10 w-32 rounded-lg hover:bg-cyan-500 hover:text-white hover:border-none hover:font-bold"
              onClick={openDialog}
            >
              Add Rules
            </button>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-cyan-600">
                <tr>
                  {tableHead.map((head) => (
                    <th
                      key={head}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.data?.map((id_penyakit, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {offset + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_penyakit.kode_aturan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      IF {id_penyakit.kode_gejala}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_penyakit.kode_penyakit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_penyakit.nama_penyakit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 pr-3"
                        // onClick={() => editDisease(id_penyakit.id_penyakit)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none "
                        // onClick={() => deleteDiseases(id_penyakit.id_penyakit)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
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
