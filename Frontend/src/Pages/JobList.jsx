import React, { useState,useEffect } from "react";
import JobService from "../services/JobService";

const JobList=()=>{

 

const [job,setJob]=useState([]);
const init=()=>{

  console.log('first');
JobService.getAll()
.then(response=>{
    console.log('Printing  data', response.data);
    setJob(response.data);
})
.catch(error => {
    console.log('Something went wrong', error);
  }) 

}

useEffect(() => {

  
    init();
   
  }, []);




    return(
    
    <div className="container">
    <h3>JOBS AVAILABLE</h3>
    <hr/>
    <div>
    
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Occupation Tittle </th>
            <th>Employee Needed</th>
            <th>Duration of Employee</th>
            <th>Experience Required</th>
            <th>Job Description</th>
            <th>Preferred Sex</th>
            <th>Skill Required</th>
          </tr>
        </thead>
        <tbody>
        {
          job.map(job => (
            <tr key={job.id}>
              <td>{job.occupationTittle}</td>
              <td>{job.numberOfEmloyeesRequired}</td>
              <td>{job.durationOfEmployment}</td>
              <td>{job.workExperienceRequired}</td>
              <td>{job.jobDiscription}</td>
              <td>{job.preferedSex}</td> 
              <td>{job.skill}</td>            
             
            </tr>
          ))
        }
        </tbody>
      </table>
      
    </div>
  </div>
);
}
export default JobList;