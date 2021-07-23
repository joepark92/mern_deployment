import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@reach/router';
import PetList from '../components/PetList';



export default () => {

  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pets')
        .then(res => {
            setPets(res.data)
            setLoaded(true);
        });
}, [])

  const removeFromDom = petId => {
    setPets(pets.filter(pet => pet._id != petId));
}

  return (
    <div className="w-75">
      <div className="d-flex justify-content-between">
        <h1>Pet Shelter</h1>
        <a href=""><Link to="/create"> add a pet to the shelter</Link></a>
      </div>
      <h3>These pets are looking for a good home</h3>
      <br />
      {loaded && <PetList  pets={ pets } removeFromDom={ removeFromDom } />}
    </div>
  )
}