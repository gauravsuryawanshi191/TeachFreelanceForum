import React from "react";
import axios from 'axios';

export default function UserJobsApplied() {

  console.log(JSON.parse(window.localStorage.getItem('user')));

  const e = (JSON.parse(window.localStorage.getItem('user')));

  console.log(e);

  axios.get(`http://localhost:8080/api/Applicant/${e}`)
    .then(response => {
      console.log('Printing  data', response.data.applyingForJob);
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })

  return (
    <div>
      <h1>jobsApplied</h1>
    </div>
  );
}
