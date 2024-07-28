import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { deletedSingleSymptomRules, putRules } from "../services/symptom";
import { toast } from "react-toastify";
import { ConfirmModal } from "./ConfirmModal";

export const EditRules = ({ isOpen, onClose, initialData }) => {
  const [formEdit, setFormEdit] = useState({});
  useEffect(() => {
    if (initialData) {
      setFormEdit(initialData);
    }
  }, [initialData]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [editId, setEditId] = useState(null);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [selectedRules, setSelectedRules] = useState(null);

  const handleEditClick = (index, rules) => {
    setEditIndex(index);
    setEditData(rules);
    setEditId(rules.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      const response = await putRules(editId, editData);
      console.log(response);
      toast.success(response.data?.message);
      setEditIndex(null);
    } catch (error) {
      toast.error("error");
      setEditIndex(null);
    }
  };
  if (!isOpen) return null;
  //   !DELETE

  const handleConfirmDelete = async () => {
    try {
      const response = await deletedSingleSymptomRules(selectedRules);
      toast.success(response?.data?.message)
      setConfirmOpen(false);
    } catch (error) {
        console.log(error);
      toast.error("Error");
      setConfirmOpen(false);
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedRules(id);
    setConfirmOpen(true);
  };
  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setSelectedRules(null);
  };
  //   !DELETE

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50 ">
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <div className="bg-white w-[60rem] h-[30rem] rounded-lg border-2 border-cyan-700 overflow-y-scroll">
        <h1 className="font-bold text-xl text-end pr-6 pt-4">Edit Rules</h1>
        <div className="flex w-full justify-center mt-10">
          <div className="border-2 rounded-xl w-[90%]">
            <table className="w-full">
              <thead className="align-middle border-b-2 h-12 ">
                <tr>
                  <th>Kode Aturan</th>
                  <th>Kode Gejala</th>
                  <th>Kode Penyakit</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {formEdit?.data?.map((rules, index) => (
                  <tr key={index}>
                    {editIndex === index ? (
                      <>
                        <td className="text-center py-2">
                          <input
                            type="text"
                            name="kode_aturan"
                            value={editData.kode_aturan}
                            onChange={handleInputChange}
                            className="border rounded p-1"
                          />
                        </td>
                        <td className="text-center py-2">
                          <input
                            type="text"
                            name="kode_gejala"
                            value={editData.kode_gejala}
                            onChange={handleInputChange}
                            className="border rounded p-1"
                          />
                        </td>
                        <td className="text-center py-2">
                          <input
                            type="text"
                            name="kode_penyakit"
                            value={editData.kode_penyakit}
                            onChange={handleInputChange}
                            className="border rounded p-1"
                          />
                        </td>
                        <td>
                          <div className="flex flex-row gap-4 justify-center py-2">
                            <button
                              className="text-blue-600 font-semibold"
                              onClick={handleSaveClick}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 font-semibold"
                              onClick={() => setEditIndex(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="text-center py-2">
                          {rules.kode_aturan}
                        </td>
                        <td className="text-center py-2">
                          {rules.kode_gejala}
                        </td>
                        <td className="text-center py-2">
                          {rules.kode_penyakit}
                        </td>
                        <td>
                          <div className="flex flex-row gap-4 justify-center py-2">
                            <button
                              className="text-blue-600 font-semibold"
                              onClick={() => handleEditClick(index, rules)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 font-semibold"
                              onClick={() => handleDeleteClick(rules.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end gap-5 mx-10 mt-10 mb-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

EditRules.propTypes = {
  selectedRules: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};
