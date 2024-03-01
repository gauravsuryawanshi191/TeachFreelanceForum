import React, { useState,useEffect } from "react";

import axios from 'axios';

export default function DeleteFreelancer() {

    const [freelancer,setFreelancer]=useState([]);

    const init=()=>{
        const e=JSON.parse(window.localStorage.getItem('email'));
        console.log(e);
        axios.get(`http://localhost:8080/api/Freelancer/email/${e}`)
        .then(response=>{
            console.log('Printing data', response.data);
            setFreelancer(response.data);
        })
        .catch(error => {
         console.log('Something went wrong', error);
         }) 
    }

    const saveChange=(name,id)=>{
        console.log(name,id);
        var answer = window.confirm("Are you sure?")
        if (answer)
        {
          axios.delete(`http://localhost:8080/api/Freelancer/delete/${id}`)
          .then(response=>{
              console.log('Printing  data', response.data);
              setFreelancer(response.data);
              alert("Your account is deleted successfully");
              window.location.replace("/");
          //fetching applicant details
          //add -> after deleting user, redirect to home page
          })
          .catch(error => {
              console.log('Something went wrong', error);
          })
        }
        else
        {
          alert("Account deletion failed");
        }

        // axios.get(`http://localhost:8080//api/Applicant/${name}`)
        // .then((response) => {
        //     console.log(response.data.id);
        //     axios.delete(`http://localhost:8080//api/Applicant/delete/${response.data.id}`)
        //     .then((res) => {
        //         console.log(res);
        //         window.location.replace("/");
        //     })
        // })
    }

    useEffect(() => {
        init();
    }, []);

  return (
    <div className="container">
    <h3>Freelancer Details</h3>
    <hr/>
    <div>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile number</th>
          </tr>
        </thead>
        <tbody>
        {
            <tr key={freelancer.id}>
              <td>{freelancer.firstName}</td>
              <td>{freelancer.lastName}</td>
              <td>{freelancer.email}</td>
              <td>{freelancer.mobileNumber}</td>
              <td>
                <button style={{marginLeft: "10px"}} onClick={ () =>  saveChange(freelancer.firstName, freelancer.id)} className="btn btn-danger">Delete </button>
              </td>
            </tr>
       
        }
        </tbody>
      </table>
       
    </div>
  </div>
  )
}
