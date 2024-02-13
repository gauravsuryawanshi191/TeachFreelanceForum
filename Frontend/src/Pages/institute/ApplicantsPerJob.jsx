import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApplicantsPerJob() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Institute/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

     const shortList=(s)=>{

console.log(s)
      

window.localStorage.setItem('shortlist', JSON.stringify(s));  
window.location.replace("/institute/dashboard/send-message");

     }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            /> Enter Post
           
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            
      <table className="table table-bordered table-striped">
         <tbody>
                            <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.sex}</td>
                            <td>{item.experience}</td>
                            <td>{item.email}</td>
                            <td>{item.interestedFields}</td> 
                            <td>{item.graduationMarks}</td>  
                            <td>{item.passoutYear}</td>
                            <td>{item.applyingForJob}</td>          
                            <button style={{marginLeft: "10px"}} onClick={ () => shortList(item.firstName)} className="btn btn-success">ShortList</button>
                          </tr>
                          </tbody>
                          </table>
      
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <table className="table table-bordered table-striped">
         <tbody>
                            <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.sex}</td>
                            <td>{item.experience}</td>
                            <td>{item.email}</td>
                            <td>{item.interestedFields}</td> 
                            <td>{item.graduationMarks}</td>  
                            <td>{item.passoutYear}</td>
                            <td>{item.applyingForJob}</td>          
                           
                          </tr>
                          </tbody>
                          </table>
      
                        )
                    })
                )}
        
        </div>
    )
}
