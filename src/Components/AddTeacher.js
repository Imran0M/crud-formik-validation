// import React, { useState } from 'react'
import Base from './Base'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AppCon } from './AppProvider'
import * as yup from 'yup'
import { useFormik } from 'formik'

const teacherValidation = yup.object({
  id: yup.string().required("Fill the ID"),
  teachername: yup.string().required("You have to fill the name"),
  department: yup.string().required("fill your department name"),
  qualification: yup.string().required("please Fill your Qualification"),
})
function AddTeacher() {

  const { values, handleChange, handleSubmit, handleBlur , errors , touched} = useFormik({
    initialValues: {
      id: "",
      teachername: "",
      department: "",
      qualification: "",
    },
    validationSchema:teacherValidation,
    onSubmit:(newTeacher)=>{
      console.log("check")
      addTeacher(newTeacher)
    }
  })

  const { teacher, setTeacher } = AppCon()
  // const [id, setId] = useState('')
  // const [teachername, setTeachername] = useState('')
  // const [department, setDepartment] = useState('')
  // const [qualification, setQualification] = useState('')

  const history = useHistory()
  const addTeacher = (newTeacher) => {
    // const newTeacher = {
    //   id,
    //   teachername,
    //   department,
    //   qualification,
    // }
    // console.log(newTeacher.nam)
    setTeacher([...teacher, newTeacher])
    history.push('/teacher/details')
  }
  return (
    <Base tittle="Add Teacher Details">
      <form onsubmit={handleSubmit} className='adduser-style'>
        <input
          name="id"
          onBlur={handleBlur}
          placeholder="id"
          value={values.id}
          onChange={handleChange}
        />
        {touched.id && errors.id?<p style={{color:"crimson"}}>{errors.id}</p>:""}
        <input
          name="teachername"
          onBlur={handleBlur}
          placeholder="Teacher Name"
          value={values.teachername}
          onChange={handleChange}
        />
           { touched.teachername && errors.teachername ? <p style={{color:"crimson"}}>{errors.teachername}</p>:""}
        <input
          name="department"
          onBlur={handleBlur}
          placeholder="Teacher Department"
          value={values.department}
          onChange={handleChange}
        />
           {touched.department && errors.department ? <p style={{color:"crimson"}}>{errors.department}</p>:""}
        <input
          name="qualification"
          onBlur={handleBlur}
          placeholder="qualification"
          value={values.qualification}
          onChange={handleChange}
        />
           {touched.qualification && errors.qualification ? <p style={{color:"crimson"}}>{errors.qualification}</p>:""}
        <Button type="submit" onClick={addTeacher}>Add</Button>
      </form>
    </Base>
  )
}

export default AddTeacher