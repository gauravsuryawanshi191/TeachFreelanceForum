import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Apply = () => {
    const e = JSON.parse(window.localStorage.getItem('email'));
    //console.log(e);
    axios.get(`http://localhost:8080/api/Freelancer/email/${e}`)
      .then(response => {
        //console.log('Printing  data : ', response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        //setExperience(response.data.experience);
        setGraduationMarks(response.data.graduationMarks);
        setPassoutYear(response.data.passoutYear);
        setQualification(response.data.qualification);
        setUniversity(response.data.university);
        setFreeId(response.data.id);

      })
      .catch(error => {
        console.log('Something went wrong', error);
      })

    const [freeId, setFreeId]= useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [graduationMarks, setGraduationMarks] = useState('');
    const [passoutYear, setPassoutYear] = useState('');
    const [qualification, setQualification] = useState('');
    const [university, setUniversity] = useState('');
    const advId= useParams();
    console.log("AdvId: ",advId);

    const a = JSON.parse(window.localStorage.getItem('apply'));

    const applyJob = (e) => {

        console.log("advId: ",advId.ItemId);
        console.log("freeId: ",freeId);
        e.preventDefault();

        axios.post(`http://localhost:8080/api/Freelancer/apply/${freeId}/${advId.ItemId}`, {})
            .then(
                response => {
                    console.log(" Successfully Applied", response.data);
                    alert(` Successfully Applied for job`);

                    window.location.replace("/freelancer/dashboard/search-job");
                }
            )
            .catch(error => {
                alert('You have already applied for this post');
                window.location.replace("/freelancer/dashboard/search-job");
            })
    }

    return (
        <div className="container">
            <h3>Add Details For Applying to {a} Job</h3>
            <hr />
            <form>

                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={firstName}
                        // onChange={(e)=> setFirstName(e.target.value)}
                        />
                        <label className="label">First Name</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={lastName}
                        //onChange={(e)=> setLastName(e.target.value)}
                        />
                        <label className="label">Last Name</label>
                    </div>
                </div>


                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={email}
                        // onChange={(e)=> setEmail(e.target.value)}
                        />
                        <label className="label">Email</label>
                    </div>
                </div>


                {/* <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={qualification}
                        // onChange={(e)=> setQualification(e.target.value)}
                        />
                        <label className="label">Qualification</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={graduationMarks}
                        // onChange={(e)=> graduationMarks(e.target.value)}
                        />
                        <label className="label">Graduation Marks</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={university}
                        // onChange={(e)=> setUniversity(e.target.value)}
                        />
                        <label className="label">University</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="material-textfield mb-3">
                        <input type="text" className="input form-control"
                        value={passoutYear}
                        // onChange={(e)=> setPassoutYear(e.target.value)}
                        />
                        <label className="label">Passout Year</label>
                    </div>
                </div> */}

                <div >
                    <button onClick={(e) => applyJob(e)} className="btn btn-primary">Apply</button>
                </div>
            </form>
            <hr />
            <Link to="/freelancer/dashboard/search-job">Back</Link>
        </div>
    )
}
export default Apply;
