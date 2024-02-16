import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Editprofile() {
    const [instituteName, setInstituteName] = useState('');
    const [instituteMission, setInstituteMission] = useState('');    
    const instituteEmail = JSON.parse(window.localStorage.getItem('instituteEmail'));

    useEffect(() => {
        console.log(instituteEmail);
        axios.get(`http://localhost:8080/api/Institute/getInstitute/${instituteEmail}`)
            .then(instituteData => {
                console.log('Data fetched successfully', instituteData.data);
                console.log('Data fetched of institute having id ', instituteData.data.id);
                setInstituteName(instituteData.data.instituteName)
                setInstituteMission(instituteData.data.instituteMission)
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })

    }, [])

    const saveChange = (e) => {
        const updateInstitute = { instituteName, instituteMission, instituteEmail };
        e.preventDefault();
        axios.put('http://localhost:8080/api/Institute/update', updateInstitute)
        .then(response => {
            alert("Details edited successfully", response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }
    
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
                                <div><h2 className="fw-bold pb-3">Update Your Profile</h2></div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" type="text" placeholder=""
                                                id="instituteName"
                                                value={instituteName}
                                                onChange={(e) => setInstituteName(e.target.value)}
                                            /><label className="label">Institute Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="instituteMission"
                                                value={instituteMission}
                                                onChange={(e) => setInstituteMission(e.target.value)}
                                            /><label className="label">Institute Mission</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-6">
                                        <div className="material-textfield mb-2">
                                            <input className="input form-control" placeholder=" " type="text"
                                                id="instituteEmail"
                                                value={instituteEmail} readOnly/><label className="label">Institute Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid gap-2 p-3">
                                    <button onClick={(e) => saveChange(e)} className="btn btn-success rounded-pill" type="button" >Update Profile</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
