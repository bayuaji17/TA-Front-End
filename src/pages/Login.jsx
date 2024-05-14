import { Button } from "../components/button/Button";
import { Card } from "../components/card/Card";
import { FormInput } from "../components/form/FormInput";

export const Login = () => {
  return (
    <>
      {/* <div className="max-w-full flex justify-center max-h-screen items-center ">
        <div className="flex w-full h-screen justify-center items-center">
          <div className="md:w-[50svw] h-[70svh] border-2 bg-[#E5F4FA] px-2 rounded-lg border-black shadow-[0.6rem_0.6rem_0_rgba(0,0,0,0.8)]">
            <h1 className="text-center font-mono my-8 text-3xl ">LOGIN USER</h1>
            <FormInput />
            <FormInput />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <Card className={"w-[50vw] h-[70vh] bg-[#E5F4FA] p-7"}>
          <h1 className="text-3xl text-center mb-20 font-mono">Login</h1>
          <FormInput
            label={"email"}
            type={"email"}
            name={"Email"}
            placeholder={"Masukkan Email"}
            required
          />
          <FormInput
            label={"password"}
            type={"password"}
            name={"Password"}
            placeholder={"Masukkan Password"}
            required
          />
          <div className="flex flex-row gap-4">
            <Button
              label={"login"}
              variant={"bg-secondary"}
              className={"mt-5 w-44 h-10 text-white"}
            />
          </div>
        </Card>
      </div>
    </>
  );
};
