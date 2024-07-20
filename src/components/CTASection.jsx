import { Button } from "../components/button/Button";
export const CTASection = () => {
  return (
    <div className="container mb-10">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="text-center text-2xl md:text-3xl mt-10 font-lato text-cyan-800 font-bold">
          Ambil Langkah Menuju Pikiran yang Lebih Sehat.
          <br /> Cek Gratis Sekarang!
        </h1>
        <a href="/questionnaire">
          <Button
            label={"Mulai Tes Skrining"}
            variant={"bg-cyan-500"}
            width={"w-80"}
            height={"h-[3rem]"}
            fontBold={"font-bold"}
            textColor={"text-white"}
            borderRadius={"rounded-full"}
          />
        </a>
      </div>
    </div>
  );
};
