import React from "react";

function Footer() {
  return (
    <>
      <footer className='text-center text-lg-start bg-light'>
        <section className='pt-1'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fas fa-gem me-3'></i>TeachFreelance Forum Portal
                </h6>
                <p style={{ textAlign: "justify" }}>
                  TeachFreelance Forum : TeachFreelance Forum Portal is a one-stop solution
                  that bridges the gap between institutes and freelancers.
                </p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                <p>
                  <a href='/blog' className='text-reset'>
                    Blog
                  </a>
                </p>
                <p>
                  <a href='/register' className='text-reset'>
                    Register
                  </a>
                </p>
                <p>
                  <a href='/jobs' className='text-reset'>
                    Search Jobs
                  </a>
                </p>
              </div>
              
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  Subscribe to Newsletter
                </h6>
                <form action='/'>
                  <div className='input-group mb-3'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Email Id'
                      aria-label="Recipient's username"
                      aria-describedby='button-addon2'
                    />
                    <button
                      className='btn btn-success'
                      id='button-addon2'
                      type='button'
                    >
                      <i className='fas fa-paper-plane'></i>
                    </button>
                  </div>
                </form>
                <div>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-google'></i>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='/' className='me-4 text-reset'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='text-center p-2 bg-secondary text-white'>
          Designed by <br/> TechFreelance Forum team
        </div>
      </footer>
    </>
  );
}
export default Footer;
