import React, { useState, useEffect } from "react";
import axios from "axios";

const ApplicantsPerJob = () => {

  const [freelancers, setFreelancers] = useState([]);
  const [instituteId, setInstituteId] = useState('');
  const [sendState, setSendState] = useState('false'); //disabled

  const init = () => {
    console.log('init fun'); 
    const instituteEmail = JSON.parse(window.localStorage.getItem("instituteEmail"));
    axios.get(`http://localhost:8080/api/Institute/getInstitute/${instituteEmail}`)
    .then(response => {
      console.log("institute data", response.data);
      setInstituteId(response.data.id);
    })
    .catch(error => {
      console.log("something went wrong", error);
    })
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(()=>{
    if(instituteId){
        console.log(instituteId);
      axios.get(`http://localhost:8080/api/Institute/applicants/${instituteId}`)
        .then(response => {
          console.log('Printing data', response.data);
          setFreelancers(response.data);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        })
    }
  },[instituteId])

  const shortList = (applicantId) => {
    window.localStorage.setItem('edit', JSON.stringify(applicantId));
    window.location.replace(`/institute/dashboard/send-message/${instituteId}/${applicantId}`);
  }

  return (
    <div className="container">
      <h3>Appicants</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>First Name </th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Qualification</th>
              <th>Marks</th>
              <th>City</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {
              freelancers.map(freelancer => (
                <tr key={freelancer.id}>
                  <td>{freelancer.firstName}</td>
                  <td>{freelancer.lastName}</td>
                  <td>{freelancer.email}</td>
                  <td>{freelancer.mobileNumber}</td>
                  <td>{freelancer.qualification}</td>
                  <td>{freelancer.graduationMarks}</td>
                  <td>{freelancer.city}</td>
                  <td>{freelancer.university}</td>
                  <td>
                    <button style={{ marginLeft: "10px" }} type="button" onClick={(e) => shortList(freelancer.id)} className="btn btn-success" id="sendBtn">Send Response</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ApplicantsPerJob;




