import React from "react";

function Footer() {

  //display a msg on clicking a button for 5 seconds and then hide it
  const [showMsg, setShowMsg] = React.useState(false);  
  function handleClick() {
    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 5000);
  }

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
                  TeachFreelance Forum : This Portal is a one-stop solution
                  that bridges the gap between institutes and freelancers.
                </p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                <p>
                  <a href='/institute-register' className='text-reset'>
                    Institute Registration
                  </a>
                </p>
                <p>
                  <a href='/register' className='text-reset'>
                    Freelancer Registration
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Home
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
                      type='email'
                      placeholder='Email Id'
                      aria-label="Recipient's username"
                      aria-describedby='button-addon2'
                    />
                    <button onClick={handleClick}
                      className='btn btn-success'
                      id='button-addon2'
                      type='button'
                    >
                      <i className='fas fa-paper-plane'></i>
                    </button>                                                
                  </div>
                </form>
                <span className="text-success " id="LNErr">{showMsg && <p>Successfully subscribed</p>}</span>
                <div>
                  <a href='https://github.com/gauravsuryawanshi191/TeachFreelanceForum' className='me-4 text-reset'>
                    <i className='fab fa-github'></i>Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='text-center p-2 bg-secondary text-white'>
        <span> © 2024 TechFreelance Forum. All rights are reserved</span>
          

        </div>
      </footer>
    </>
  );
}
export default Footer;
