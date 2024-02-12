import React from "react";

function Header() {

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand fw-bold mb-2 text-success' href='/'>
          <h1>
            <img
              src='/Assets/Images/HomePage/Logo2.png'
              alt='logo'
              width='50'
              height='50'
              className='d-inline-block align-text-top'
            />
            &nbsp;&nbsp; TeachFreelance Forum</h1>
            
            
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse flex-row-reverse'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link myNav' aria-current='page' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link myNav' href='/jobs'>Search Jobs</a>
              </li>              
              <li className='nav-item'>
                <a className='nav-link myNav' href='/contact' tabIndex='-1' aria-disabled='true'>Contact Us</a>
              </li>              
              <li className='nav-item'>
              <a className='nav-link myNav' href='/institute-login'>
                 Institute Login
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link myNav' href='/login'>
                 Freelancer Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
