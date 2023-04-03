import React from 'react'
// import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';


function Base({tittle, children}) {
    const history=useHistory();
  return (
    <div className="App">
        <div className='nav'>
        <button  onClick={()=>history.push('/')} className="btnn">Student details</button>
        <button  onClick={()=>history.push('/add/user')}className="btnn" >Add Student</button>
        <button  className="btnn"  onClick={()=>history.push('/teacher/details')}>Teacher details</button>
        <button className="btnn"   onClick={()=>history.push('/add/teacher')} >Add Teacher</button>
        </div>
        <h2 style={{marginTop:"10px"}}>{tittle}</h2>
        <div>{children}</div>
    </div>
  )
}

export default Base;