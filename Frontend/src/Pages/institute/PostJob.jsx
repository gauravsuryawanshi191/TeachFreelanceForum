import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PostJob=()=>{
    const[occupationTitle, setOccupationTitle] = useState('');
    const[salary, setSalary] = useState('');
    const[durationOfEmployment, setDurationOfEmployment] = useState('');
    const[workExperienceRequired, setWorkExperienceRequired] = useState('');
    const[description, setDescription] = useState('');
    const[preferedGender, setPreferedGender] = useState('');
    const[vacancyAvailable, setVacancyAvailable] = useState('');
    const[skill, setSkill] = useState('');
    const[id, setId] = useState('');

    useEffect(() => {
        const e = JSON.parse(window.localStorage.getItem('instituteEmail'));
        console.log(e);
        axios.get(`http://localhost:8080/api/Institute/getInstitute/${e}`)
        .then(response => {
            console.log('Printing data : ', response.data);
            setId(response.data.id);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }, [])

    const handleRadioChange=(event)=>{
        console.log(event.target.value);
        setPreferedGender(event.target.value);
    }

    const saveJob=(e)=>{
        const postJob = {occupationTitle, salary, durationOfEmployment, workExperienceRequired, description, preferedGender, vacancyAvailable, skill};
        console.log(postJob);
        e.preventDefault();
        axios.post(`http://localhost:8080/api/Advertisement/${id}`,postJob)
        .then(
            response => {
                console.log("Job Added Successfully", response.data);         
                alert('Job Added Successfully');  
                window.location.replace("/institute/dashboard/view-all-jobs");
            }
        )
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }

    return(
        <div className="container">
                <h3>Add New Job Advertisement</h3>
                <hr/>
                <form onSubmit={(e) => saveJob(e)}>
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
                            <input type="radio" id="preferedGenderMale" name="preferedGender" value="Male" className="form-check-input" onChange={handleRadioChange}/>
                            <label htmlFor="preferedGenderMale" className="form-check-label">Male</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="form-check">
                            <input type="radio" id="preferedGenderFemale" name="preferedGender" value="Female" className="form-check-input" onChange={handleRadioChange}/>
                            <label htmlFor="preferedGenderFemale" className="form-check-label">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="form-check"> 
                            <input type="radio" id="preferedGenderAny" name="preferedGender" value="Any" className="form-check-input" onChange={handleRadioChange}/>
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
export default PostJob;
