import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate } from '@reach/router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default props => {
  const [pet, setPet] = useState({})



  const deletePet = (_id) => {
    axios.delete("http://localhost:8000/api/pets/" + _id)
        .then(res => {
          navigate("/");
        })
        .catch(err => console.log(err));
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/" + props.id)
        .then(res => setPet(res.data))
  }, [])

  return (
    <div className="w-75">
      <div className="d-flex justify-content-between"><h1>Pet Shelter</h1><a href=""><Link to="/">Home</Link></a></div>
      <div className="d-flex justify-content-between">
        <h3>Details about: {pet.name}</h3>
        <button className="btn btn-danger btn-sm" onClick={ e => { deletePet(pet._id) }} >Adopt {pet.name}</button>
      </div>
      <div className="border border-dark p-4 mt-3">
        <p><span style={{fontWeight:'bold',marginRight:'40px'}}>Pet Type: </span> {pet.type}</p>
        <p><span style={{fontWeight:'bold',marginRight:'20px'}}>Description: </span> {pet.description}</p>
        <div className="d-flex">
          <p style={{marginRight:'70px'}}><span style={{fontWeight:'bold'}}>Skills: </span></p>
          <div className="d-flex flex-column">
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
          </div>
        </div>
      </div>
      <Link className="btn btn-primary btn-sm m-2" to={"/pets/"+pet._id+"/edit"}>Edit</Link>
      
    </div>
  )

}