import PropTypes from "prop-types";
import React, { useState } from "react";
import { FormInput } from "./form/FormInput";

export const AddRelations = React.forwardRef(({ onClick }, ref) => {
  const [formData, setFormData] = useState({
    kode_gejala: "",
    kode_penyakit: "",
    nilai_cf: 0,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleParseInt = (e) => {
    const { id, value } = e.target;
    setFormData(
      parseInt({
        ...formData,
        [id]: value,
      })
    );
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
          value={formData.kode_penyakit}
          onChange={handleInputChange}
        />
        <FormInput
          type={"number"}
          label={"nilai_cf"}
          name={"CF Value"}
          placeholder={"Insert Questions for Symptom"}
          width={"w-full"}
          height={"h-11"}
          value={formData.nilai_cf}
          onChange={handleParseInt}
        />
        <div className="h-28 flex justify-end items-end">
          <button
            className="border-2 w-24 h-10 border-black rounded-xl hover:bg-cyan-600 hover:text-white hover:font-bold hover:border-none"
            type="submit"
            // onClick={handleSubmit}
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

AddRelations.displayName = "AddRelations";

AddRelations.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
