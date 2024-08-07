import { useSWRConfig } from "swr";
import { Navbar } from "../../../components/navbar/Navbar";
import useFetch from "../../../services/useFetch";
import { Layout } from "../Layout";
import { useRef, useState } from "react";
import { AddRelations } from "../../../components/AddRelations";
import { ConfirmModal } from "../../../components/ConfirmModal";
import { deletedRelation, putRelation } from "../../../services/symptom";
import { toast } from "react-toastify";
import { EditRelations } from "../../../components/EditRelations";
import { useReactToPrint } from "react-to-print";
import SymptomCFpdf from "../../../components/pdf/SymptomCFpdf";

export const Relation = () => {
  const symptomCFRef = useRef();
  const [page, setPage] = useState(1);
  const dialogRef = useRef(null);
  const [selectedRelation, setSelectedRelation] = useState(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data, isLoading } = useFetch(`/relation?page=${page}&limit=7`);
  const { data: dataSymptom } = useFetch("/symptoms?page=1&limit=100");
  const { data: dataDisease } = useFetch(`/disease`);

  const { mutate } = useSWRConfig();
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
  // *DELETE
  const deleteRelation = (id) => {
    setSelectedRelation(id);
    setConfirmOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      const response = await deletedRelation(selectedRelation);
      console.log(response);
      toast.success(response.data?.message);
      setConfirmOpen(false);
      mutate(`/relation?page=${page}&limit=7`);
    } catch (error) {
      setConfirmOpen(false);
      toast.error("error");
    }
  };
  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setSelectedRelation(null);
  };
  // *DELETE
  // * EDIT
  const EditRelation = (id) => {
    setSelectedRelation(id);
    setIsEditOpen(true);
  };

  const handleCancelEdit = () => {
    setIsEditOpen(false);
    setSelectedRelation(null);
    mutate(`/relation?page=${page}&limit=7`);
  };
  const handleEditSubmit = async (updatedRelation) => {
    try {
      const response = await putRelation(selectedRelation, updatedRelation);
      toast.success(response.data?.message);
      mutate(`/relation?page=${page}&limit=7`);
      setIsEditOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.status);
      setIsEditOpen(false);
    }
  };

  // * EDIT
  const handlePrintSymptomCF = useReactToPrint({
    content: () => symptomCFRef.current,
    documentTitle: "Laporan Data Nilai Gejala Certainty Factor",
  });
  return (
    <div>
      <AddRelations
        ref={dialogRef}
        onClick={handleCancel}
        dataDisease={dataDisease}
        dataSymptoms={dataSymptom}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <EditRelations
        isOpen={isEditOpen}
        onClose={handleCancelEdit}
        symptomsData={dataSymptom}
        diseaseData={dataDisease}
        onSubmit={handleEditSubmit}
      />
      <Layout>
        <Navbar />
        <main className="m-10">
          <div className="inline-flex justify-end w-full mb-2 gap-2">
            <button
              className="bg-cyan-600 text-white rounded-lg h-10 w-32 font-semibold hover:bg-cyan-800 hover:text-white hover:font-bold hover:border-none"
              onClick={handlePrintSymptomCF}
            >
              Print Report
            </button>
            <button
              className="border-2 border-cyan-700 rounded-lg h-10 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
              onClick={openDialog}
            >
              Add Relation
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
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan={tableHead.length} className="text-center py-4">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  data?.data?.map((id_gejala, index) => (
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
                          onClick={() => EditRelation(id_gejala.id_gejala)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                          onClick={() => deleteRelation(id_gejala.id_gejala)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
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
        <div className="hidden">
          <SymptomCFpdf ref={symptomCFRef} />
        </div>
      </Layout>
    </div>
  );
};
