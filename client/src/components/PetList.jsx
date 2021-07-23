import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default props => {

  const { removeFromDom } = props;

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pets/'+petId)
            .then(res => {
                removeFromDom(petId)
            })
    }


  return (
    <div>
      <table className="table border border-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
      {props.pets.sort((pet, index) => pet.type.localeCompare(index.type)).map((pet, index) => {
          return <tbody key={index}>
                    <tr>
                      <td scope="row">{ pet.name }</td>
                      <td>{pet.type}</td>
                      <td>
                        <Link to={"/pets/" + pet._id}>Details</Link> | <Link to={"/pets/"+pet._id+"/edit"}>Edit</Link>
                      </td>
                    </tr>
                  </tbody>
          })}
      </table>
    </div>
  )
}