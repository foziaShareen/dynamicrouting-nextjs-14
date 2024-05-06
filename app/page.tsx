
import React from 'react'

 const url="https://jsonserver.reactbd.com/phone"
 async function getData(){
   const res=await fetch(url)
   const data=await res.json()
   console.log(data)
   return data
 }
 
 async function Home() {
   const data=await getData()
  
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default Home

