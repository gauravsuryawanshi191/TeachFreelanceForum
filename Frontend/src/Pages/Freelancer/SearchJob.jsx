import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchJob() {

    const [APIData, setAPIData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/Advertisement`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const apply = (ItemId) => {
        console.log(ItemId);
        window.location.replace(`/freelancer/dashboard/apply-job/${ItemId}`);
        
    }

    return(
        <div className="container">
      <h3>Job Advertisement Details</h3>
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
              <th>Skill Required</th>
            </tr>
          </thead>
          <tbody>
            {
              APIData.map(job => (
                <tr key={job.id}>
                  <td>{job.occupationTitle}</td>
                  <td>{job.vacancyAvailable}</td>
                  <td>{job.salary==undefined?"Not Mentioned":job.salary}</td>
                  <td>{job.durationOfEmployment}</td>
                  <td>{job.workExperienceRequired}</td>
                  <td>{job.description}</td>
                  <td>{job.skill===""?"Not Mentioned":job.skill}</td>
                  <td>
                    <button style={{ marginLeft: "10px" }} type="button" onClick={(e) => apply(job.id)} className="btn btn-success">Apply</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    )
}
