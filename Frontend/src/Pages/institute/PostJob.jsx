import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import JobService from "../../services/JobService";

const PostJob=()=>{

const[occupationTittle, setOccupationTittle] = useState('');
const[numberOfEmloyeesRequired,setNumberOfEmloyeesRequired]=useState('');
const[salary, setSalary] = useState('');
const[durationOfEmployment, setDurationOfEmployment] = useState('');
const[workExperienceRequired, setWorkExperienceRequired] = useState('');
const[jobDiscription, setJobDiscription] = useState('');
const[preferedSex, setPreferedSex] = useState('');
const[vacancyAvailable, setVacancyAvailable] = useState('');
const[skill, setSkill] = useState('');

const {id} = useParams();

const saveJob=(e)=>{
    const postJob = {occupationTittle, numberOfEmloyeesRequired,salary, durationOfEmployment,workExperienceRequired,jobDiscription,preferedSex,vacancyAvailable,skill, id};
    e.preventDefault();
    JobService.create(postJob)
    .then(
        response => {
            console.log("Job Added Successfully", response.data);         
            alert('Job Added Successfully');  
        }
    )
    .catch(error => {
        console.log('Something went wrong', error);
    })
  }
useEffect(() => {
    if (id) {
        JobService.get(id)
            .then(postJob => {
                setOccupationTittle(postJob.data.occupationTittle);
                setNumberOfEmloyeesRequired(postJob.data.numberOfEmloyeesRequired);
                setSalary(postJob.data.salary);
                setDurationOfEmployment(postJob.data.durationOfEmployment);
                setWorkExperienceRequired(postJob.data.workExperienceRequired);
                setJobDiscription(postJob.data.jobDiscription);
                setPreferedSex(postJob.data.preferedSex);
                setVacancyAvailable(postJob.data.vacancyAvailable);
                setSkill(postJob.data.skill);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
}, [])
return(
    <div className="container">
            <h3>Add New Job Posting</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="occupationTittle"
                        value={occupationTittle}
                        onChange={(e) => setOccupationTittle(e.target.value)}
                        placeholder="Enter Occupation Tittle"
                    /><br></br>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="numberOfEmloyeesRequired"
                        value={numberOfEmloyeesRequired}
                        onChange={(e) => setNumberOfEmloyeesRequired(e.target.value)}
                        placeholder="Enter Number Of Vacancy"
                    /><br></br>

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter Salary"
                    /><br></br>

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="durationOfEmployment"
                        value={durationOfEmployment}
                        onChange={(e) => setDurationOfEmployment(e.target.value)}
                        placeholder="Enter Duration Of Employment"
                    /><br></br>
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="workExperienceRequired"
                        value={workExperienceRequired}
                        onChange={(e) => setWorkExperienceRequired(e.target.value)}
                        placeholder="Enter Work Experience Required"
                    /><br></br>
                </div> <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="jobDiscription"
                        value={jobDiscription}
                        onChange={(e) => setJobDiscription(e.target.value)}
                        placeholder="Enter Job Description"
                    /><br></br>
                </div>
                 <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="preferedSex"
                        value={preferedSex}
                        onChange={(e) => setPreferedSex(e.target.value)}
                        placeholder="Enter Preferred Gender"
                    /><br></br>
                </div> 

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="vacancyAvailable"
                        value={vacancyAvailable}
                        onChange={(e) => setVacancyAvailable(e.target.value)}
                        placeholder="Enter Vacancy Available"
                    /><br></br>
                </div>
                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        placeholder="Enter Skill"
                    /><br></br>
                </div>
                <div >
                    <button onClick={(e) => saveJob(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
)
}
export default PostJob;
