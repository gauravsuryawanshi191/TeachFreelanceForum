import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PractiseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const data = { email, password }
    try {
      const response = "";
      axios.post('http://localhost:8080/api/Freelancer/authenticate', data).then((response) => {
        console.log(response.data);
        if (response.data == null) {
          document.getElementById("Err").innerHTML = "<em>*Invalid credentials</em>";
        }
        else {
          document.getElementById("Err").innerHTML = "";
          window.localStorage.setItem('freelancer', JSON.stringify(response.data.firstName));
          window.localStorage.setItem('email', JSON.stringify(response.data.email));

          console.log((window.localStorage.getItem('freelancer')));

          alert('Freelancer Logged In Successfully.');
          window.location.replace("/freelancer/dashboard");

        }

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
              <div className="float-end pb-5">New Freelancer? <a href="/register">SignUP</a>  </div>
              <div className="pb-4 pt-4" ><h2>Welcome Back</h2><h5>Login to Continue</h5></div>
              <div className="material-textfield mb-3">
                <input className="input form-control" type="email" required placeholder="" value={email} onChange={event => setEmail(event.target.value)} />
                <label className="label">Email id</label>
              </div>
              <div className="material-textfield mb-3">
                <input className="input form-control" type="password" required placeholder="" value={password} onChange={event => setPassword(event.target.value)} />
                <label className="label">Password</label>
              </div>
              <div>
              <span class="text-danger" id="Err"></span>
              </div>
    
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success" disabled={!email || !password}>Login</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
