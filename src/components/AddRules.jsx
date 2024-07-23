import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormInput } from "./form/FormInput";
import { postRules } from "../services/symptom";
import useFetch from "../services/useFetch";
import { FormSelect } from "./form/FormSelect";
import { toast } from "react-toastify";

export const AddRules = React.forwardRef(({ onClick }, ref) => {
  const [formData, setFormData] = useState({
    kode_aturan: "",
    kode_gejala: "",
    kode_penyakit: "",
  });
  const [disease, setDisease] = useState([]);
  const [symptoms, setSymptoms] = useState([]);

  const { data: dataDisease } = useFetch("/disease");
  const { data: dataSymptoms } = useFetch("/symptoms?limit=100");
  console.log(dataSymptoms);

  useEffect(() => {
    if (dataDisease) {
      const diseaseOptions = dataDisease?.data?.map((disease) => ({
        label: disease.nama_penyakit,
        value: disease.kode_penyakit,
      }));
      setDisease(diseaseOptions);
    }
  }, [dataDisease]);

  useEffect(() => {
    if (dataSymptoms) {
      const symptomOptions = dataSymptoms?.data?.map((symptoms) => ({
        label: symptoms.nama_gejala,
        value: symptoms.kode_gejala,
      }));
      setSymptoms(symptomOptions);
    }
  }, [dataSymptoms]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await postRules(formData);
      console.log(response);
      toast.success()
    } catch (error) {
      console.log(error.response?.data?.status);
    }
  };



  return (
    <div>
      {" "}
      <dialog
        ref={ref}
        className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
      >
        <h1 className="text-2xl text-end mr-4">Add Data</h1>
        <FormInput
          type={"text"}
          label={"kode_aturan"}
          name={"Rule Code"}
          placeholder={"Insert Rule Code"}
          width={"w-full"}
          height={"h-11"}
          value={formData.kode_aturan}
          onChange={handleInputChange}
        />
        <FormSelect
          label="kode_gejala"
          name="Symptom Code"
          onChange={handleInputChange}
          options={symptoms}
        />
        <FormSelect
          label="kode_penyakit"
          name="Disease Code"
          onChange={handleInputChange}
          options={disease}
        />
        <div className="h-28 flex justify-end items-end">
          <button
            className="border-2 w-24 h-10 border-black rounded-xl hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            autoFocus
            onClick={onClick}
            className="ml-4 border-2 w-24 h-10 border-black rounded-xl hover:bg-red-600 hover:text-white hover:font-bold hover:border-none"
          >
            Cancel
          </button>
        </div>
      </dialog>
    </div>
  );
});

AddRules.displayName = "AddRules";

AddRules.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
