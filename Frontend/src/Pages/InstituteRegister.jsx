import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const InstituteRegister = () => {
    const [instituteName, setInstituteName] = useState('');
    const [institutePassword, setPassword] = useState('');
    const [instituteMission, setInstituteMission] = useState('');
    const [instituteEmail, setEmail] = useState('');
    const { id } = useParams();

    const saveUser = (e) => {
        e.preventDefault();

        //validation
        //validate institute name
        if (instituteName.trim().length === 0) {
            document.getElementById("InameErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("InameErr").innerHTML = "";
        }

        //email id pattern validation
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailPattern.test(instituteEmail)) {
            document.getElementById("emailErr").innerHTML = "<em>*Invalid email format</em>";
        }
        else {
            document.getElementById("emailErr").innerHTML = "";
        }

        //validate institute mission
        if (instituteMission.trim().length === 0) {
            document.getElementById("ImissionErr").innerHTML = "<em>*Cannot be only spaces</em>";
        }
        else {
            document.getElementById("ImissionErr").innerHTML = "";
        }

        // password pattern validation
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordPattern.test(institutePassword)) {
            document.getElementById("passErr").innerHTML = "<em>*Invalid format</em>";
        }
        else {
            document.getElementById("passErr").innerHTML = "";
        }

        if (document.getElementById("InameErr").innerText === "" &&
            document.getElementById("emailErr").innerText === "" &&
            document.getElementById("ImissionErr").innerText === "" &&
            document.getElementById("passErr").innerText === "") {
            const institute = { instituteName, institutePassword, instituteMission, instituteEmail, id };
            axios.post('http://localhost:8080/api/Institute/addNew', institute)
                .then(response => {
                    console.log("Institute added successfully", response.data);
                    alert("Institute Registered Successfully.");
                    window.location.replace("/institute-login");
                })
                .catch(error => {
                    document.getElementById("emailErr").innerHTML = "<em>*Email id already registered</em>";
                    console.log('something went wrong', error);
                })
        }
    }

    return (
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-sm-block">
                        <div><h3 className="fw-bold">TeachFreelance Forum</h3>
                            <h5 className="px-5">You are just few clicks away from Creating your Account</h5>
                        </div>
                        <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid  " />
                    </div>
                    <div className="col-sm ">
                        <form onSubmit={saveUser} >
                            <div><h2 className="fw-bold pb-3">Register</h2></div>
                            <div className=""><h5 className="fw-bold">Manage Your Account Efficiently</h5></div>
                            <div className=""><h6>Lets get you all set up so you can verify personal account and begin setting up your profile</h6></div>
                            <div className="row g-3 pt-3"></div>
                            <div className="col-sm-6">
                                <div className="material-textfield mb-2">
                                    <input className="input form-control" placeholder=" " type="text" value={instituteName} onChange={(e) => setInstituteName(e.target.value)} required />
                                    <label className="label" required>Institute Name</label>
                                    <span className="text-danger" id="InameErr"></span>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="material-textfield mb-2">
                                    <input className="input form-control" placeholder=" " type="email" value={instituteEmail} onChange={(e) => setEmail(e.target.value)} required />
                                    <label className="label">Email</label>
                                    <span className="text-danger" id="emailErr"></span>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="material-textfield mb-2">
                                    <input className="input form-control" placeholder=" " type="text" value={instituteMission} onChange={(e) => setInstituteMission(e.target.value)} required />
                                    <label className="label">Institute Mission</label>
                                    <span className="text-danger" id="ImissionErr"></span>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="material-textfield mb-2">
                                    <input className="input form-control" placeholder=" " type="password" value={institutePassword} onChange={(e) => setPassword(e.target.value)} required />
                                    <label className="label">Password</label>
                                    <span className="text-danger" id="passErr"></span>
                                </div>
                                <div>
                                    <span className="placeholder">Password should contain atleast 1 uppercase alphabet,1 lowercase alphabet and 1 digit.</span>
                                </div>
                            </div>

                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-success rounded-pill" type="submit" >Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstituteRegister;