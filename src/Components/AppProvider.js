import React, { createContext, useContext, useEffect, useState } from 'react'
// import { Data } from './Data/Data'
import { DataTwo } from './DataTwo/DataTwo'

// creatng context
export const AppContext= createContext(null)
function AppProvider({children}) {
    const [user, setUser]=useState([])
    const [teacher, setTeacher]=useState(DataTwo)
useEffect(()=>{
  const getUser=async()=>{
    try {
      const response = await fetch("https://642903155a40b82da4cb3c1b.mockapi.io/students",{
        method:"GET",
      })
      const data = await response.json()
      console.log(data)
      setUser(data)
      if(!data){
        console.log("data fetching error")
      }
      
    } catch (error) {
      console.log("error")
    }
  }
  getUser()
},[])

  return (
    // set subscribe and provider
  < AppContext.Provider 
  value={
    {
        user,
        setUser,
        teacher, 
        setTeacher,
    }
  }>
    {/* subscriber */}
    {/* App components will be act as a children  */}
     {children}
  </AppContext.Provider>
  )
}

export const AppCon=()=>{
    // use context
    return useContext(AppContext)
}

export default AppProvider