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

// Institute imports
// import DashboardLayout from "./components/Employer/Layout";
// import Dashboard from "./Pages/employer/Dashboard";
// import ApplicantsPerJob from "./Pages/employer/ApplicantsPerJob";
// import ChangePassword from "./Pages/employer/ChangePassword";
// import PostJob from "./Pages/employer/PostJob";
// import ViewAllJobs from "./Pages/employer/viewAllJobs";
// import EditJob from "./Pages/employer/EditJob";
// import DeleteJob from "./Pages/employer/DeleteJob";
// import SendMessage from "./Pages/employer/SendMessage";
import InstituteDashboardLayout from "./components/institute/Layout";
import InstituteDashboard from "./Pages/institute/Dashboard";
import InstituteApplicantsPerJob from "./Pages/institute/ApplicantsPerJob";
import InstituteChangePassword from "./Pages/institute/ChangePassword";
import InstitutePostJob from "./Pages/institute/PostJob";
import InstituteViewAllJobs from "./Pages/institute/viewAllJobs";
import InstituteEditJob from "./Pages/institute/EditJob";
import InstituteDeleteJobs from "./Pages/institute/DeleteJobs";
import InstituteSendMessage from "./Pages/institute/SendMessage";

// Freelancer imports
// import UserLayout from "./components/User/Layout";
// import GetApplicantDetails from "./Pages/user/Dashboard";
// import UserJobsApplied from "./Pages/user/JobsApplied";
// import UserChangePassword from "./Pages/user/ChangePassword";
// import AddQualification from "./Pages/user/AddQualification";
// import SearchJob from "./Pages/user/SearchJob";
// import Apply from "./Pages/user/Apply";
// import DeleteUser from "./Pages/user/DeleteUser";
// import DeletedAcc from "./Pages/user/DeletedAcc";
import FreelancerLayout from "./components/Freelancer/Layout";
import GetApplicantDetails from "./Pages/Freelancer/Dashboard";
import FreelancerJobsApplied from "./Pages/Freelancer/JobsApplied";
import FreelancerChangePassword from "./Pages/Freelancer/ChangePassword";
import AddQualification from "./Pages/Freelancer/AddQualification";
import SearchJob from "./Pages/Freelancer/SearchJob";
import Apply from "./Pages/Freelancer/Apply";
import DeletedAcc from "./Pages/Freelancer/DeletedAcc";
import DeleteFreelancer from "./Pages/Freelancer/DeleteFreelancer";
import CheckResponse from "./Pages/Freelancer/CheckResponse";

//Admin imports
import AdminDashboardLayout from "./components/Admin/Layout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PasswordChange from "./Pages/Admin/PasswordChange";
import GetAllFreelancerDetails from "./Pages/Admin/GetAllFreelancerDetails";
import InstituteVerify from "./Pages/Admin/InstituteVerify";
import DeleteInstitute from "./Pages/Admin/DeleteInstitute";
import AdminLogin from "./Pages/Admin/AdminLogin";
import InstituteEditprofile from "./Pages/institute/Editprofile";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
              <>
                <Jumbotran />
                <HowItWork />
              </>
            }
          />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='login' element={<Login />} />
          <Route path='institute-login' element={<InstituteLogin />} />
          <Route path='register' element={<Register />} />
          <Route path='institute-register' element={<InstituteRegister/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='jobs' element={<JobList />} />
          <Route path='ChangePassword' element={<ChangePasswordDashboard/>} />
          <Route path='*' element={<Error />} />
        </Route>

        {/* <Route path='/user/dashboard' element={<UserLayout />}>
          <Route index element={<GetApplicantDetails />} />
          <Route path='job-applied' element={<UserJobsApplied />} />
          <Route path='AddQualification' element={<AddQualification />} />
          <Route path='change-password' element={<UserChangePassword />} />        
          <Route path='search-job' element={<SearchJob/>} /> 
          <Route path='apply-job' element={<Apply/>} /> 
          <Route path='delete-user' element={<DeleteUser/>} /> 
          <Route path='acc-deleted' element={<DeletedAcc/>} />
          <Route path='check-response' element={<CheckResponse/>} />
        </Route> */}

        <Route path='/freelancer/dashboard' element={<FreelancerLayout />}>
          <Route index element={<GetApplicantDetails />} />
          <Route path='job-applied' element={<FreelancerJobsApplied />} />
          <Route path='AddQualification' element={<AddQualification />} />
          <Route path='change-password' element={<FreelancerChangePassword />} />        
          <Route path='search-job' element={<SearchJob/>} /> 
          <Route path='apply-job' element={<Apply/>} /> 
          <Route path='delete-freelancer' element={<DeleteFreelancer/>} /> 
          <Route path='acc-deleted' element={<DeletedAcc/>} />
          <Route path='check-response' element={<CheckResponse/>} />
        </Route>

        {/* <Route path='/employer/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='applicants-per-job' element={<ApplicantsPerJob />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='post-job' element={<PostJob />} />
          <Route path='view-all-jobs' element={<ViewAllJobs />} />
          <Route path='edit-job' element={<EditJob />} />
          <Route path='edit-job/:id' element={<EditJob />} />
          <Route path='delete-job' element={<DeleteJob />} />
          <Route path='send-message' element={<SendMessage />} />
        </Route> */}

        <Route path='/institute/dashboard' element={<InstituteDashboardLayout/>}>
          <Route index element={<InstituteDashboard />} />
          <Route path='edit-profile' element={<InstituteEditprofile />} />
          <Route path='applicants-per-job' element={<InstituteApplicantsPerJob />} />
          <Route path='change-password' element={<InstituteChangePassword />} />
          <Route path='post-job' element={<InstitutePostJob />} />
          <Route path='view-all-jobs' element={<InstituteViewAllJobs />} />
          <Route path='edit-job' element={<InstituteEditJob />} />
          <Route path='edit-job/:instituteId/:advertisementId' element={<InstituteEditJob />} />
          <Route path='delete-job' element={<InstituteDeleteJobs />} />
          <Route path='send-message' element={<InstituteSendMessage />} />
          
        </Route>

        <Route path='/Admin/dashboard' element={<AdminDashboardLayout/>}>
          <Route index element={<AdminDashboard/>} />
          <Route path='institute-verify' element={<InstituteVerify/>} /> 
          <Route path='institute-delete' element={<DeleteInstitute/>} /> 
          <Route path='change-adminpassword' element={<PasswordChange />} />
          <Route path='get-freelancer' element={<GetAllFreelancerDetails/>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
