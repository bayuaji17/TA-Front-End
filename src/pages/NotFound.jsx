import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col w-screen justify-center items-center">
      <h1 className="text-7xl my-4">NOT FOUND</h1>
      <p className="my-4">What&rsquo;s Wrong With you ?</p>
      <button className="w-48 h-12 border-2 bg-cyan-600 rounded-xl my-4" onClick={handleNavigate}>
        Back To Home
      </button>
    </div>
  );
};
