import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormInput } from "./form/FormInput";
import { FormSelect } from "./form/FormSelect";
import { postRelation } from "../services/symptom";
import { toast } from "react-toastify";
import useFetch from "../services/useFetch";
import { useSWRConfig } from "swr";

export const AddRelations = React.forwardRef(
  ({ onClick, dataDisease, dataSymptoms,page }, ref) => {
    const [disease, setDisease] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [formData, setFormData] = useState({
      kode_gejala: "",
      kode_penyakit: "",
      nilai_cf: "",
    });
    useFetch(`/relation?page=${page}&limit=7`);
    const { mutate } = useSWRConfig();
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value,
      });
    };

    const handleParseFloat = (e) => {
      const { id, value } = e.target;
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue) && parsedValue >= -1 && parsedValue <= 1) {
        setFormData({
          ...formData,
          [id]: parsedValue,
        });
      } else {
        setFormData({
          ...formData,
          [id]: value,
        });
      }
    };

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

    const handleSubmit = async () => {
      try {
        const response = await postRelation(formData);
        if (ref.current) {
          ref.current.close();
        }
        toast.success(response.data.message);
        mutate(`/relation?page=${page}&limit=7`)
      } catch (error) {
        if (ref.current) {
          ref.current.close();
        }
        toast.error("Error");
      }
    };

    return (
      <div>
        <dialog
          ref={ref}
          className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
        >
          <h1 className="text-2xl text-end mr-4">Add Data</h1>
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
          <FormInput
            type={"number"}
            label={"nilai_cf"}
            name={"CF Value"}
            placeholder={"Insert Questions for Symptom"}
            width={"w-full"}
            height={"h-11"}
            value={formData.nilai_cf}
            onChange={handleParseFloat}
            step="0.05"
            min="-1"
            max="1"
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
  }
);

AddRelations.displayName = "AddRelations";

AddRelations.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataDisease: PropTypes.object,
  dataSymptoms: PropTypes.object,
  page: PropTypes.number.isRequired,
};
