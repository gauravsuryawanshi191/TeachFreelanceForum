import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event){
    event.preventDefault();
    const data = { email,  password }
    try {     
        const response=""; 
        axios.post('http://localhost:8080/api/Admin/authenticate',data)
            .then((response)=>{
                console.log(response.data);
                window.localStorage.setItem('adminName', JSON.stringify(response.data.firstName));  
                window.localStorage.setItem('adminEmail', JSON.stringify(response.data.email));      
                console.log(JSON.parse(window.localStorage.getItem('adminName')));
                alert(`Admin Logged In Successfully.`);
                window.location.replace("/Admin/dashboard");
            })
        if(response.data=null){
            alert(`invalid credentials!!enter valid email/password`)
        }
    }
    catch (error) {
     
        }
  }
  return (
    <>
        <section className="col-lg-7 col-md-10 mx-auto d-block pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-sm-block">
                        <img src="./Assets/Images/HomePage/LoginPage.png" alt="" className="img-responsive img-fluid"/>
                    </div>
                    <div className="col-sm">
                    <form onSubmit={handleLogin} >
                            <div className="pb-4 pt-4" ><h2>Admin Login</h2></div>
                            <div className="material-textfield mb-3">                    
                                <input className="input form-control" type="email" required placeholder="" value={email}  onChange={event => setEmail(event.target.value)} />
                                <label className="label">Email</label>
                            </div>
                            <div className="material-textfield mb-3">
                                <input className="input form-control"  type="password" required placeholder="" value={password} onChange={event => setPassword(event.target.value)} autoComplete="off"/>                  
                                <label className="label">Password</label>
                            </div> 
                            <div className="m-2">                    
                                <Link className="back-link" to="/forget">Forgot Password</Link>
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
