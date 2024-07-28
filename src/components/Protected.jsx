import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { toast } from "react-toastify";
function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkValidationUser = async () => {
      try {
        const checkToken = CookieStorage.get(CookieKeys.AuthToken);
        if (!checkToken) {
          toast.error("You must log in first before accessing the dashboard!");
          navigate("/loginadmin");
          return;
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.")
        navigate("/loginadmin");
      }
    };

    checkValidationUser();
  }, [navigate]);

  return children;
}

export default Protected;
