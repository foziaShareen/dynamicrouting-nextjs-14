import Products from '@/components/Products'
import React from 'react'

 const url="https://jsonserver.reactbd.com/phone"
 async function getData(){
   const res=await fetch(url)
   const data=await res.json()
   console.log(data)
   return data
 }
 
 async function Home() {
   const products=await getData()
  
  return (
    <div>
      <Products products={products}/>
    </div>
  )
}
export default Home

