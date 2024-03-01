import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function SendMessage() {

    const [comment, setcomment] = useState('');
    const [instituteEmail, setInstiEmail] = useState('');
    const [applicantEmail, setAppliEmail] = useState('');
    const [applicantName, setAppliName]= useState('');
    //jobId is freelancerId
    const {instituteId,jobId}=useParams();

    useEffect(()=>{
        console.log("instId:", instituteId, " appliId:",jobId);
        axios.get(`http://localhost:8080/api/Institute/getInsti/${instituteId}`)
            .then(institute => {
                setInstiEmail(institute.data.instituteEmail);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        axios.get(`http://localhost:8080/api/Freelancer/getFreelancer/${jobId}`)
            .then(freelancer => {
                setAppliEmail(freelancer.data.email);
                setAppliName(freelancer.data.firstName);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    },[])
    

    const sendResponse = (e) => {
        e.preventDefault();
        const comm = { comment, applicantName, applicantEmail };
        console.log(comm)
        axios.post(`http://localhost:8080/api/Institute/sendResponse/${instituteId}/${jobId}`, comm)
            .then(response => {
                console.log("Response send successfully", response.data);
                alert("Response send successfully");
                window.location.replace('/institute/dashboard/applicants-per-job');
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }

    return (<>
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-sm-block">
                        <div><h3 className="fw-bold">Send Message to {applicantName} for Interview</h3>

                        </div>
                        <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid  " />
                    </div>
                    <div className="col-sm ">
                        <form onSubmit={(e) => sendResponse(e)}>
                            <div className="row g-3 pt-3"></div>
                            <div className="col-sm-6">
                                <div className="material-textfield mb-2"> from
                                    <input className="input form-control" placeholder=" " type="text" value={instituteEmail} readOnly /><label className="label"> </label>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="material-textfield mb-2"> send to
                                    <input className="input form-control" placeholder=" " type="text" value={applicantEmail} readOnly /><label className="label"> </label>
                                </div>
                            </div>

                            <div>
                                <div className="material-textfield mb-2"> write message here
                                    <textarea className="input form-control" placeholder=" " type="text" value={comment} onChange={(e) => setcomment(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-success rounded-pill" id="send" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}