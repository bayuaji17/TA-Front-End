import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/admin/login/Login";
import { Dashboard } from "../pages/admin/Dashboard";
import { Symptom } from "../pages/admin/symptom/Symptom";
import { Disease } from "../pages/admin/disease/Disease";
import { RulesDisease } from "../pages/admin/rules/RulesDisease";
import { NotFound } from "../pages/NotFound";
import { Questionnaire } from "../pages/user/Questionnaire";
import { Relation } from "../pages/admin/relation/Relation";
import { ResultQuestions } from "../pages/user/result-questions/ResultQuestions";
import Protected from "../components/Protected";

export const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loginadmin" element={<Login />} />
        {/* Admin Area Page */}
        <Route
          path="dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />

        <Route
          path="symptom"
          element={
            <Protected>
              <Symptom />
            </Protected>
          }
        />
        <Route
          path="disease"
          element={
            <Protected>
              <Disease />
            </Protected>
          }
        />
        <Route
          path="rules"
          element={
            <Protected>
              <RulesDisease />
            </Protected>
          }
        />
        <Route
          path="relation"
          element={
            <Protected>
              <Relation />
            </Protected>
          }
        />
        {/*End Admin Area Page */}
        {/* User Area Pages */}
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path="result" element={<ResultQuestions />} />
        {/* End User Area Pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
