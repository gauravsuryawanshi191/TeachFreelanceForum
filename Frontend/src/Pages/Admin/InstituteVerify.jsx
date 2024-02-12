import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function InstituteVerify() {
  const [institutes, setInstitutes] = useState([]);
  const init = () => {

    console.log('first');
    axios.get('http://localhost:8080/api/Institute/getAll')
      .then(response => {
        console.log('Printing data', response.data);
        setInstitutes(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })

  }

  const editinstitute = (e, s) => {
    console.log(e, s);
    axios.get(`http://localhost:8080/api/Institute/approve/${e}/${s}`)
      .then(response => {
        console.log('Printing data', response.data);
        window.location.replace("/Admin/dashboard/institute-verify");
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container">
      <h3>Institute Details</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Institute Name</th>
              <th>Institute Mission</th>
              <th>Institute Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              institutes.map(institute => (

                <tr key={institute.id}>
                  <td>{institute.companyName}</td>
                  <td>{institute.companyMission}</td>
                  <td>{institute.email}</td>
                  <td>{institute.companyStatus}</td>
                  <td>
                   <button style={{ marginLeft: "10px" }} button onClick={(e) => editinstitute(institute.id, institute.companyStatus)} className="btn btn-success">Approve Institute</button>
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
