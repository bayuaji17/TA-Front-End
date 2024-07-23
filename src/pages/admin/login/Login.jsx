import { Button } from "../../../components/button/Button";
import { Card } from "../../../components/card/Card";
import { FormInput } from "../../../components/form/FormInput";
import { useState } from "react";
import { loginAdmin } from "../../../services/login-admin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

export const Login = () => {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormLogin({ ...formLogin, [id]: value });
  };

  const handleLoginSubmit = async () => {
    setIsLoading(true)
    const formAdmin = {
      username: formLogin.username,
      password: formLogin.password,
    };
    try {
      const response = await loginAdmin(formAdmin);
      setIsLoading(false)
      CookieStorage.set(CookieKeys.AuthToken,response?.data?.token)
      toast.success(response?.data?.message)
      navigate("/dashboard")
    } catch (error) {
        setIsLoading(false)
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center font-lato bg-cyan-200">
        <Card
          className={
            "w-[90vw] sm:w-[77vw] md:w-[60vw] xl:w-[50vw] h-[80vh] py-4 px-10 sm:px-24 bg-white/30 shadow-lg shadow-teal-600 border-none"
          }
        >
          <h1 className="text-5xl text-center mb-16 text-zinc-700 font-extrabold uppercase tracking-widest mt-4">
            Login
          </h1>
          <FormInput
            label={"username"}
            type={"text"}
            name={"Username"}
            placeholder={"Username"}
            height={"h-12"}
            width={"w-full"}
            textColor={"text-zinc-700"}
            value={formLogin.username}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label={"password"}
            type={"password"}
            name={"Password"}
            placeholder={"Password"}
            height={"h-12"}
            width={"w-full"}
            textColor={"text-zinc-700"}
            value={formLogin.password}
            onChange={handleInputChange}
            required
          />
          <Button
            label={isLoading ? "Loading" : "LOGIN"}
            variant={"bg-gradient-to-r from-pink-500 to-violet-600"}
            className={"tracking-wider uppercase shadow-lg hover:scale-105 transition-all duration-[650ms] "}
            textColor={"text-white"}
            fontBold={"font-bold"}
            width={"w-[100%]"}
            height={"h-10"}
            type={"submit"}
            borderRadius={"rounded-lg"}
            onClick={handleLoginSubmit}
          />
        </Card>
      </div>
    </>
  );
};
