import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { Link, navigate } from '@reach/router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default props => {
  const { id } = props;
  const [ pet, setPet ] = useState();
  const [ loaded, setLoaded ] = useState(false);

  const [errors, setErrors] = useState([])

  useEffect (() => {
      axios.get('http://localhost:8000/api/pets/' + id)
          .then(res => {
              setPet(res.data)
              setLoaded(true)
          })
  }, [])

  const updatePet = updatedPet => {
      axios.put('http://localhost:8000/api/pets/' + id, updatedPet)
        .then(res =>  navigate("/"))
        .catch(err => {
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
        })
  }

  return (
    <div>
      <div>
      <div className="d-flex justify-content-between w-75"><h1>Pet Shelter</h1><a href=""><Link to="/">Home</Link></a></div>
        <h4 className="mb-3 mt-3">Edit pet</h4>
        {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
        {loaded && <Form onSubmitProp = { updatePet } 
          initialName = { pet.name }
          initialType = { pet.type }
          initialDescription = { pet.description }
          initialSkill1 = { pet.skill1 }
          initialSkill2 = { pet.skill2 }
          initialSkill3 = { pet.skill3 }
          errors = { errors }
        />}
      </div>
    </div>
  )
}