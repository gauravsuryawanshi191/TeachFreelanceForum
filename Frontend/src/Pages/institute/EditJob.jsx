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
    const [errors, setErrors] = useState({});

    const {instituteId, advertisementId} = useParams();


    useEffect(() => {
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

    const validateForm = () => {
        console.log("in validate form")
        const errors = {};
        let isValid = true;

        if (!occupationTitle.trim()) {
            errors.occupationTitle = 'Occupation title is required';
            isValid = false;
        }
        if (salary==undefined) {
            errors.salary = 'Salary is required';
            isValid = false;
        }
        if (durationOfEmployment==undefined) {
            errors.durationOfEmployment = 'Duration of employment is required';
            isValid = false;
        }
        if (workExperienceRequired==undefined) {
            errors.workExperienceRequired = 'Work experience required is required';
            isValid = false;
        }
        if (!description.trim()) {
            errors.description = 'Description is required';
            isValid = false;
        }
        if (!preferedGender) {
            errors.preferedGender = 'Preferred gender is required';
            isValid = false;
        }
        if (vacancyAvailable==undefined) {
            errors.vacancyAvailable = 'Vacancy available is required';
            isValid = false;
        }
        setErrors(errors);
        console.log(errors);
        return isValid;
    };

    const updateJob=(e)=>{
        e.preventDefault();
        if (validateForm()) {
            const postJob = {occupationTitle, salary, durationOfEmployment, workExperienceRequired, description, preferedGender, vacancyAvailable, skill, advertisementId};
            e.preventDefault();
        
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
                        />
                        <span className="text-danger">{errors.occupationTitle}</span><br></br>
                    </div>
                   
                    <div className="form-group">
                        <input 
                            type="number" 
                            className="form-control col-4"
                            id="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Enter Salary"
                        />
                        <span className="text-danger">{errors.salary}</span>
                        <br></br>

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
                        />
                        <span className="text-danger">{errors.durationOfEmployment}</span><br></br>
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
                        />
                        <span className="text-danger">{errors.workExperienceRequired}</span><br></br>
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
                        />
                        <span className="text-danger">{errors.description}</span><br></br>
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
                        <span className="text-danger">{errors.preferedGender}</span>
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
                        />
                        <span className="text-danger">{errors.vacancyAvailable}</span><br></br>
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control col-4"
                            id="skill"
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                            placeholder="Enter Skill"
                        />
                        <span className="text-danger">{errors.skill}</span><br></br>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </form>
                <hr/>
                <Link to="/institute/dashboard/view-all-jobs">Back to List</Link>
            </div>
    )
}
export default EditJob;