import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default props => {
  const { initialName, initialType, initialDescription, initialSkill1,initialSkill2,initialSkill3, onSubmitProp } = props;
  const [ name, setName ] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      type,
      description,
      skill1,
      skill2,
      skill3
    });
  }


  return (
    <div>
      <form className="d-flex justify-content-between border border-dark w-75" style={{padding: "20px"}} onSubmit={onSubmitHandler}>
        <div>
          <div className="form-group">
            <label>Pet Name:</label><br/>
            <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <span className="text-danger">{ props.errors.name ? props.errors.name.message: "" }</span>
          </div>
          <div className="form-group">
            <label>Pet Type:</label><br/>
            <input className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
            <span className="text-danger">{ props.errors.type ? props.errors.type.message: "" }</span>
          </div>
          <div className="form-group">
            <label>Pet Description:</label><br/>
            <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <span className="text-danger">{ props.errors.description ? props.errors.description.message: "" }</span>
          </div>
          <input className="btn btn-primary m-2" type="submit" value="Add Pet"/>
        </div>
        <div>
          <label>Skills (Optional):</label>
          <div className="form-group">
            <label>Skill 1:</label><br/>
            <input className="form-control" type="text" value={skill1} onChange={(e) => setSkill1(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Skill 2:</label><br/>
            <input className="form-control" type="text" value={skill2} onChange={(e) => setSkill2(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Skill 3:</label><br/>
            <input className="form-control" type="text" value={skill3} onChange={(e) => setSkill3(e.target.value)} />
          </div>
        </div>
      </form>
    </div>
  )
}