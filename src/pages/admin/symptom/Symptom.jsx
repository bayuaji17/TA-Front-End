import { Navbar } from "../../../components/navbar/Navbar";
import { Layout } from "../Layout";
import useFetch from "../../../services/useFetch";
import { Loading } from "../../../components/Loading";
import { useRef, useState } from "react";
import { FormInput } from "../../../components/form/FormInput";
import { AddSymptom } from "../../../components/AddSymptom";

export const Symptom = () => {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const { data, error, isLoading } = useFetch(`/symptoms?page=${page}&limit=7`);
  console.log(data);
  const totalPages = data?.pagination.totalPages;

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return "error";
  }

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
    "Symptom Name",
    "Questions",
    "Action",
  ];
  const showDialog = () => {
    setIsOpen(true);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    dialogRef.current.close();
  };


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
      <AddSymptom ref={dialogRef} onClick={handleCancel}/>

      {/* <dialog
        ref={dialogRef}
        className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
      >
        <h1 className="text-2xl text-end mr-4">Add Data</h1>
        <FormInput
          type={"text"}
          label={"symptomCode"}
          name={"Symptom Code"}
          placeholder={"Insert Symptom Code"}
          width={"w-full"}
          height={"h-11"}
        />
        <FormInput
          type={"text"}
          label={"symptomName"}
          name={"Symptom Name"}
          placeholder={"Insert Symptom Name"}
          width={"w-full"}
          height={"h-11"}
        />
        <FormInput
          type={"text"}
          label={"questions"}
          name={"Questions"}
          placeholder={"Insert Questions for Symptom"}
          width={"w-full"}
          height={"h-11"}
        />
        <div className="h-28 flex justify-end items-end">
          <button
            className="border-2 w-24 h-10 border-black rounded-xl hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
            type="submit"
          >
            Submit
          </button>
          <button
            autoFocus
            onClick={closeDialog}
            className="ml-4 border-2 w-24 h-10 border-black rounded-xl hover:bg-red-600 hover:text-white hover:font-bold hover:border-none"
          >
            Cancel
          </button>
        </div>
      </dialog> */}

      <Layout>
        <Navbar />
        <div className="m-10">
          <div className="inline-flex justify-end w-full mb-2 ">
            <button
              className="border-2 border-black rounded-lg h-10 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
              onClick={openDialog}
            >
              Tambah Data
            </button>
          </div>
          <div className="border rounded-lg overflow-hidden w-[75dvw] overflow-x-scroll">
            <table className=" divide-y divide-gray-200 ">
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
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {data?.data?.map((id_gejala, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_gejala.kode_gejala}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_gejala.nama_gejala}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      {id_gejala.pertanyaan}
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
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none "
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
        </div>
      </Layout>
    </div>
  );
};
