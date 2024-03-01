import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentAddress, setCurrentAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

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

    const { id } = useParams();

    const saveUser = (e) => {
        e.preventDefault();

        //Validate first name
        if (firstName.trim().length === 0) {
            document.getElementById("FNErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("FNErr").innerHTML = "";
        }

        //Validate last name
        if (lastName.trim().length === 0) {
            document.getElementById("LNErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("LNErr").innerHTML = "";
        }

        //email id pattern validation
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("EmailErr").innerHTML = "<em>*Invalid email format</em>";
        }
        else {
            document.getElementById("EmailErr").innerHTML = "";
        }

        //mobile number validation
        const phonePattern = /^[7-9]\d{9}$/;
        if (!phonePattern.test(mobileNumber)) {
            document.getElementById("mobileErr").innerHTML = "<em>*Invalid mobile number</em>";
        }
        else {
            document.getElementById("mobileErr").innerHTML = "";
        }

        //Validate current address
        if (currentAddress.trim().length === 0) {
            document.getElementById("CAddrErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("CAddrErr").innerHTML = "";
        }

        //Validate city name
        if (city.trim().length === 0) {
            document.getElementById("CityErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("CityErr").innerHTML = "";
        }

        //validate state
        if (state === "") {
            document.getElementById("stateErr").innerHTML = "<em>*Select state</em>";
        }
        else {
            document.getElementById("stateErr").innerHTML = "";
        }

        //Validate pincode
        let pinCodeTrimmed = pincode.trim();
        if (pinCodeTrimmed.length !== 6 || pinCodeTrimmed == "000000") {
            document.getElementById("pincodeErr").innerHTML = "<em>*Invalid pincode</em>";
        }
        else {
            document.getElementById("pincodeErr").innerHTML = "";
        }

        // password pattern validation
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordPattern.test(password)) {
            document.getElementById("passErr").innerHTML = "<em>*Password format is not valid</em>";
        }
        else {
            document.getElementById("passErr").innerHTML = "";
        }

        //password and confirm password must match 
        if (password !== confirmPassword) {
            document.getElementById("passErr").innerHTML = "<em>*Password and Confirm Password do not match.</em>";
        }

        const role = "APPLICANT";
        const user = { firstName, lastName, email, password, mobileNumber, role, id, confirmPassword, currentAddress, pincode, city, state };
        //create

        if (document.getElementById("FNErr").innerText === "" &&
            document.getElementById("LNErr").innerText === "" &&
            document.getElementById("EmailErr").innerText === "" &&
            document.getElementById("mobileErr").innerText === "" &&
            document.getElementById("CAddrErr").innerText === "" &&
            document.getElementById("CityErr").innerText === "" &&
            document.getElementById("stateErr").innerText === "" &&
            document.getElementById("pincodeErr").innerText === "" &&
            document.getElementById("passErr").innerText === "") {
            axios.post('http://localhost:8080/api/Freelancer/add', user)
                .then(response => {
                    alert('Registration successully');
                    console.log("Freelancer added successfully", response.data);
                    window.location.replace("/Login");
                })
                .catch(error => {
                    alert('Registration failed. Please try again later.');
                    console.log('something went wrong', error);
                    window.location.replace("/register");
                })
        }

    }

    return (
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
                                        <input className="input form-control" placeholder=" " type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                        <label className="label">First Name</label>
                                        <span className="text-danger" id="FNErr"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                        <label className="label" >Last Name</label>
                                        <span className="text-danger" id="LNErr"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        <label className="label" >Email Id</label>
                                        <span className="text-danger" id="EmailErr"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
                                        <label className="label" >Mobile Number</label>
                                        <span className="text-danger" id="mobileErr"></span>
                                    </div>
                                </div>
                                <div className="col-16">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="text" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} required />
                                        <label className="label" >Current Address</label>
                                        <span className="text-danger" id="CAddrErr"></span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                                        <label className="label" >City</label>
                                        <span className="text-danger" id="CityErr"></span>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <select className="form-select" id="state" required="" value={state} onChange={(e) => setState(e.target.value)}>
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
                                    <span className="text-danger" id="stateErr"></span>
                                </div>
                                <div className="col-md-3">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" placeholder=" " type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                                        <label className="label" >Pincode</label>
                                        <span className="text-danger" id="pincodeErr"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" type={showPassword ? "text" : "password"} id="password" placeholder=" " value={password} onChange={handlePasswordChange} required />
                                        <label className="label">Password</label>
                                        <span className="text-danger" id="passErr"></span>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="material-textfield mb-2">
                                        <input className="input form-control" type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder=" " value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                                        <label className="label">Confirm Password</label>
                                    </div>
                                </div>
                                <div>
                                    <span className="placeholder">Password should contain atleast 1 uppercase alphabet,1 lowercase alphabet and 1 digit.</span>
                                </div>
                                <div className="col-sm-12"> <input type="checkbox" id="showPasswordCheckbox" onChange={handleCheckboxChange} />
                                    <label htmlFor="togglePassword"> &nbsp;&nbsp; Show/Hide password</label></div>
                            </div>
                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-success rounded-pill" type="submit">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register;