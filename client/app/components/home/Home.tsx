"use client"

import axios from "axios"
import { useEffect } from "react"
import Layout from "./Layout"

const Home = () => {
  const getData =async ()=>{
    try {
         await axios.post("http://localhost:5000/api/user/get-user-info-by-id",{},
          {
          headers:{
            Authorization: "Bearer " + localStorage.getItem('token'),
          }
        })
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getData()
  },[])
  return (
    <div>   
        <Layout>
           <h1>Hello</h1>
        </Layout>
    </div>
  )
}

export default Home
        