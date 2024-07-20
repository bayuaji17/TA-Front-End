import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/admin/Dashboard";
import { Symptom } from "../pages/admin/symptom/Symptom";
import { Disease } from "../pages/admin/disease/Disease";
import { RulesDisease } from "../pages/admin/rules/RulesDisease";
import { Patient } from "../pages/admin/patient/Patient";
import { NotFound } from "../pages/NotFound";
import { Questionnaire } from "../pages/user/Questionnaire";
import { PagesTest } from "../pages/PagesTest";

export const RoutesPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Admin Area Page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptom" element={<Symptom />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/rules" element={<RulesDisease />} />
        <Route path="/patient" element={<Patient />} />
        {/*End Admin Area Page */}
        {/* User Area Pages */}

        <Route path="/testing" element={<PagesTest />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        {/* End User Area Pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
