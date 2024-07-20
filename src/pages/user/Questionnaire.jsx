import { useState } from "react";
import { Card } from "../../components/card/Card";
import { LayoutQuestion } from "./LayoutQuestion";
import { RadioButton } from "../../components/formRadio/RadioButton";
import { Button } from "../../components/button/Button";

export const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      question:
        "Saya merasa bahwa diri saya menjadi marah karena hal-hal sepele.?",
    },
    {
      id: 2,
      question: "Saya merasa mulut saya sering kering ?",
    },
    {
      id: 3,
      question: "Saya sama sekali tidak dapat merasakan perasaan positif.",
    },
    {
      id: 4,
      question:
        "Saya mengalami kesulitan bernafas (misalnya: sering kali terengah-engah atau tidak dapat bernafas padahal tidak melakukan aktivitas fisik sebelumnya).",
    },
    {
      id: 5,
      question:
        "Saya sepertinya tidak kuat lagi untuk melakukan suatu kegiatan.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className=" h-screen">
      <LayoutQuestion>
        <Card
          className={
            "w-[80dvw] h-[80dvh] mx-auto border-cyan-500 p-10 mt-10  backdrop-blur-xl backdrop-filter bg-white bg-opacity-10"
          }
        >
          {questions.map(
            (question, index) =>
              index === currentQuestionIndex && (
                <div key={question.id}>
                  <p className="font-lato font-medium text-base">
                    Pertanyaan ke 1 dari 21
                  </p>
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl text-center text-slate-800 font-patua mt-8 mb-14 ">
                      {question.question}
                    </h1>
                  </div>
                  <div className="flex flex-row flex-wrap justify-center gap-y-5">
                    <RadioButton
                      label={"Tidak Pernah"}
                      name={"answer"}
                      id={"0"}
                      value={"0"}
                      borderColor={"border-cyan-500"}
                      className={"text-center "}
                    />
                    <RadioButton
                      label={"Kadang Kadang"}
                      name={"answer"}
                      id={"1"}
                      value={"1"}
                      borderColor={"border-cyan-500"}
                      className={"text-center "}
                    />
                    <RadioButton
                      label={"Sering Sekali"}
                      name={"answer"}
                      id={"2"}
                      value={"2"}
                      borderColor={"border-cyan-500"}
                      className={"text-center "}
                    />
                    <RadioButton
                      label={"Sangat Sering"}
                      name={"answer"}
                      id={"3"}
                      value={"3"}
                      borderColor={"border-cyan-500"}
                      className={"text-center "}
                    />
                  </div>
                </div>
              )
          )}
          <div className="flex flex-row gap-4 mt-8 w-full justify-end">
            <Button
              label={"Previous"}
              width={"w-32"}
              height={"h-10"}
              variant={"bg-red-500"}
              textColor={"text-white"}
              fontBold={"font-bold"}
              borderRadius={"rounded-lg"}
              onClick={handlePrevious}
              // disabled={currentQuestionIndex === 0}
            />
            <Button
              label={"Next"}
              width={"w-32"}
              height={"h-10"}
              variant={"bg-cyan-500"}
              textColor={"text-white"}
              fontBold={"font-bold"}
              borderRadius={"rounded-lg"}
              onClick={handleNext()}
              // disabled={currentQuestionIndex === questions.length - 1}
            />
          </div>
        </Card>
      </LayoutQuestion>
    </div>
  );
};
