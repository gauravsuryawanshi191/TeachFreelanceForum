import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ChangePassword() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const email = JSON.parse(window.localStorage.getItem('email'));
  async function handleLogin(event) {
    event.preventDefault();
    const data = { email, password }
    try {
      const response = "";

      // password pattern validation
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (!passwordPattern.test(password)) {
        document.getElementById("passErr").innerHTML = "<em>*Invalid format</em>";
      }
      else {
        document.getElementById("passErr").innerHTML = "";
      }

      if(document.getElementById("passErr").innerText === ""){
        axios.post('http://localhost:8080/api/Freelancer/changePassword', data)
        .then((response) => {
          console.log(response.data);
          alert("Password changed successfully");
        window.location.replace("/Login");
        })

      }
    } catch (error) {
      alert(`Couldn't login. Error: ${error}.`);
    }
  }

  return (
    <section className="col-lg-10 col-md-10 mx-auto d-block pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img src="https://i.pinimg.com/originals/d2/f1/3d/d2f13d48f5ec46049f05bf6af098e7e9.png" alt="" className="img-responsive img-fluid  " />
          </div>
          <div className="col-lg-5">
            <form onSubmit={handleLogin}>
              <div className="pb-4 pt-4" ><h2>Change Your Password</h2></div>
              <div className="material-textfield mb-3">
                <input className="input form-control" type="email" required placeholder="Enter email" value={email} readOnly />
                <label className="label">Your Email</label>
              </div>
              <div className="material-textfield mb-3">
                <input className="input form-control" type="password" required value={password} onChange={event => setPassword(event.target.value)} />
                <label className="label">New Password</label>
                <span class="text-danger" id="passErr"></span>
              </div>
              <div>
                <span class="placeholder">Password should contain atleast 1 uppercase alphabet, 1 lowercase alphabet and 1 digit.</span>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success" disabled={!email || !password}>Change Password</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}