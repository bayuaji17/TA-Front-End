import { useState } from "react";
import useFetch from "../services/useFetch";
import { LayoutQuestion } from "./user/LayoutQuestion";
import { Card } from "../components/card/Card";
import { FormInput } from "../components/form/FormInput";
import { FormSelect } from "../components/form/FormSelect";
import { RadioButton } from "../components/formRadio/RadioButton";

export const NotFound = () => {
  const [formQuestions, setFormQuestions] = useState({
    nama: "",
    umur: 0,
    jenisKelamin: "Pria",
    answers: [],
  });

  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    setFormQuestions((prevFormQuestions) => ({
      ...prevFormQuestions,
      [id]: type === "number" ? Number(value) : value,
    }));
  };

  const handleAnswerChange = (e, questionId, answerValue) => {
    setFormQuestions((prevFormQuestions) => {
      const updatedAnswers = [...prevFormQuestions.answers];
      const answerIndex = updatedAnswers.findIndex(
        (answer) => answer.questionId === questionId
      );

      if (answerIndex >= 0) {
        updatedAnswers[answerIndex].answer = answerValue;
      } else {
        updatedAnswers.push({ questionId, answer: answerValue });
      }

      return { ...prevFormQuestions, answers: updatedAnswers };
    });
  };

  const { data: dataQuestions } = useFetch("/symptoms?page=1&limit=100");
  console.log(formQuestions);
  const jenisKelamin = [
    { label: "Pria", value: "Pria" },
    { label: "Wanita", value: "Wanita" },
  ];

  const handleSubmit = () => {
    console.log(formQuestions, "dari button submit");
  }
  return (
    <div className="h-screen">
      <LayoutQuestion>
        <Card
          className={
            "w-[80dvw] h-96 mx-auto border-cyan-500 py-5 px-10 mt-10  backdrop-blur-xl backdrop-filter bg-white bg-opacity-10"
          }
        >
          <div className="flex flex-col w-full">
            <FormInput
              label={"nama"}
              type={"text"}
              name={"Nama"}
              placeholder={"Input Your Name or Inisial"}
              height={"h-10"}
              width={"w-32"}
              onChange={handleInputChange}
            />
            <FormInput
              label={"umur"}
              type={"number"}
              name={"Umur"}
              placeholder={"Input Your Age"}
              height={"h-10"}
              width={"w-32"}
              onChange={handleInputChange}
            />
            <FormSelect
              label={"jenisKelamin"}
              name={"Jenis Kelamin"}
              options={jenisKelamin}
              onChange={handleInputChange}
            />
          </div>
        </Card>
        {dataQuestions?.data?.map((question, index) => (
          <div key={index}>
            <Card className={"mt-4 w-[80dvw] h-96 mx-auto"}>
              <p>{question.pertanyaan}</p>
              <div className="flex flex-row flex-wrap justify-center">
                <RadioButton
                  label={"Tidak Pernah"}
                  name={question.kode_gejala}
                  id={`1-${question.kode_gejala}`}
                  value={0}
                  onChange={(e) =>
                    handleAnswerChange(e, question.kode_gejala, 0)
                  }
                />
                <RadioButton
                  label={"Kadang Kadang"}
                  name={question.kode_gejala}
                  id={`2-${question.kode_gejala}`}
                  value={0.33}
                  onChange={(e) =>
                    handleAnswerChange(e, question.kode_gejala, 0.33)
                  }
                />
                <RadioButton
                  label={"Lumayan Sering"}
                  name={question.kode_gejala}
                  id={`3-${question.kode_gejala}`}
                  value={0.67}
                  onChange={(e) =>
                    handleAnswerChange(e, question.kode_gejala, 0.67)
                  }
                />
                <RadioButton
                  label={"Sering Sekali"}
                  name={question.kode_gejala}
                  id={`4-${question.kode_gejala}`}
                  value={1}
                  onChange={(e) =>
                    handleAnswerChange(e, question.kode_gejala, 1)
                  }
                />
              </div>
            </Card>
          </div>
        ))}
        <div>
          <button
            className="text-2xl border-2 border-black rounded-lg w-28 h-12"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </LayoutQuestion>
    </div>
  );
};
