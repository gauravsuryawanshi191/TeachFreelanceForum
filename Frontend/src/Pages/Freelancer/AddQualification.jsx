import React from "react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
        console.log(id);
        axios.put(`http://localhost:8080/api/Freelancer/updateQualification`, postApp)
        .then(response => {
            alert("Details edited successfully", response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }
    useEffect(() => {
        console.log(JSON.parse(window.localStorage.getItem('freelancer')));
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
                            <form>
                                <div><h2 className="fw-bold pb-3">Plase add Your Educational Qualification</h2></div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" type="text" placeholder=""
                                                id="qualification"
                                                value={qualification}
                                                onChange={(e) => setQualification(e.target.value)}
                                            /><label className="label">Qualification</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="university"
                                                value={university}
                                                onChange={(e) => setUniversity(e.target.value)}
                                            /><label className="label">Board/university</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="passoutYear"
                                                value={passoutYear}
                                                onChange={(e) => setPassoutYear(e.target.value)}
                                            /><label className="label">Passing Year</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="graduationMarks"
                                                value={graduationMarks}
                                                onChange={(e) => setGraduationMarks(e.target.value)}

                                            /><label className="label">Percentage/CGPA</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2 p-3">
                                    <button onClick={(e) => saveChange(e)} className="btn btn-success rounded-pill" type="button" >Add Qualification</button>
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

//clear form after adding qualification