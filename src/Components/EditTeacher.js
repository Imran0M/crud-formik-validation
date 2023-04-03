import React from 'react'
import Base from './Base'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { AppCon } from './AppProvider'

function EditTeacher() {
  const {teacher , setTeacher}= AppCon()
    const history= useHistory()
    const [idx , setIdx]=useState('')
    const [teachername , setTeachername]=useState('')
    const [department, setDepartment]=useState('')
    const [qualification, setQualification]=useState('')
    const {id}= useParams();
    const seletedTeacher = teacher.find((teach)=> teach.id === id)
    useEffect(()=>{
        setIdx(seletedTeacher.id)
        setTeachername(seletedTeacher.teachername)
        setDepartment(seletedTeacher.department)
        setQualification(seletedTeacher.qualification)
    },[])
    
  const editTeach=()=>{
    const getInd= teacher.findIndex(teach=>teach.id ===id)
    console.log(getInd)
    const up={
     id: idx,
        teachername,
        department,
        qualification,
    }
    console.log(up)
    teacher[getInd]=up
    setTeacher([...teacher])
    history.push('/teacher/details')

  }

  return (
    <Base tittle="Add Teacher Details">
    <div className='adduser-style'>
      <input
      placeholder="id"
      value={idx}
      onChange={(event)=>setIdx(event.target.value)}/>
    <input placeholder="Teacher Name"
    value={teachername}
    onChange={(event)=>setTeachername(event.target.value)}
    />
    <input placeholder="Teacher Department"
      value={department}
      onChange={(event)=>setDepartment(event.target.value)}/>
    <input placeholder="qualification"
      value={qualification}
      onChange={(event)=>setQualification(event.target.value)}/>
    <Button onClick={editTeach}>update</Button>
    </div>
  
</Base>
  )
}

export default EditTeacher