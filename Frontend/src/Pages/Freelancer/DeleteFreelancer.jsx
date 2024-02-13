import React, { useState,useEffect } from "react";

import axios from 'axios';

export default function DeleteFreelancer() {
    const [user,setUser]=useState([]);
    const init=()=>{
        const e=JSON.parse(window.localStorage.getItem('freelancer'));
        console.log(e);
        axios.get(`http://localhost:8080/api/freelancer/${e}`)
        .then(response=>{
            console.log('Printing  data', response.data);
            setUser(response.data);
        })
        .catch(error => {
         console.log('Something went wrong', error);
         }) 
    }

    const saveChange=(name,id)=>{
        console.log(name,id);
        axios.delete(`http://localhost:8080/api/freelancer/delete/${id}`)
        .then(response=>{
            console.log('Printing  data', response.data);
            setUser(response.data);
        //fetching applicant details
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })  
        
        axios.get(`http://localhost:8080//api/Applicant/${name}`)
        .then((response) => {
            console.log(response.data.id);
            axios.delete(`http://localhost:8080//api/Applicant/delete/${response.data.id}`)
            .then((res) => {
                console.log(res);
                window.location.replace("/");
            })
        })
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
         // user.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <td>
                <button style={{marginLeft: "10px"}} onClick={ () =>  saveChange(user.firstName,user.id)} className="btn btn-danger">Delete </button>
              </td>
            </tr>
         // ))
        }
        </tbody>
      </table>
      
    </div>
  </div>
  )
}
//add -> after deleting user, redirect to home page