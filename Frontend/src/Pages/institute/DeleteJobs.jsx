import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeleteJobs() {
    const [job, setJob] = useState([]);
    const [instituteId, setInstituteId] = useState('');
  
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
        axios.get(`http://localhost:8080/api/Advertisement/${instituteId}`)
          .then(response => {
            console.log('Printing data', response.data);
            setJob(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          })
      }
    },[instituteId])
  
    const deleteJob = (jobId) => {
     // window.localStorage.setItem('edit', JSON.stringify(jobId));
      axios.delete(`http://localhost:8080/api/Advertisement/${jobId}`)
      .then(response => {
        console.log('Printing data', response.data);
        window.location.replace(`/institute/dashboard/delete-job`);
        //setJob(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
      
    }
  
    return (
      <div className="container">
        <h3>Delete Application</h3>
        <hr />
        <div>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Occupation Title </th>
                <th>Vacancy Available</th>
                <th>Salary</th>
                <th>Duration of Employment</th>
                <th>Experience Required</th>
                <th>Job Description</th>
                <th>Preferred Gender</th>
                <th>Posting date</th>
                <th>Skill Required</th>
              </tr>
            </thead>
            <tbody>
              {
                job.map(job => (
                  <tr key={job.id}>
                    <td>{job.occupationTitle}</td>
                    <td>{job.vacancyAvailable}</td>
                    <td>{job.salary==undefined?"Not Mentioned":job.salary}</td>
                    <td>{job.durationOfEmployment}</td>
                    <td>{job.workExperienceRequired}</td>
                    <td>{job.description}</td>
                    <td>{job.preferedGender}</td>
                    <td>{job.postingDate}</td>
                    <td>{job.skill===""?"Not Mentioned":job.skill}</td>
                    <td>
                      <button style={{ marginLeft: "10px" }} type="button" onClick={(e) => deleteJob(job.id)} className="btn btn-danger">Delete</button>
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
