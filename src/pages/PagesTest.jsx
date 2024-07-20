import { useEffect, useState } from "react";
import { Button } from "../components/button/Button";
import { Card } from "../components/card/Card";
import { RadioButton } from "../components/formRadio/RadioButton";
import useFetch from "../services/useFetch";
import { LayoutQuestion } from "./user/LayoutQuestion";

export const PagesTest = () => {
  const { data, error, isLoading } = useFetch("/disease");
  console.log(data);

  const [question, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  useEffect(() => {
    if (data) {
      setQuestion(data);
    }
  }, [data]);

  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }

  const handleRadioButtonClick = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Optionally handle the end of the questionnaire, e.g., submit answers
      console.log("End of questionnaire");
    }
  };

  const currentQuestion = question[currentQuestionIndex];

  return (
    <div>
      <LayoutQuestion>
        <Card className={"w-full h-[80dvh] bg-blue-400 p-10 mt-10"}>
        {currentQuestion && (
            <div key={currentQuestion.id}>
              <h1>{currentQuestion.questionText}</h1>
              <RadioButton
                label={"Tidak Pernah"}
                name={`answer_${currentQuestion.id}`}
                id={`answer_${currentQuestion.id}_0`}
                value={"0"}
                onClick={handleRadioButtonClick}
              />
              <RadioButton
                label={"Kadang Kadang"}
                name={`answer_${currentQuestion.id}`}
                id={`answer_${currentQuestion.id}_1`}
                value={"1"}
                onClick={handleRadioButtonClick}
              />
              <RadioButton
                label={"Sering Sekali"}
                name={`answer_${currentQuestion.id}`}
                id={`answer_${currentQuestion.id}_2`}
                value={"2"}
                onClick={handleRadioButtonClick}
              />
              <RadioButton
                label={"Sangat Sering"}
                name={`answer_${currentQuestion.id}`}
                id={`answer_${currentQuestion.id}_3`}
                value={"3"}
                onClick={handleRadioButtonClick}
              />
            </div>
          )}
          {/* {question.map((questionCode, index) => (
            <div key={index}>
              <h1>{questionCode.questionText}</h1>
              <RadioButton
                label={"Tidak Pernah"}
                name={`answer_${question.id}`}
                id={`answer_${question.id}_0`}
                value={"0"}
              />
              <RadioButton
                label={"Kadang Kadang"}
                name={`answer_${question.id}`}
                id={`answer_${question.id}_1`}
                value={"1"}
              />
              <RadioButton
                label={"Sering Sekali"}
                name={`answer_${question.id}`}
                id={`answer_${question.id}_2`}
                value={"2"}
              />
              <RadioButton
                label={"Sangat Sering"}
                name={`answer_${question.id}`}
                id={`answer_${question.id}_3`}
                value={"3"}
              />
            </div>
          ))} */}

          <div className="flex flex-row gap-4 mt-8 w-full justify-end">
            <Button
              label={"Previous"}
              width={"w-32"}
              height={"h-10"}
              variant={"bg-red-500"}
              textColor={"text-white"}
              fontBold={"font-bold"}
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                }
              }}
            />
            <Button
              label={"Next"}
              width={"w-32"}
              height={"h-10"}
              variant={"bg-cyan-500"}
              textColor={"text-white"}
              fontBold={"font-bold"}
              onClick={handleRadioButtonClick}
            />
          </div>
        </Card>
      </LayoutQuestion>
    </div>
  );
};
