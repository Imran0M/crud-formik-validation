import React from 'react'
import Base from './Base'
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import { AppCon } from './AppProvider';



function TeacherDetails() {
  const {teacher , setTeacher}= AppCon()
  const history = useHistory()
    const deleteTeacher=(idx)=>{
        const deleted = teacher.filter((teach) =>teach.id !== idx)
        // console.log(deleted)
        setTeacher(deleted)
    } 
    return (
        <Base tittle="Teacher Details">
           <div className="container">
            <Table>
            <thead>
                         <tr>
                           <th className="col-3">Name</th>
                           <th className="col-3" >Department </th>
                           <th className="col-3">Qualification</th>
                           <th className="col-3">Operation</th>
                         </tr>
                       </thead>
            </Table>
           
            {teacher.map((teacher ,id)=>(
                <div key={id}>
                <Table >
                       <tbody>
                         <tr>
                           <td className="col-3" >{teacher.teachername}</td>
                           <td  className="col-3">{teacher.department}</td>
                           <td className="col-3" >{teacher.qualification}</td>
                           <td>
                               <div>
                                <button className="add-btn" onClick={()=>history.push('/add/teacher') }>Add </button>{' '}
                               <button onClick={()=>history.push(`/ed/${teacher.id}`)} className="edit-btn" >Edit </button>{' '}
                               <button onClick={()=>deleteTeacher(teacher.id)} className="delete-btn"> Delete </button>{' '}
                               </div>
                           </td>
                         </tr>
                       </tbody>
                     </Table>
                     
                     </div>
            )
              
            )}
           </div>
                 
        </Base>
    )
}

export default TeacherDetails