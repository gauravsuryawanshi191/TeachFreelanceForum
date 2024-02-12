import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar=()=>{
  const e=(window.localStorage.getItem('freelancer'));
  function handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('freelancer');
    window.location.replace("/");
    
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light'>
            <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white '>
              <a
                href='/'
                className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none'>
                <span className='fs-5 d-none d-sm-inline'><img src='/user-icon.png' alt='usericon' width='100' height='100' /></span>
              </a>
              <a href='/' className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none'>
                <span className='fs-5 d-none d-sm-inline'>Hello {e.replace(/["]+/g, '')} </span>
              </a>
              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                <li>
                  <a
                    href='/freelancer/dashboard' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-solid fa-gauge'></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                  </a>
                </li>
                
                
                <li>
                  <a href='/freelancer/dashboard/search-job' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-brands fa-bootstrap'></i>
                    <span className='ms-2 d-none d-sm-inline'>Search Job</span>
                  </a>
                </li>

                <li>
                  <a href='/freelancer/dashboard/check-response' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-brands fa-bootstrap'></i>
                    <span className='ms-2 d-none d-sm-inline'>Check Institute Response</span>
                  </a>
                </li>

                
                
                <li>
                  <a href='/freelancer/dashboard/addQualification' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-brands fa-product-hunt'></i>
                    <span className='ms-2 d-none d-sm-inline'>Add Qualification</span>
                  </a>
                </li>
                <li>
                  <a href='/freelancer/dashboard/change-password' className='nav-link px-0 align-middle pb-4'>
                    <i className='fa-brands fa-bootstrap'></i>
                    <span className='ms-2 d-none d-sm-inline'>Change Password</span>
                  </a>
                </li>
                <li>
                  <a
                    href='/freelancer/dashboard/delete-freelancer'
                    className='nav-link px-0 align-middle pb-4'
                  >
                    <i className='fa-solid fa-table'></i>
                    <span className='ms-2 d-none d-sm-inline'>
                      Delete Your Account
                    </span>
                  </a>
                </li>
                <li>
                  <a href='/freelancer/dashboard/signout' className='nav-link px-0 align-middle pb-4' onClick={handleLogout}>
                    <i className='fa-solid fa-person-walking'></i>
                    <span className='ms-2 d-none d-sm-inline'>Signout</span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className='col'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;