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
import InstituteLogin from "./Pages/InstituteLogin"; // company to institute
import InstituteRegister from "./Pages/InstituteRegister";


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
          <Route path='login' element={<Login />} />
          <Route path='institute-login' element={<InstituteLogin />} />
          <Route path='register' element={<Register />} />
          <Route path='institute-register' element={<InstituteRegister/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='jobs' element={<JobList />} />
          <Route path='ChangePassword' element={<ChangePasswordDashboard/>} />
          <Route path='*' element={<Error />} />
        </Route>

      </Routes>
    </>
  );
};
export default App;
