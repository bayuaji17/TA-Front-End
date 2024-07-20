import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormInput } from "./form/FormInput";
import { postSymptom } from "../services/create-symptom";
import { toast } from "react-toastify";

export const AddSymptom = React.forwardRef(({ onClick }, ref) => {
  const [formData, setFormData] = useState({
    kode_gejala: "",
    nama_gejala: "",
    pertanyaan: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    event.preventDefault();
    try {
      const response = await postSymptom(formData);
      console.log(response);
      alert("Data has been successfully submitted!");
      // Menutup dialog setelah post berhasil
      if (ref.current) {
        ref.current.close();
      }
    } catch (error) {
        toast("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      console.log(error);
      if (ref.current) {
        ref.current.close();
      }
    }
  };

  return (
    <div>
      <dialog
        ref={ref}
        className="h-[80dvh] w-[45rem] border-2 border-black rounded-2xl p-5"
      >
        <h1 className="text-2xl text-end mr-4">Add Data</h1>
        <FormInput
          type={"text"}
          label={"kode_gejala"}
          name={"Symptom Code"}
          placeholder={"Insert Symptom Code"}
          width={"w-full"}
          height={"h-11"}
          value={formData.kode_gejala}
          onChange={handleInputChange}
        />
        <FormInput
          type={"text"}
          label={"nama_gejala"}
          name={"Symptom Name"}
          placeholder={"Insert Symptom Name"}
          width={"w-full"}
          height={"h-11"}
          value={formData.nama_gejala}
          onChange={handleInputChange}
        />
        <FormInput
          type={"text"}
          label={"pertanyaan"}
          name={"Questions"}
          placeholder={"Insert Questions for Symptom"}
          width={"w-full"}
          height={"h-11"}
          value={formData.pertanyaan}
          onChange={handleInputChange}
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

AddSymptom.displayName = "AddSymptom";

AddSymptom.propTypes = {
  onClick: PropTypes.func.isRequired,
};
