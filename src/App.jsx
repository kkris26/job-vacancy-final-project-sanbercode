import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import ManageData from "./quiz-3/ManageData";
import Home from "./final-project/Home";
import JobVacancy from "./final-project/JobVacancy";
import JobDetails from "./final-project/JobDetails";
import DashboardHome from "./final-project/pages/dashboard/DashboardHome";
import ListJobVacancy from "./final-project/pages/dashboard/ListJobVacancy";
import FormJobVacancy from "./final-project/pages/dashboard/FormJobVacancy";
import Profile from "./final-project/pages/dashboard/Profile";
import ChangePassword from "./final-project/pages/dashboard/ChangePassword";
import DashboardLayout from "./final-project/pages/dashboard/DashboardLayout";
import RegisterPage from "./final-project/pages/RegisterPage";
import LoginPage from "./final-project/pages/LoginPage";
import { GlobalProvider } from "./final-project/context/GlobalContext";
import CekLogin from "./final-project/utils/CekLogin";
import LayoutAuth from "./final-project/layout/LayoutAuth";
import NotFound from "./final-project/404";
import MainLayout from "./final-project/layout/MainLayout";

function AppRoutes() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="job-vacancy" element={<JobVacancy />} />
            <Route path="job-vacancy/:jobId" element={<JobDetails />} />
            <Route path="/manage-data" element={<ManageData />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <CekLogin>
                <DashboardLayout />
              </CekLogin>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="list-job-vacancy" element={<ListJobVacancy />} />
            <Route
              path="list-job-vacancy/create"
              element={<FormJobVacancy />}
            />
            <Route path="list-job-vacancy/form" element={<FormJobVacancy />} />
            <Route
              path="list-job-vacancy/edit/:idJobs"
              element={<FormJobVacancy />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
          <Route element={<LayoutAuth />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
