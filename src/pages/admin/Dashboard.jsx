import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";
import useFetch from "../../services/useFetch";
import { Layout } from "./Layout";

export const Dashboard = () => {
  const {data:dataDisease} = useFetch("/disease")
  const {data:dataSymptom} = useFetch("/symptoms")
  const {data:dataRules} = useFetch("/rules")
  return (
    <div>
      <Layout>
        <Navbar />
        <main className="p-10">
          <div className="grid grid-cols-8 gap-4 w-full">
            <div className="col-span-6">
              <Card className="w-full h-72 bg-[#a2eadc] p-8 flex items-center justify-center border-none">
                <h1 className="text-black font-bold text-3xl text-center uppercase  leading-relaxed">
                  Implementation of the Certainty Factor method in an expert
                  system for diagnosing mental health disorders
                </h1>
              </Card>
            </div>
            <div className="col-span-2">
              <Card className="w-full h-72 p-8 bg-[#ffdda7] border-none flex flex-col items-center justify-center gap-y-7">
                <h1 className="text-black font-bold text-3xl text-center uppercase">
                  Disease
                </h1>
                <p className="text-7xl font-bold text-center text-black">{dataDisease?.data?.length}</p>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="w-full h-52 p-8 bg-[#BFF6C3] flex items-center justify-center border-none">
                <h1 className="text-black font-semibold text-6xl text-center uppercase">
                  <span>{dataSymptom?.pagination?.totalGejala}</span> Symptom
                </h1>
              </Card>
            </div>
            <div className="col-span-4">
              <Card className="w-full h-52 bg-[#c9a2e4] flex items-center justify-center border-none">
                <h1 className="text-black font-semibold text-6xl text-center uppercase">
                  <span>{dataRules?.pagination?.totalRules}</span> rules
                </h1>
              </Card>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};
