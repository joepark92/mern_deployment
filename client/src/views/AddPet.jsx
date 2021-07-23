import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default () => {
  const [ pets, setPets ] = useState([]);
  const [ errors, setErrors ] = useState([]);


  const addNewPet = (newPet) => {
    axios.post('http://localhost:8000/api/pets', newPet)
      .then(res => {
        setPets([
          ...pets,
          res.data
        ]);
        navigate("/");
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }


  return(
    <div>
      <div className="d-flex justify-content-between w-75"><h1>Pet Shelter</h1><a href=""><Link to="/">Home</Link></a></div>
      <h4 className="mb-3 mt-3">Know a pet needing a home?</h4>
      {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
      <Form onSubmitProp = { addNewPet } initialName = { "" } errors = { errors } />
    </div>
  )
}