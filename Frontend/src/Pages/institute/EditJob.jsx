import React from "react";
import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const EditJob=()=>{
    const[occupationTitle, setOccupationTitle] = useState('');
    const[salary, setSalary] = useState('');
    const[durationOfEmployment, setDurationOfEmployment] = useState('');
    const[workExperienceRequired, setWorkExperienceRequired] = useState('');
    const[description, setDescription] = useState('');
    const[preferedGender, setPreferedGender] = useState('');
    const[vacancyAvailable, setVacancyAvailable] = useState('');
    const[skill, setSkill] = useState('');
    const {instituteId, advertisementId} = useParams();

    const updateJob=(e)=>{
        const postJob = {occupationTitle, salary, durationOfEmployment, workExperienceRequired, description, preferedGender, vacancyAvailable, skill, advertisementId};
        e.preventDefault();
        //JobService.create(postJob)
        axios.put(`http://localhost:8080/api/Advertisement/${instituteId}/${advertisementId}`,postJob)
        .then(
            response => {
                console.log("Job updated successfully", response.data);
                window.location.replace("/institute/dashboard/view-all-jobs");           
            }
        )
        .catch(error => {
            console.log('something went wroing', error);
        })
    }

    useEffect(() => {
        //console.log(id);
        if(advertisementId) {
            axios.get(`http://localhost:8080/api/Advertisement/get/${advertisementId}`)
                .then(job => {
                    setOccupationTitle(job.data.occupationTitle);
                    setSalary(job.data.salary);
                    setDurationOfEmployment(job.data.durationOfEmployment);
                    setWorkExperienceRequired(job.data.workExperienceRequired);
                    setDescription(job.data.description);
                    setPreferedGender(job.data.preferedGender);
                    setVacancyAvailable(job.data.vacancyAvailable);
                    setSkill(job.data.skill);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    const handleRadioChange=(event)=>{
        console.log(event.target.value);
        setPreferedGender(event.target.value);
    }

    return(
        <div className="container">
                <h3>Edit Job Advertisement</h3>
                <hr/>
                <form onSubmit={(e) => updateJob(e)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control col-4"
                            id="occupationTitle"
                            value={occupationTitle}
                            onChange={(e) => setOccupationTitle(e.target.value)}
                            placeholder="Enter Occupation Title"
                            required
                        /><br></br>
                    </div>
                   
                    <div className="form-group">
                        <input 
                            type="number" 
                            className="form-control col-4"
                            id="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Enter Salary"
                        /><br></br>

                    </div>
                    <div className="form-group">
                        <input 
                            type="number" 
                            min={0}
                            max={100}
                            className="form-control col-4"
                            id="durationOfEmployment"
                            value={durationOfEmployment}
                            onChange={(e) => setDurationOfEmployment(e.target.value)}
                            placeholder="Enter Duration Of Employment"
                            required
                        /><br></br>
                    </div>
                    <div className="form-group">
                        <input 
                            type="number" 
                            min={0}
                            max={100}
                            className="form-control col-4"
                            id="workExperienceRequired"
                            value={workExperienceRequired}
                            onChange={(e) => setWorkExperienceRequired(e.target.value)}
                            placeholder="Enter Work Experience Required"
                            required
                        /><br></br>
                    </div> 
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control col-4"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter Job Description"
                            required
                        /><br></br>
                    </div>
                    <div className="form-group" style={{"color":"gray"}}>
                        <div className="form-check">
                            <input type="radio" id="preferedGenderMale" name="preferedGender" value="Male" className="form-check-input" onChange={handleRadioChange} checked={preferedGender==="Male"}/>
                            <label htmlFor="preferedGenderMale" className="form-check-label">Male</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="form-check">
                            <input type="radio" id="preferedGenderFemale" name="preferedGender" value="Female" className="form-check-input" onChange={handleRadioChange} checked={preferedGender==="Female"}/>
                            <label htmlFor="preferedGenderFemale" className="form-check-label">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="form-check"> 
                            <input type="radio" id="preferedGenderAny" name="preferedGender" value="Any" className="form-check-input" onChange={handleRadioChange} checked={preferedGender==="Any"}/>
                            <label htmlFor="preferedGenderAny" className="form-check-label">Any</label>
                        </div>
                        <br></br>
                    </div> 

                    <div className="form-group">
                        <input 
                            type="number"
                            min={1} 
                            className="form-control col-4"
                            id="vacancyAvailable"
                            value={vacancyAvailable}
                            onChange={(e) => setVacancyAvailable(e.target.value)}
                            placeholder="Enter Vacancy Available"
                            required
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
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
                <hr/>
                <Link to="/institute/dashboard/view-all-jobs">Back to List</Link>
            </div>
    )
}
export default EditJob;