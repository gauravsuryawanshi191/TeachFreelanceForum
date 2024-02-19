import React from "react";

export default function HowItWork() {
  return (
    <>
      <section className='p-5 text-center mb-4'>
        <section className='text-center'>
          <h2>How does it work?</h2>
          <p>
            Create your Free Account now
            <br /> and Start Exploring the World of thousands of jobs listed
            with us.
          </p>
          <div className='pt-5'></div>
          <div className='row'>
            <div className='col-lg-4 col-md-12 mb-4'>
              <img
                src='/Assets/Images/HomePage/user.png'
                width='35'
                height='40'
                alt='user-icon'
                className=''
              />
              <h4>Create an Account For Freelancer</h4>
              <p>
                Go to The <a href='/login'>Login Page</a>, if You Already Have an
                Account Just Sign in to Your Account Otherwise You Can Create a
                Free Account by Tapping to <a href='/Register'>Register now</a>.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 mb-4'>
              <img
                src='/Assets/Images/HomePage/Search.png'
                width='45'
                height='45'
                alt=''
                className=''
              />
              <h4>Search Jobs</h4>

              <p>
                After Successful Login, you can Search Thousands of Jobs Listed
                on Our Platform. Simply search for a Job and just click Apply.
              </p>
            </div>
            <div className='col-lg-4 col-md-6 mb-4'>
              <img
                src='/Assets/Images/HomePage/Trophy2.png'
                width='35'
                height='40'
                alt='trophy-img'
                className=''
              />
              <h4>Apply</h4>
              <p>
                Search for a Job and just click Apply. Check your Dashboard
                and Email for Acceptance and any Further Details Required by the Institute.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
