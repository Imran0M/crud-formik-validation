import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import Base from './Base'
import { AppCon } from './AppProvider'

function EditUser() {
  const {user, setUser}=AppCon()
    const history = useHistory()
    const [idx , setIdx]=useState('')
    const [name , setName]=useState('')
    const [dob , setDob]= useState('')
    const [age , setAge]=useState('')
    const {id} =useParams()
    // console.log(id)
    const selectedUser =user.find((student)=>student.id === id)
    // console.log(selectedUser)
   useEffect(()=>{
      setIdx(selectedUser.id)
      setName(selectedUser.name)
      setDob(selectedUser.dob)
      setAge(selectedUser.age)
   },[])

   const updateUser= async()=>{
    const getIndex=user.findIndex(stud=>stud.id ===id)
    // console.log(getIndex)
    const editedUser={
        id: idx,
        name,
        dob,
        age,
    }
    // console.log(editedUser)
    try {
      const response = await fetch(`https://642903155a40b82da4cb3c1b.mockapi.io/students/${idx}`,{
        method:"PUT",
        body: JSON.stringify(editedUser),
        headers:{
          "Content-Type":"application/json"
        }
      })
        const data = await response.json()
        console.log(data)
        user[getIndex]=data
    setUser([...user])
    history.push('/')
    } catch (error) {
      console.log("error found in updating API")
    } 
   }
  return (
    <Base tittle="Edit user">
         <div className="adduser-style container">
          <input placeholder="id"
          value={idx}
          onChange={(event)=>setIdx(event.target.value)}/>
      <input 
      placeholder="Name"
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />
      <input placeholder="Dob"
      value={dob}
      onChange={(event)=>setDob(event.target.value)}/>
      <input placeholder="Age"
      value={age}
      onChange={(event)=>setAge(event.target.value)}
      />
      <Button onClick={updateUser}className="adduser"  varient="dark">Update user</Button>
      </div>
    </Base>
  )
}

export default EditUser