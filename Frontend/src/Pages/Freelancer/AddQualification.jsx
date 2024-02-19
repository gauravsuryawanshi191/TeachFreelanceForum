import React from "react";

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from 'axios';

const AddQualification = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [graduationMarks, setGraduationMarks] = useState('');
    const [passoutYear, setPassoutYear] = useState('');
    const [qualification, setQualification] = useState('');
    const [university, setUniversity] = useState('');
    const [id, setId] = useState('');

    const saveChange = (e) => {
        const postApp = { firstName, lastName, email, experience, graduationMarks, passoutYear, qualification, university, id };
        e.preventDefault();

        // Validate Qualification
        if (qualification.trim().length === 0) {
            document.getElementById("qualificationErr").innerHTML = "<em>*Cannot be only spaces</em>";
        } else {
            document.getElementById("qualificationErr").innerHTML = "";
        }

        // Validate University
        if (university.trim().length === 0) {
            document.getElementById("universityErr").innerHTML = "<em>*Cannot be only spaces</em>";
        } else {
            document.getElementById("universityErr").innerHTML = "";
        }

         // Validate Passing Year
         if (passoutYear.trim().length === 0) {
            document.getElementById("passoutYearErr").innerHTML = "<em>*Cannot be empty</em>";
        } else {
            document.getElementById("passoutYearErr").innerHTML = "";
        }

        // Add additional validation for Passing Year
        const passoutYearPattern = /^(19[7-9][5-9]|20[0-1][0-9]|202[0-4])$/;
        if (!passoutYearPattern.test(passoutYear)) {
            document.getElementById("passoutYearErr").innerHTML = "<em>*Invalid passing year</em>";
        } else {
            document.getElementById("passoutYearErr").innerHTML = "";
        }
        

        // Validate CGPA
        if (graduationMarks.trim().length === 0 || parseFloat(graduationMarks) <= 0 || parseFloat(graduationMarks) > 100) {
            document.getElementById("graduationMarksErr").innerHTML = "<em>*Invalid CGPA</em>";
        } else {
            document.getElementById("graduationMarksErr").innerHTML = "";
        }


        if (document.getElementById("qualificationErr").innerText === "" &&
        document.getElementById("universityErr").innerText === "" &&
        document.getElementById("passoutYearErr").innerText === "" &&
        document.getElementById("graduationMarksErr").innerText === "") 
        {
            axios.put(`http://localhost:8080/api/Freelancer/updateQualification`, postApp)
                .then(response => {
                    alert("Details edited successfully", response.data);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })

        }

    }
    useEffect(() => {
        //console.log(JSON.parse(window.localStorage.getItem('freelancer')));
        axios.get(`http://localhost:8080/api/Freelancer/email/${JSON.parse(window.localStorage.getItem('email'))}`)
            .then(appData => {
                console.log('Data updated successfully', appData.data);
                console.log('Data updated successfully', appData.data.id);
                setId(appData.data.id)
                setFirstName(appData.data.firstName)
                setLastName(appData.data.lastName)
                setEmail(appData.data.email)
                setExperience(appData.data.experience)
                setGraduationMarks(appData.data.graduationMarks);
                setPassoutYear(appData.data.passoutYear);
                setQualification(appData.data.qualification);
                setUniversity(appData.data.university);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })

    }, [])

    return (
        <div>
            <section className="col-lg-11 col-md-10 mx-auto d-block pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-sm-block">
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/FEAK3HS2RKR4S3L7WBJ4KMSVDA.jpg" alt="" className="img-responsive img-fluid  " />
                        </div>
                        <div className="col-sm ">
                        <form onSubmit={saveChange}>
                                <div><h2 className="fw-bold pb-3">Please add Your Educational Qualification</h2></div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" type="text" placeholder=""
                                                id="qualification"
                                                value={qualification}
                                                onChange={(e) => setQualification(e.target.value)} required/>
                                            <label className="label">Qualification</label>
                                            <span className="text-danger" id="qualificationErr"></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="university"
                                                value={university}
                                                onChange={(e) => setUniversity(e.target.value)} required/>
                                                <label className="label">Board/university</label>
                                            <span className="text-danger" id="universityErr"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="number"
                                                id="passoutYear"  
                                                min="1975"
                                                max="2024"
                                                value={passoutYear}
                                                onChange={(e) => setPassoutYear(e.target.value)} required/>
                                                <label className="label">Passing Year</label>
                                            <span className="text-danger" id="passoutYearErr"></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="number"
                                                id="graduationMarks"
                                                value={graduationMarks}
                                                onChange={(e) => setGraduationMarks(e.target.value)} required/>
                                                <label className="label">Percentage/CGPA</label>
                                            <span className="text-danger" id="graduationMarksErr"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2 p-3">
                                    <button onClick={(e) => saveChange(e)} className="btn btn-success rounded-pill" type="submit" >Add Qualification</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default AddQualification;
