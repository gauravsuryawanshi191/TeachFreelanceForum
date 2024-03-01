import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function DeleteInstitute() {
    const [institutes, setInstitutes] = useState([]);

    const init = () => {
        console.log('first');
        axios.get('http://localhost:8080/api/Institute/getInstitutes')
            .then(response => {
                console.log('Printing data', response.data);
                setInstitutes(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const deleteinstitute = (e) => {
        console.log(e);
        var answer = window.confirm("Are you sure?")
        if (answer) {
            axios.delete(`http://localhost:8080/api/Institute/deleteInstitute/${e}`)
                .then(response => {
                    alert("Institue deleted successfully");
                    console.log('Printing data', response.data);
                    window.location.replace("/Admin/dashboard/institute-delete");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
        else {
            alert("Freelancer deletion failed");
        }
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            institutes.map(institute => (
                                <tr key={institute.id}>
                                    <td>{institute.instituteName}</td>
                                    <td>{institute.instituteMission}</td>
                                    <td>{institute.instituteEmail}</td>
                                    <td>
                                        <button style={{ marginLeft: "10px" }} type="button" onClick={(e) => deleteinstitute(institute.id)} className="btn btn-danger">Delete Institute Account</button>
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
