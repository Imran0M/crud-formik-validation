// import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Base from './Base'
import { AppCon } from './AppProvider'
import { useFormik } from 'formik'
import * as yup from 'yup'

const userValidation = yup.object({
  id: yup.string().required("You must enter your Id number"),
  name: yup.string().required("You have to fill your name"),
  dob: yup.string().required("please enter your DOB").min(10),
  age: yup.string().required('please enter your age').max(3),
})

function AddUser() {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
    initialValues: {
      id: "",
      name: "",
      dob: "",
      age: "",
    },
    validationSchema: userValidation,
    onSubmit: (newUser) => {
      // console.log("new user trigered", newUser)
      adding(newUser)
    }
  })

  const { user, setUser } = AppCon()
  const history = useHistory()
  // const [id, setId] = useState('')
  // const [name, setName] = useState('')
  // const [dob, setDob] = useState('')
  // const [age, setAge] = useState('')
  const adding = async (newUser) => {
    // const newUser = {
    //   id,
    //   name,
    //   dob,
    //   age
    // }
    try {
      const response = await fetch("https://642903155a40b82da4cb3c1b.mockapi.io/students", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      console.log(data)
      setUser([...user, data])
      history.push('/')
    }
    catch (error) {
    }
  }
  return (
    <Base tittle="Add Student Details">
      <form onSubmit={handleSubmit} className="adduser-style container">
        <input
          placeholder="id"
          name="id"
          value={values.id}
          onBlur={handleBlur}
          onChange={handleChange} />
          {touched.id && errors.id ? <p style={{color:"crimson"}}>{errors.id}</p>:''}
        <input
          placeholder="Name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
         {touched.name && errors.name ? <p style={{color:"crimson"}}>{errors.name}</p>:''}
        <input placeholder="Dob"
          name="dob"
          value={values.dob}
          onBlur={handleBlur}
          onChange={handleChange} />
           {touched.dob && errors.dob ? <p style={{color:"crimson"}}>{errors.dob}</p>:''}
        <input placeholder="Age"
          name="age"
          value={values.age}
          onBlur={handleBlur}
          onChange={handleChange}
        />
         {touched.age && errors.age ? <p style={{color:"crimson"}}>{errors.age}</p>:''}
        <Button type="submit" className="adduser"
          onClick={adding}
          varient="dark">Add</Button>
      </form>

    </Base>
  )
}

export default AddUser