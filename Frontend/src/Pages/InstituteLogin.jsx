import React, { useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


// import './styles.css';
export default function PractiseLogin(){ 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  async function handleLogin(event){
    event.preventDefault();
    const data = { email,  password }
    try {     
     const response=""; axios.post('http://localhost:8080/api/Institute/auth',data).then((response)=>{
      console.log(response.data);
     
     window.localStorage.setItem('Companyuser', JSON.stringify(response.data.companyName));  
     window.localStorage.setItem('Companyemail', JSON.stringify(response.data.email)); 

     
      console.log((window.localStorage.getItem('user')));  
         
      if(response.data.companyStatus=="APPROVED"){
        alert(`Company Logged In Successfully.`);

        
        

        
        window.location.replace("/institute/dashboard");
      }else if(response.data.companyStatus=="NOTAPPROVED"){
        alert(`EITHER CREDENTIALS WRONG/PENDING FOR APPROVAL.LOGIN AFTER SOME TIME`);
        window.location.replace("/institute-login");
      }
       
       
      
     })     
      if(response.data=null){ // localStorage.setItem('id',response.data);
     // window.location.replace("/Dashboard");
     alert(`invalid credentials!!enter valid username/password`)
 
      }
     
    } catch (error) {
     
      }
    }  
  return (<>
    {}

    <section className="col-lg-7 col-md-10 mx-auto d-block pt-5">
        <div className="container">
             <div className="row">
                 <div className="col-sm d-sm-block">
                 <img src="./Assets/Images/HomePage/LoginPage.png" alt="" className="img-responsive img-fluid  " />
                 </div>
                 <div className="col-sm">
                 <form onSubmit={handleLogin} >
                         <div className="float-end pb-5">Wants to Hire? <a href="/institute-register">SignUP</a>  </div>
                         <div className="pb-4 pt-4" ><h2>Welcome Back</h2><h5>Login to Continue</h5></div>
                         <div className="material-textfield mb-3">                    
                            <input className="input form-control" type="email" required placeholder="" value={email}  onChange={event => setEmail(event.target.value)} />
                            <label className="label">UserId or Email</label>
                         </div>
                         <div className="material-textfield mb-3">
                            <input className="input form-control"  type="password" required placeholder="" value={password} onChange={event => setPassword(event.target.value)}/>                  
                            <label className="label">Password</label>
                         </div> 
                         <div className="m-2">                    
                            <Link className="back-link" to="/forget">Forgot Password</Link>
                         </div>                   
                         <div className="d-grid gap-2">
                          <button type="submit"   className="btn btn-success" disabled={!email || !password}>Login</button>                 
                         </div> 
                         <div className="mt-3">
                             <p className="text-center">Sign in with 
                             <button type="button" className="btn btn-outline-success rounded-circle ms-4 me-2"><i className="fa-brands fa-google"></i></button>
                             <button type="button" className="btn btn-outline-success rounded-circle me-2"><i className="fa-brands fa-facebook-f"></i></button>
                             <button type="button" className="btn btn-outline-success rounded-circle"><i className="fa-brands fa-twitter"></i></button>                           
                            </p>                                           
                         </div>                                       
                      </form>           
                 </div>                
             </div>
         </div>
      </section>
         </>
  )
}
