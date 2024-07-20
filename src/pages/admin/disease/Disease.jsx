import { Layout } from "../Layout";
import { Navbar } from "../../../components/navbar/Navbar";
import { FormInput } from "../../../components/form/FormInput";
import useFetch from "../../../services/useFetch";
import { useRef, useState } from "react";
export const Disease = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const { data, error, isLoading } = useFetch("/disease");
  console.log(data);
  const tableHead = ["Nomor", "Kode Penyakit", "Nama Penyakit", "Aksi"];

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loadings</h1>
      </div>
    );
  }

  const showDialog = () => {
    setIsOpen(true);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    dialogRef.current.close();
  };

  return (
    <div>
      <div>
        <dialog
          ref={dialogRef}
          className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
        >
          <h1 className="text-2xl text-end mr-4">Tambah Data</h1>
          <FormInput
            type={"text"}
            label={"kodePenyakit"}
            name={"Kode Penyakit"}
            placeholder={"Masukkan kode penyakit"}
            width={"w-full"}
            height={"h-11"}
          />
          <FormInput
            type={"text"}
            label={"namaPenyakit"}
            name={"Nama Penyakit"}
            placeholder={"Masukkan kode penyakit"}
            width={"w-full"}
            height={"h-11"}
          />
          <div className="h-28 flex justify-end items-end">
            <button
              className="border-2 w-24 h-10 border-black rounded-xl"
              type="submit"
            >
              Submit
            </button>
            <button
              autoFocus
              onClick={closeDialog}
              className="ml-4 border-2 w-24 h-10 border-black rounded-xl"
            >
              Cancel
            </button>
          </div>
        </dialog>
      </div>
      <Layout>
        <Navbar />
        <div className="m-10">
          <div className="flex mb-5 w-full justify-end">
            <button
              className="border-2 border-black h-12 w-28 rounded-xl"
              onClick={showDialog}
            >
              Tambah Data
            </button>
          </div>
          {/* //!TABLE */}
          <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  {tableHead.map((head) => (
                    <th
                      key={head}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {data?.data?.map((id_penyakit, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {id_penyakit.kode_penyakit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {id_penyakit.nama_penyakit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 pr-3"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* //!TABLE */}
        </div>
      </Layout>
    </div>
  );
};
