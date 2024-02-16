import React from "react";

export default function Jumbotran() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row featurette'>
          <div className='col-md-7'>
            <br/><br/>
            <h1 className='animated slideInLeft featurette-heading fw-bold'>
              Together WE CAN... <br />
            </h1>
            <br/><br/>
            <p
              className='animated fadeInUp lead'
              style={{ animationDelay: "0.8s" }}
            >
              TeachFreelance Forum : It's one of the top job sites in India,
              with many institutes listing jobs online. Our only mission is
              to bridge the gap between Institute and Freelancers.
            </p>
          </div>
          <br/>

          <div className='col-md-5'>
            <img
              src='/Assets/Images/HomePage/intro.png'
              alt='intro-img'
              className='img-responsive img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  );
}
