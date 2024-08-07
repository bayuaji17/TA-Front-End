import { Navbar } from "../../../components/navbar/Navbar";
import { Layout } from "../Layout";
import useFetch from "../../../services/useFetch";
import { useRef, useState } from "react";
import { AddSymptom } from "../../../components/AddSymptom";
import { ConfirmModal } from "../../../components/ConfirmModal";
import { deleteSymptoms } from "../../../services/symptom";
import { toast } from "react-toastify";
import { EditSymptom } from "../../../components/EditSymptom";
import { putSymptoms } from "../../../services/symptom";
import { useSWRConfig } from "swr";
import SymptomPDF from "../../../components/pdf/SymptomPDF";
import { useReactToPrint } from "react-to-print";

export const Symptom = () => {
  const symptomRef = useRef();
  const [page, setPage] = useState(1);
  const dialogRef = useRef(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const { data, error, isLoading } = useFetch(`/symptoms?page=${page}&limit=7`);
  const { mutate } = useSWRConfig();
  const totalPages = data?.pagination?.totalPages;
  const offset = data?.pagination?.offset;

  const handlePrintSymptom = useReactToPrint({
    content: () => symptomRef.current,
    documentTitle: "Laporan Data Gejala",
  });
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

  const deleteSymptom = (id) => {
    setSelectedSymptom(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteSymptoms(selectedSymptom);
      toast.success(response.data?.message);
      setConfirmOpen(false);
      mutate(`/symptoms?page=${page}&limit=7`);
    } catch (error) {
      setConfirmOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setSelectedSymptom(null);
  };
  // * EDIT

  const editSymptom = (id) => {
    setSelectedSymptom(id);
    setIsEditOpen(true);
  };

  const handleCancelEdit = () => {
    setIsEditOpen(false);
    setSelectedSymptom(null);
  };

  const handleEditSubmit = async (updatedSymptom) => {
    try {
      const response = await putSymptoms(selectedSymptom, updatedSymptom);
      toast.success(response.data?.message);
      mutate(`/symptoms?page=${page}&limit=7`);
      setIsEditOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.status);
      setIsEditOpen(false);
    }
  };

  return (
    <div>
      <AddSymptom ref={dialogRef} onClick={handleCancel} page={page} />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <EditSymptom
        isOpen={isEditOpen}
        onClose={handleCancelEdit}
        onSubmit={handleEditSubmit}
        initialData={selectedSymptom}
      />
      <Layout>
        <Navbar />
        <div className="m-10">
          <div className="inline-flex justify-end w-full mb-2 gap-4">
            <button
              className="bg-cyan-600 text-white rounded-lg h-10 w-32 font-semibold hover:bg-cyan-800 hover:text-white hover:font-bold hover:border-none"
              onClick={handlePrintSymptom}
            >
              Print Report
            </button>
            <button
              className="border-2 border-cyan-700 rounded-lg h-10 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
              onClick={openDialog}
            >
              Add Symptom
            </button>
          </div>
          <div className="border rounded-lg w-[75dvw] h-[65dvh] overflow-scroll">
            <table className=" divide-y divide-gray-200 w-full h-full">
              <thead className="bg-cyan-600">
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
                      <td className="px-6 py-4 w-[10%] whitespace-normal text-sm font-medium text-gray-800 ">
                        {offset + index + 1}
                      </td>
                      <td className="px-6 py-4 w-[10%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.kode_gejala}
                      </td>
                      <td className="px-6 py-4 w-[20%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.nama_gejala}
                      </td>
                      <td className="px-6 py-4 w-[40%] whitespace-normal text-sm text-gray-800 ">
                        {id_gejala.pertanyaan}
                      </td>
                      <td className="px-6 py-4 w-[20%] whitespace-nowrap text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none pr-3"
                          onClick={() => editSymptom(id_gejala.id_gejala)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                          onClick={() => deleteSymptom(id_gejala.id_gejala)}
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
        </div>
        <div className="hidden">
          <SymptomPDF ref={symptomRef} />
        </div>
      </Layout>
    </div>
  );
};
