import React, { Component } from 'react'
import JobService from "../../services/JobService";


class DeleteJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
                job: []
        }
        
       
       /// this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteJob(id){
        JobService.remove(id).then( res => {
            this.setState({job: this.state.job.filter(job => job.id !== id)});
        });
    }
   
  
    componentDidMount(){
        JobService.getAll()
.then((res) => {
            this.setState({ job: res.data});
        });
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
            <th>Occupation Tittle </th>
            <th>Employee Needed</th>
            <th>Duration of Employee</th>
            <th>Experience Required</th>
            <th>Job Description</th>
            <th>Preferred Sex</th>
            <th>Skill Required</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.job.map(
                                        job => 
                                        <tr key={job.id}>
                                        <td>{job.occupationTittle}</td>
                                        <td>{job.numberOfEmloyeesRequired}</td>
                                        <td>{job.durationOfEmployment}</td>
                                        <td>{job.workExperienceRequired}</td>
                                        <td>{job.jobDiscription}</td>
                                        <td>{job.preferedSex}</td> 
                                        <td>{job.skill}</td>   


                                             <td>
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteJob(job.id)} className="btn btn-danger">Delete </button>
                                                
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