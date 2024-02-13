import React, { useState, useEffect } from "react";
import axios from 'axios';

const GetApplicantDetails = () => {
  
  const [user, setUser] = useState([]);
  
  const init = () => {
    
    const e = JSON.parse(window.localStorage.getItem('freelancer'));
    
    console.log(e);
    
    axios.get(`http://localhost:8080/api/freelancer/${e}`)
      .then(response => {
        console.log('Printing  data : ', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => { init(); }, []);
  
  return (
    <div className="container">
      <h3>Personal Information</h3>
      <div className="row pt-2">
        <div className="col-md-4">
          <div className="material-textfield mb-3">
            <input type="text" className="input form-control" value={user.firstName} disabled />
            <label className="label">First Name</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="material-textfield mb-3">
            <input type="text" className="input form-control" value={user.lastName} disabled />
            <label className="label">Last Name</label>
          </div>
        </div>
      </div>

      <div className="row pt-1">
        <div className="col-md-4">
          <div className="material-textfield mb-3">
            <input type="text" className="input form-control" value={user.email} disabled />
            <label className="label">Email Id</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="material-textfield mb-3">
            <input type="text" className="input form-control" value={user.mobileNumber} disabled />
            <label className="label">Mobile Number</label>
          </div>
        </div>        
      </div>
      <h3 className="pt-5">FAQs</h3>
      <div className="col-lg-11">
        <h4>What happens when I update my email address (or mobile number)?</h4>
          <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
        <h4>When will my Career Service Portal account be updated with the new email address (or mobile number)?</h4>
          <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>        
       </div>
       </div>
  );
}
export default GetApplicantDetails;