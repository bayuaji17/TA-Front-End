import { PropTypes } from "prop-types";
import { FormInput } from "./form/FormInput";
import { useEffect, useState } from "react";

export const EditSymptom = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formEdit, setFormEdit] = useState({
    kode_gejala: "",
    nama_gejala: "",
    pertanyaan: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormEdit({
        kode_gejala: initialData.kode_gejala,
        nama_gejala: initialData.nama_gejala,
        pertanyaan: initialData.questions,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormEdit({ ...formEdit, [id]: value });
  };
  const handleSubmit = () => {
    onSubmit(formEdit);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white w-[40rem] h-[30rem] rounded-lg border-2 border-cyan-700">
        <h1 className="font-bold text-xl text-end pr-6 pt-4">Edit Symptom</h1>
        <div className="flex flex-col items-center">
          <FormInput
            label={"kode_gejala"}
            type={"text"}
            name={"Symptom Code"}
            placeholder={"Symptom Code"}
            height={"h-12"}
            width={"w-[36rem]"}
            value={formEdit.kode_gejala}
            onChange={handleChange}
          />
          <FormInput
            label={"nama_gejala"}
            type={"text"}
            name={"Symptom Name"}
            placeholder={"Symptom Name"}
            height={"h-12"}
            width={"w-[36rem]"}
            value={formEdit.nama_gejala}
            onChange={handleChange}
          />
          <FormInput
            label={"pertanyaan"}
            type={"text"}
            name={"Questions"}
            placeholder={"Symptom Questions"}
            height={"h-12"}
            width={"w-[36rem]"}
            value={formEdit.pertanyaan}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-5 mx-10">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

EditSymptom.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};
