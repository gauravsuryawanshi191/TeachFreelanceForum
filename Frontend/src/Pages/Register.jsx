import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    
    const[mobileNumber, setMobileNumber] = useState('');
    const[role, setRole] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const[currentAddress, setCurrentAddress] = useState('');
    const[pincode, setPincode] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleCheckboxChange = () => {
      setShowPassword(!showPassword);
      setShowConfirmPassword(!showConfirmPassword);
      
    };

    const {id} = useParams();

    const saveUser = async (e) => {
        e.preventDefault();

        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // password validation
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, and 1 number');
            return;
        }
        const role = "APPLICANT";
        const user = {firstName, lastName, email, password,mobileNumber,role,id,confirmPassword,currentAddress,pincode,city,state};      
        //create
        axios.post('http://localhost:8080/api/Freelancer/add',user)
            .then(response => {
                alert('Registration successully');
                console.log("Freelancer aded successully",response.data);
                window.location.replace("/Login");
            })
        .catch(error=> {
            alert('Registration failed. Please try again later.');
                console.log('something went wrong', error);
                window.location.replace("/");

            })
    }

    return(
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm d-sm-block">
                <div><h3 className="fw-bold">TeachFreelance Forum</h3>
                <h5 className="px-5">You are just few a clicks away from Creating your Account</h5>
                </div>
                <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid  " />
                </div>
                <div className="col-sm ">
                    <form onSubmit={saveUser}>                       
                        <div><h2 className="fw-bold pb-3">Register</h2></div>
                        <div className=""><h5 className="fw-bold">Manage Your Account Efficiently</h5></div>
                        <div className=""><h6>Lets get you all set up so you can verify your personal account and begin setting up your profile</h6></div>
                        <div className="row g-3 pt-3">
                        <div className="col-sm-6">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><label className="label" required>First Name</label>
                        </div>                        
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /><label className="label">Last Name</label>
                        </div> 
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} /><label className="label">Email Id</label>
                        </div> 
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} /><label className="label" required>Mobile Number</label>
                        </div> 
                        </div>                       
                        <div className="col-16">
                        <div className="material-textfield mb-2"> 
                        <input className="input form-control"  placeholder=" " type="text" value={currentAddress} onChange={(e)=>setCurrentAddress(e.target.value)}/><label className="label" required>Current Address</label>
                        </div>
                        </div>
                        <div className="col-md-4">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><label className="label" required>City</label>
                        </div>                       
                        </div>                      

                        <div className="col-md-5">                                    
                        <select className="form-select" id="state" required="" value={state} onChange={(e)=>setState(e.target.value)}>
                            <option value=""> Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>                             
                        </div>
                        <div className="col-md-3">                        
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  placeholder=" " type="text" value={pincode} onChange={(e)=>setPincode(e.target.value)}/><label className="label" required>Pincode</label>
                        </div>  
                        </div>
                        <div className="col-sm-6">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control" type={showPassword ? "text" : "password"} id="password" placeholder=" "    value={password}  onChange={handlePasswordChange} required/><label className="label">Password</label>                          
                        </div> 
                        </div>
                        <div className="col-sm-6 ">
                        <div className="material-textfield mb-2">                    
                           <input className="input form-control"  type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder=" " value={confirmPassword}  onChange={handleConfirmPasswordChange}  required/><label className="label">Confirm Password</label>
                        </div>                                                 
                        </div>
                        <div className="col-sm-12"> <input type="checkbox" id="showPasswordCheckbox"  onChange={handleCheckboxChange}/><label htmlFor="togglePassword"> &nbsp;&nbsp; Show/Hide password</label></div>
                    </div>
                    <div className="d-grid gap-2 p-3">
                        <button className="btn btn-success rounded-pill" type="button"  onClick={(e) => saveUser(e)}>Create Account</button>                  
                    </div>                                                              
                    </form>           
                </div>                
            </div>
        </div>
        </section>
    )
    }


export default Register;