import { Card } from "../../components/card/Card";
import { LayoutQuestion } from "./LayoutQuestion";
import { RadioButton } from "../../components/formRadio/RadioButton";
import { Button } from "../../components/button/Button";
import { FormInput } from "../../components/form/FormInput";
import { FormSelect } from "../../components/form/FormSelect";
import useFetch from "../../services/useFetch";
import { useState } from "react";
import { postAnswers } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";

export const Questionnaire = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formQuestions, setFormQuestions] = useState({
    nama: "",
    umur: 0,
    jenisKelamin: "Pria",
    answers: [],
  });
  const navigate = useNavigate();

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
  const jenisKelamin = [
    { label: "Pria", value: "Pria" },
    { label: "Wanita", value: "Wanita" },
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await postAnswers(formQuestions);
      setIsLoading(false);
      navigate("/result");
      localStorage.setItem("resultUsers", JSON.stringify(response.data));
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <LayoutQuestion>
        <Card
          className={
            "w-[80dvw] xl:w-[60dvw] h-96 mx-auto border-cyan-500 py-5 px-10 mt-10 bg-white"
          }
        >
          <div className="flex flex-col w-full">
            <FormInput
              label={"nama"}
              type={"text"}
              name={"Nama / Inisial"}
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
        {dataQuestions?.data?.map((questions, index) => (
          <div key={index}>
            <Card
              className={
                "mt-4 w-[80dvw] xl:w-[60dvw] sm:h-[26rem] md:h-96 mx-auto p-4 sm:p-8 border-cyan-500 bg-white"
              }
            >
              <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl text-center font-bold text-wrap px-10">
                {questions.pertanyaan}
              </h1>
              <div className="flex flex-row justify-center gap-8 pt-10 pb-5 sm:pb-0 sm:pt-20 max-w-full h-full">
                <div className="flex flex-col gap-4">
                  <RadioButton
                    label={"Tidak Pernah"}
                    name={questions.kode_gejala}
                    id={`1-${questions.kode_gejala}`}
                    value={0}
                    onChange={(e) =>
                      handleAnswerChange(e, questions.kode_gejala, 0)
                    }
                  />
                  <RadioButton
                    label={"Kadang Kadang"}
                    name={questions.kode_gejala}
                    id={`2-${questions.kode_gejala}`}
                    value={0.33}
                    onChange={(e) =>
                      handleAnswerChange(e, questions.kode_gejala, 0.33)
                    }
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <RadioButton
                    label={"Lumayan Sering"}
                    name={questions.kode_gejala}
                    id={`3-${questions.kode_gejala}`}
                    value={0.67}
                    onChange={(e) =>
                      handleAnswerChange(e, questions.kode_gejala, 0.67)
                    }
                  />
                  <RadioButton
                    label={"Sering Sekali"}
                    name={questions.kode_gejala}
                    id={`4-${questions.kode_gejala}`}
                    value={1}
                    onChange={(e) =>
                      handleAnswerChange(e, questions.kode_gejala, 1)
                    }
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
        <div className="max-w-full flex justify-center pt-4">
          <Button
            type={"submit"}
            label={"Submit"}
            variant={"bg-cyan-600"}
            className={
              "tracking-wider uppercase shadow-lg hover:scale-105 transition-all duration-[670ms] mb-14"
            }
            textColor={"text-white"}
            fontBold={"font-bold"}
            width={"w-[80dvw]"}
            height={"h-14"}
            borderRadius={"rounded-lg"}
            onClick={handleSubmit}
          />
        </div>
      </LayoutQuestion>
    </div>
  );
};
