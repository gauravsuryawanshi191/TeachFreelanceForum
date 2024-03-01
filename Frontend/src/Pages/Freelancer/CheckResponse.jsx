import React, { useState, useEffect } from "react";
import axios from 'axios';

const CheckResponse = () => {

  const [freelancerId, setFreelancerId] = useState('');
  const [instituteResponse, setInstituteResponse] = useState([]);

  const init = () => {
    const e = JSON.parse(window.localStorage.getItem('email'));
    console.log(e);
    axios.get(`http://localhost:8080/api/Freelancer/email/${e}`)
      .then(response => {
        console.log('Printing  data', response.data.id);
        setFreelancerId(response.data.id);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  //const showResponses = (e)=>{
    useEffect(()=>{
    console.log(freelancerId)
    axios.get(`http://localhost:8080/api/Freelancer/getResponse/${freelancerId}`)
      .then(response => {
      console.log('Printing inst data', response.data);
        //console.log("id ", response.data.institute.id);
        setInstituteResponse(response.data);
        console.log('Printing inst data', instituteResponse);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  },[freelancerId])

  return (
    <div className="container">
      
      <h3>Response</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Institute name</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
            instituteResponse.map((institute,index) => (
              <tr key={index}>
                <td>{institute.institute.instituteName}</td>
                <td>{institute.comment}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CheckResponse;
