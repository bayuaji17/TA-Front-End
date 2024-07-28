import { PropTypes } from "prop-types";
import { FormInput } from "./form/FormInput";
import { useEffect, useState } from "react";
import { FormSelect } from "./form/FormSelect";

export const EditRelations = ({ isOpen, onClose, onSubmit, symptomsData,diseaseData }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [disease, setDisease] = useState([]);
  const [formEdit, setFormEdit] = useState({
    kode_gejala: "",
    kode_penyakit: "",
    nilai_cf: "",
  });

  useEffect(() => {
    if (symptomsData) {
      const symptomsOptions = symptomsData?.data?.map((symptoms) => ({
        label: symptoms.nama_gejala,
        value: symptoms.kode_gejala,
      }));
      setSymptoms(symptomsOptions);
    }
  }, [symptomsData]);
  useEffect(() => {
    if (diseaseData) {
      const diseaseOptioons = diseaseData?.data?.map((disease) => ({
        label: disease.nama_penyakit,
        value: disease.kode_penyakit,
      }));
      setDisease(diseaseOptioons);
    }
  }, [diseaseData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormEdit({ ...formEdit, [id]: value });
  };
  const handleParseFloat = (e) => {
    const { id, value } = e.target;
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue) && parsedValue >= -1 && parsedValue <= 1) {
      setFormEdit({
        ...formEdit,
        [id]: parsedValue,
      });
    } else {
      setFormEdit({
        ...formEdit,
        [id]: value,
      });
    }
  };
  const handleSubmit = () => {
    onSubmit(formEdit);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white w-[40rem] h-[30rem] rounded-lg border-2 border-cyan-700">
        <h1 className="font-bold text-xl text-end pr-6 pt-4">Edit Rules</h1>
        <div className="flex flex-col px-10">
          <FormSelect
            label="kode_gejala"
            name="Symptom Name"
            onChange={handleInputChange}
            options={symptoms}
          />
          <FormSelect
            label="kode_penyakit"
            name="Disease Name"
            onChange={handleInputChange}
            options={disease}
          />
          <FormInput
            label={"nilai_cf"}
            type={"number"}
            name={"CF Value"}
            placeholder={"CF Value"}
            height={"h-12"}
            width={"w-[36rem]"}
            value={formEdit.nilai_cf}
            onChange={handleParseFloat}
            step="0.05"
            min="-1"
            max="1"
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

EditRelations.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
//   initialData: PropTypes.object,
  symptomsData: PropTypes.object,
  diseaseData: PropTypes.object,
};
