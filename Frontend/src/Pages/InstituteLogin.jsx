import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function PractiseLogin() {
  const [instituteEmail, setEmail] = useState('');
  const [institutePassword, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const data = { instituteEmail, institutePassword }
    console.log(data)
    try {
      const response = "";
      console.log(data)
      axios.post('http://localhost:8080/api/Institute/authenticate', data)
        .then((response) => {
          console.log(response.data);
          if (response.data == null) {
            document.getElementById("Err").innerHTML = "<em>*Invalid credentials</em>";
          }
          else {
            document.getElementById("Err").innerHTML = "";
            window.localStorage.setItem('instituteName', JSON.stringify(response.data.instituteName));
            window.localStorage.setItem('instituteEmail', JSON.stringify(response.data.instituteEmail));
            console.log((window.localStorage.getItem('instituteName')));
            if (response.data.instituteStatus == "APPROVED") {
              alert(`Institute Logged In Successfully.`);
              window.location.replace("/institute/dashboard");
            } else if (response.data.instituteStatus == "NOTAPPROVED") {
              alert(`APPROVAL IS PENDING, PLEASE TRY LATER`);
              window.location.replace("/institute-login");
            }
          }
        })
        .catch((error) => {
          document.getElementById("Err").innerHTML = "<em>*Password format is invalid</em>";
        })
    } catch (error) {
      
    }
  }
  return (
    <>
      <section className="col-lg-7 col-md-10 mx-auto d-block pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-block">
              <img src="./Assets/Images/HomePage/LoginPage.png" alt="" className="img-responsive img-fluid  " />
            </div>
            <div className="col-sm">
              <form onSubmit={handleLogin} >
                <div className="float-end pb-5">New Institute? <a href="/institute-register">SignUP</a>  </div>
                <div className="pb-4 pt-4" ><h2>Welcome Back</h2><h5>Login to Continue</h5></div>
                <div className="material-textfield mb-3">
                  <input className="input form-control" type="email" required placeholder="" value={instituteEmail} onChange={event => setEmail(event.target.value)} />
                  <label className="label">Email id</label>
                </div>
                <div className="material-textfield mb-3">
                  <input className="input form-control" type="password" required placeholder="" value={institutePassword} onChange={event => setPassword(event.target.value)} autoComplete='off' />
                  <label className="label">Password</label>
                </div>
                <div>
                  <span class="text-danger" id="Err"></span>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" disabled={!instituteEmail || !institutePassword}>Login</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
