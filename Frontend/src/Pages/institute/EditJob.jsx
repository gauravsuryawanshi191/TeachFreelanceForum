import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from 'axios';
import JobService from "../../services/JobService";


const EditJob=()=>{

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
            console.log("Job added successfully", response.data);           
        }
    )
    .catch(error => {
        console.log('something went wroing', error);
    })
  

/*const saveJob=(e)=>{

    
   

    const postJob = {occupationTittle, numberOfEmloyeesRequired,salary, durationOfEmployment,workExperienceRequired,jobDiscription,preferedSex,vacancyAvailable,skill, id};

    e.preventDefault();

    const id=(window.localStorage.getItem('edit'));
console.log(id)



    if (id) {
        //update

        

        axios.put(`http://localhost:8080/api/Jobs/put/`,postJob)
            .then(response => {
                console.log('data updated successfully', response.data);
                window.location.replace("/employer/dashboard/edit-job");
            })
            .catch(error => {
                console.log('Something went wrong', error);
            }) 
    }
else{

   
    JobService.create(postJob)
    .then(
        response => {
            console.log("Job added successfully", response.data);
           
        }
    )
    .catch(error => {
        console.log('something went wroing', error);
    })




}*/



    
}
useEffect(() => {
    if (id) {


        axios.get(`http://localhost:8080/api/Jobs/edit/${id}`)
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
            <h2>Edit Application</h2>
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
                        placeholder="Enter Number Of Emloyees Required"
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
                <div className="material-textfield mb-2"> 
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="jobDiscription"
                        value={jobDiscription}
                        onChange={(e) => setJobDiscription(e.target.value)}
                        placeholder="Enter Job Discription"
                    /><br></br>
                    </div>
                </div>
                 <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="preferedSex"
                        value={preferedSex}
                        onChange={(e) => setPreferedSex(e.target.value)}
                        placeholder="Enter Preferred Sex"
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
                    <button onClick={(e) => saveJob(e)} className="btn btn-primary">Edit Job Details</button>
                </div>
            </form>
            <hr/>
            <Link to="/employer/dashboard">Back to List</Link>
        </div>




)}
export default EditJob;