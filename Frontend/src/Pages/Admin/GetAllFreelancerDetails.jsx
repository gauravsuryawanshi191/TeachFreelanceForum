import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function GetAllFreelancerDetails() {

    const [freelancers,setFreelancers] = useState([]);

    const init=()=>{

        console.log('first');
        axios.get('http://localhost:8080/api/Freelancer/all')
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

    const deleteFreelancer=(freelancerId)=>{
        console.log(freelancerId);
        axios.delete(`http://localhost:8080/api/Freelancer/delete/${freelancerId}`)
        .then(response=>{
            console.log('Printing data', response.data);
            window.location.replace("/Admin/dashboard/get-freelancer");
        })
        .catch(error => {
            console.log('Something went wrong', error);
        }) 
    }

    return (
        <div className="container">
        <h3>Registered Freelancer List</h3>
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
                freelancers.map(freelancer => (
                <tr key={freelancer.id}>
                    <td>{freelancer.firstName}</td>
                    <td>{freelancer.lastName}</td>
                    <td>{freelancer.email}</td>
                    <td>{freelancer.mobileNumber}</td>
                    <td>                                  
                        <button style={{marginLeft: "10px"}} type="button" onClick={() => deleteFreelancer(freelancer.id)} className="btn btn-danger">Delete Freelancer Account</button>                         
                    </td>  
                </tr> ))
            }
            </tbody>
        </table>
        </div>
        </div>
    )
}
