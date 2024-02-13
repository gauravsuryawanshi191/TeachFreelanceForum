import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function GetAllFreelancerDetails() {

    const [freelancers,setFreelancers] = useState([]);

    const init=()=>{

        console.log('first');
        axios.get('http://localhost:8080/api/freelancer/all')
        .then(response=>{
            console.log('Printing data', response.data);
            setFreelancers(response.data);
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
        <h3>Register User List</h3>
        <hr/>
        <div>
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                <th>mobile number</th>
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
                </tr> ))
            }
            </tbody>
        </table>
        </div>
        </div>
    )
}
