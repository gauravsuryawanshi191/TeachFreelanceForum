import React, { useState,useEffect} from 'react';
import axios from 'axios';


export default function ChangePassword(){
  const instituteEmail = JSON.parse(window.localStorage.getItem('instituteEmail'));
  const [institutePassword, setInstitutePassword] = useState('');
  
  function handleLogin(event){
    event.preventDefault();    
    const data = {instituteEmail, institutePassword}
    
    try {
        const response="";
        axios.post('http://localhost:8080/api/Institute/changePassword', data)
        .then((response)=>{
          console.log(response.data);
        })

        if(response.data==false){
        alert(`please provide correct email`);
        }
        else{
          alert("password change successfully");
        window.location.replace("/institute-login");

        }
    } catch (error) {
        alert(`Couldn't Log in. Error: ${error}.`);
    }
  }
  
  return (
    <section className="col-lg-10 col-md-10 mx-auto d-block pt-5">
    <div className="container">
         <div className="row">
             <div className="col-lg-5">
             <img src="https://i.pinimg.com/originals/d2/f1/3d/d2f13d48f5ec46049f05bf6af098e7e9.png" alt="" className="img-responsive img-fluid" />
             </div>
             <div className="col-lg-5">
             <form onSubmit={handleLogin}>                     
                     <div className="pb-4 pt-4" ><h2>Change Your Password</h2></div>
                     <div className="material-textfield mb-3">                    
                     <input className="input form-control" type="email" required value={instituteEmail} readOnly />
                        <label className="label">Your Email</label>
                     </div>
                     <div className="material-textfield mb-3">
                        <input className="input form-control"  type="password" required value={institutePassword} onChange={event => setInstitutePassword(event.target.value)} autoComplete='off'/>                 
                        <label className="label">New Password</label>
                     </div> 
                                                            
                     <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-success" disabled={!institutePassword}>Change Password</button>                 
                     </div> 
                                                            
                  </form>           
             </div>                
         </div>
     </div>
  </section>
  )
}