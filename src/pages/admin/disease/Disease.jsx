import { Layout } from "../Layout";
import { Navbar } from "../../../components/navbar/Navbar";
import { FormInput } from "../../../components/form/FormInput";
import useFetch from "../../../services/useFetch";
import { useRef, useState } from "react";
import {
  deleteDisease,
  postDisease,
  putDisease,
} from "../../../services/disease";
import { toast } from "react-toastify";
import { ConfirmModal } from "../../../components/ConfirmModal";
import { EditDisease } from "../../../components/EditDisease";
import { useSWRConfig } from "swr";
export const Disease = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [formInputDisease, setFormInputDisease] = useState({
    kode_penyakit: "",
    nama_penyakit: "",
  });
  const dialogRef = useRef(null);
  const { data, error, isLoading } = useFetch("/disease");
  const { mutate } = useSWRConfig();
  const tableHead = ["No", "Disease Code", "Disease Name", "Action"];

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormInputDisease({ ...formInputDisease, [id]: value });
  };

  const showDialog = () => {
    setIsOpen(true);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    dialogRef.current.close();
  };
  const deleteDiseases = (id) => {
    setSelectedDisease(id);
    setConfirmOpen(true);
  };
  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setSelectedDisease(null);
  };
  const handleConfirmDelete = async () => {
    try {
      const response = await deleteDisease(selectedDisease);
      toast.success(response.data?.message);
      mutate("/disease");
      setConfirmOpen(false);
    } catch (error) {
      setConfirmOpen(false);
    }
  };

  const handleSubmitDisease = async () => {
    try {
      const response = await postDisease(formInputDisease);
      dialogRef.current.close();
      toast.success(response.data?.message);
      mutate("/disease");
    } catch (error) {
      dialogRef.current.close();
      toast.error(error.response?.data?.status);
    }
  };
  // * Edit
  const editDisease = (id) => {
    setSelectedDisease(id);
    setIsEditOpen(true);
  };

  const handleCancelEdit = () => {
    setIsEditOpen(false);
    setSelectedDisease(null);
  };

  const handleEditSubmit = async (updatedDisease) => {
    try {
      const response = await putDisease(selectedDisease, updatedDisease);
      toast.success(response.data?.message);
      mutate("/disease");
      setIsEditOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.status);
      setIsEditOpen(false);
    }
  };

  return (
    <div>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <EditDisease
        isOpen={isEditOpen}
        onClose={handleCancelEdit}
        onSubmit={handleEditSubmit}
        initialData={selectedDisease}
      />
      <div>
        <dialog
          ref={dialogRef}
          className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
        >
          <h1 className="text-2xl text-end mr-4 font-bold">Add Disease</h1>
          <FormInput
            type={"text"}
            label={"kode_penyakit"}
            name={"Disease Code"}
            placeholder={"Disease Code"}
            width={"w-full"}
            height={"h-11"}
            onChange={handleInputChange}
          />
          <FormInput
            type={"text"}
            label={"nama_penyakit"}
            name={"Disease Name"}
            placeholder={"Disease Name"}
            width={"w-full"}
            height={"h-11"}
            onChange={handleInputChange}
          />
          <div className="h-28 flex justify-end items-end gap-2 mr-4">
            <button
              className="border-2 w-24 h-10 border-black hover:border-none hover:text-white rounded-xl bg-cyan-500 hover:bg-cyan-600"
              type="submit"
              onClick={handleSubmitDisease}
            >
              Submit
            </button>
            <button
              autoFocus
              onClick={closeDialog}
              className="ml-4 border-2 w-24 h-10 border-black hover:border-none rounded-xl bg-gray-300 hover:bg-gray-500"
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
              className="border-2 border-cyan-700 h-10 w-32 rounded-lg hover:bg-cyan-500 hover:text-white hover:border-none hover:font-bold"
              onClick={showDialog}
            >
              Add Disease
            </button>
          </div>
          {/* //!TABLE */}
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
                      {index + 1}
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
                        onClick={() => editDisease(id_penyakit.id_penyakit)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none "
                        onClick={() => deleteDiseases(id_penyakit.id_penyakit)}
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
