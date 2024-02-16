import React from "react";
import { Outlet } from "react-router-dom";

const InstituteSidebar = () => {
 const e =  JSON.parse(window.localStorage.getItem('instituteName'));
  return (
    <>
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light'>
            <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              <a
                href='/'
                className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none'
              >
                <span className='fs-5 d-none d-sm-inline'>
                  <img
                    src='/user-icon.png'
                    alt='usericon'
                    width='100'
                    height='100'
                  />
                </span>
              </a>
              <a href='/' className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none'>
                <span className='fs-5 d-none d-sm-inline'>Hello {e} </span>
              </a>
              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>                
                <li>
                  <a href='/institute/dashboard' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-solid fa-gauge'></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href='/institute/dashboard/edit-profile' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-solid fa-gauge'></i>
                    <span className='ms-2 d-none d-sm-inline'>Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href='/institute/dashboard/post-job' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>Post Job Advertisement</span></a>
                </li>
                <li>
                  <a href='/institute/dashboard/view-all-jobs' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>View All Job Advertisements</span></a>
                </li>
                <li>
                  <a href='/institute/dashboard/applicants-per-job' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>View Applications</span></a>
                </li>
                <li>
                  <a href='/institute/dashboard/view-hired-freelancers' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>Hired Teachers</span></a>
                </li>
                <li>
                  <a href='/institute/dashboard/delete-job' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>Delete Job</span></a>
                </li>
                
                <li><a href='/institute/dashboard/change-password' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-brands fa-bootstrap'></i>
                    <span className='ms-2 d-none d-sm-inline'>Change Password</span>
                  </a>
                </li>                
                <li>
                  <a href='/' className='nav-link px-0 align-middle pb-4' >
                    <i className='fa-solid fa-person-walking'></i>
                    <span className='ms-2 d-none d-sm-inline'>Signout</span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className='col py-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default InstituteSidebar;