import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from 'axios';

const Apply=()=>{

const[firstName, setFirstName] = useState('');
const[lastName,setLastName]=useState('');
const[sex, setSex] = useState('');
const[maritalStatus, setMaritalStatus] = useState('');
const[email, setEmail] = useState('');
const[experience, setExperience] = useState('');
const[interestedFields, setInterestedFields] = useState('');
const[graduationMarks, setGraduationMarks] = useState('');
const[passoutYear, setPassoutYear] = useState('');
const[applyingForJob, setApplyingForJob] = useState('');
const[qualification,setQualification] = useState('');
const[university,setUniversity] = useState('');

const {id} = useParams();

const a=JSON.parse(window.localStorage.getItem('apply'));

const applyJob=(e)=>{

    const apply= {firstName, lastName,sex, maritalStatus,email,experience,interestedFields,graduationMarks,passoutYear,qualification,university,applyingForJob, id};

    e.preventDefault();

    axios.post('http://localhost:8080/api/Institute/add',apply)
    .then(
        response => {
            console.log(" Successfully Applied", response.data);
            alert(` Successfully Applied for job`);

            window.location.replace("/freelancer/dashboard");
        }
    )
    .catch(error => {
        console.log('Something went wroing', error);
    })
}

return (
    <div className="container">
            <h3>Add Details For Applying to {a} Job</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        placeholder="Enter sex"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="maritalStatus"
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        placeholder="Enter marital status"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    /><br></br>
                </div> 
                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter experience"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="interestedFields"
                        value={interestedFields}
                        onChange={(e) => setInterestedFields(e.target.value)}
                        placeholder="Enter interest fields"
                    /><br></br>
                </div> 

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="graduationMarks"
                        value={graduationMarks}
                        onChange={(e) => setGraduationMarks(e.target.value)}
                        placeholder="Enter graduation Marks"
                    /><br></br>
                </div>
                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="passoutYear"
                        value={passoutYear}
                        onChange={(e) => setPassoutYear(e.target.value)}
                        placeholder="Enter passout Year"
                    /><br></br>
                </div>
                   
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="Enter Qualification"
                    /><br></br>
                </div>
                         
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="university"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder="Enter university"
                    /><br></br>
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="applyingForJob"
                        value={applyingForJob}
                        onChange={(e) => setApplyingForJob(e.target.value)}
                        placeholder="Enter applying for job"
                    /><br></br>
                </div> 

                <div >
                    <button onClick={(e) => applyJob(e)} className="btn btn-primary">Apply</button>
                </div>
            </form>
            <hr/>
            <Link to="/freelancer/dashboard/search-job">Back</Link>
        </div>
)
}
export default Apply;
