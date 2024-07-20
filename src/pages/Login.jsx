import { Button } from "../components/button/Button";
import { Card } from "../components/card/Card";
import { FormInput } from "../components/form/FormInput";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center font-lato bg-gradient-to-b from-teal-400 to-cyan-500">
        <Card
          className={
            "w-[90vw] sm:w-[77vw] md:w-[60vw] xl:w-[50vw] h-[80vh] py-4 px-10 sm:px-24 bg-white/30 shadow-lg shadow-teal-600 border-none"
          }
        >
          <h1 className="text-5xl text-center mb-16 text-zinc-700 font-extrabold uppercase tracking-widest mt-4">
            Login
          </h1>
          <FormInput
            label={"email"}
            type={"email"}
            name={"Email"}
            placeholder={"Masukkan Email"}
            height={"h-12"}
            width={"w-full"}
            textColor={"text-zinc-700"}
            required
          />
          <FormInput
            label={"password"}
            type={"password"}
            name={"Password"}
            placeholder={"Masukkan Password"}
            height={"h-12"}
            width={"w-full"}
            textColor={"text-zinc-700"}
            required
          />
          <Button
            label={"Login"}
            variant={"bg-gradient-to-r from-pink-500 to-violet-600"}
            className={"tracking-wider uppercase shadow-lg"}
            textColor={"text-white"}
            fontBold={"font-bold"}
            width={"w-[100%]"}
            height={"h-10"}
            type={"submit"}
            borderRadius={"rounded-lg"}
          />
          <div className="flex flex-row items-center gap-4 mt-3">
            <div className="w-full h-2 border-b-2 border-cyan-800 shadow-md"></div>
            <span className="text-xl font-bold tracking-widest">OR</span>
            <div className="w-full h-1 border-b-2 border-cyan-800 shadow-md"></div>
          </div>
          <Button
            label={"Register"}
            variant={"bg-gradient-to-r from-rose-400 to-orange-300"}
            className={"tracking-wider uppercase shadow-lg"}
            width={"w-[100%]"}
            height={"h-10"}
            fontBold={"font-bold"}
            textColor={"text-white"}
            type={"button"}
            borderRadius={"rounded-lg"}
          />
        </Card>
      </div>
    </>
  );
};
