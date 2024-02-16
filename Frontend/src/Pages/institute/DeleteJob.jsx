import React, { Component } from 'react'
import axios from 'axios';
import JobService from "../../services/JobService";

class DeleteJob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: [],
            instituteId: ''
        } 
       /// this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteJob(id){
        JobService.remove(id).then( res => {
            this.setState({job: this.state.job.filter(job => job.id !== id)});
        });
    }
   
    componentDidMount(){
        const instituteEmail = JSON.parse(window.localStorage.getItem("instituteEmail"));
        axios.get(`http://localhost:8080/api/Institute/getInstitute/${instituteEmail}`)
            .then(response => {
                console.log("institute data", response.data);
                this.state.instituteId= response.data.id;
            })
            .catch(error => {
                console.log("something went wrong", error);
            })
//        JobService.getAll()
        if(this.state.instituteId){
        axios.get(`http://localhost:8080/api/Advertisement/${this.state.instituteId}`)
        .then((response) => {
            this.setState({ job: response.data});
        });
    }
    }
    
    render() {
        return (
            <div>
                 <h2 className="container">Delete Application</h2>
                 <div className = "row">
                  
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Occupation Title </th>
                                    <th>Vacancy Available</th>
                                    <th>Duration of Employment</th>
                                    <th>Experience Required</th>
                                    <th>Description</th>
                                    <th>Preferred Gender</th>
                                    <th>Skill Required</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.job.map(
                                        job => 
                                        <tr key={job.id}>
                                            <td>{job.occupationTitle}</td>
                                            <td>{job.vacancyAvailable}</td>
                                            <td>{job.durationOfEmployment}</td>
                                            <td>{job.workExperienceRequired}</td>
                                            <td>{job.description}</td>
                                            <td>{job.preferedGender}</td> 
                                            <td>{job.skill}</td>   
                                            <td>    
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteJob(job.id)} className="btn btn-danger">Delete</button> 
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}
export default DeleteJob;