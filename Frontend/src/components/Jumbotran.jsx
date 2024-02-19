import React from "react";

export default function Jumbotran() {
  return (
    <>
      <div className='container pt-3'>
        <div className='row featurette'>
          <div className='col-md-7'>
            <br/><br/>
            <h1 className='animated slideInLeft featurette-heading fw-bold'>
             Our Mission
            </h1>
            <br></br>
            <p
              className='animated fadeInUp lead'
              style={{ animationDelay: "0.8s" }}
            >
              "We aim to provide a platform that allows users of all ages and skill levels to learn, grow, and connect. 
              Our mission is to empower freelancers  by seamlessly linking them with job opportunities from institutes. 
              We prioritize user experience by enabling freelancers to explore job openings, review responses from different intitutes.              
              For institutes, we facilitate effortless profile creation, job posting, freelancer selection. Through our platform, 
              we aspire to streamline the freelancer hiring process, promoting efficiency and satisfaction for all stakeholders."
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
