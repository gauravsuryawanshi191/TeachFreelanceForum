import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SendMessage() {

    const [comment, setcomment] = useState('');
    const [firstName, setFirstName] = useState('');
    const [companyName, setCompanyName] = useState('');

    JSON.parse(window.localStorage.getItem('shortlist'))

    console.log(JSON.parse(window.localStorage.getItem('shortlist')))


    const save = (e) => {

        const comm = { comment, firstName, companyName };

        axios.post(`http://localhost:8080/api/Institute/feedback`, comm)
            .then(response => {
                console.log("Company added successfully", response.data);
                alert("data added successfully");
                //  window.location.replace("/company-login");
            })
            .catch(error => {
                console.log('something went wroing', error);
                // window.location.replace("/");

            })


    }



    return (<>
        <section className="col-lg-9 col-md-10 mx-auto d-block pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm d-sm-block">
                        <div><h3 className="fw-bold">Send Message to {JSON.parse(window.localStorage.getItem('shortlist'))} for Interview</h3>

                        </div>
                        <img src="./Assets/Images/HomePage/Register.png" alt="" className="img-responsive img-fluid  " />
                    </div>
                    <div className="col-sm ">
                        <form>


                            <div className="row g-3 pt-3"></div>
                            <div className="col-sm-6">
                                <div className="material-textfield mb-2"> from
                                    <input className="input form-control" placeholder=" " type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /><label className="label"> </label>
                                </div>
                            </div>




                            <div className="col-sm-6">
                                <div className="material-textfield mb-2"> send to
                                    <input className="input form-control" placeholder=" " type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><label className="label"> </label>
                                </div>
                            </div>


                            <div>
                                <div className="material-textfield mb-2"> write message here
                                    <textarea className="input form-control" placeholder=" " type="text" value={comment} onChange={(e) => setcomment(e.target.value)} />
                                </div>
                            </div>
                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-success rounded-pill" type="button" onClick={(e) => save(e)}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}