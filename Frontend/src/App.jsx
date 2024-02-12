import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Jumbotran from "./components/Jumbotran";
import HowItWork from "./components/HowItWork";
import Login from "./Pages/Login";
import JobList from "./Pages/JobList";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import ChangePasswordDashboard from "./Pages/ChangePassword";
import Error from "./Pages/Error";
import InstituteLogin from "./Pages/InstituteLogin";
import InstituteRegister from "./Pages/InstituteRegister";

//Admin imports
import AdminDashboardLayout from "./components/Admin/Layout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PasswordChange from "./Pages/Admin/PasswordChange";
import GetAllFreelancerDetails from "./Pages/Admin/GetAllFreelancerDetails";
import InstituteVerify from "./Pages/Admin/InstituteVerify";
import DeleteInstitute from "./Pages/Admin/DeleteInstitute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
              <>
                <Jumbotran />
                <HowItWork />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="institute-login" element={<InstituteLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="institute-register" element={<InstituteRegister />} />
          <Route path="contact" element={<Contact />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="ChangePassword" element={<ChangePasswordDashboard />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/Admin/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="institute-verify" element={<InstituteVerify />} />
          <Route path="institute-delete" element={<DeleteInstitute />} />
          <Route path="change-adminpassword" element={<PasswordChange />} />
          <Route path="get-freelancer" element={<GetAllFreelancerDetails />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
