const url="https://jsonserver.reactbd.com/accessories"
 //const url ="https://dummyjson.com/products"
 

 async function getData(){
   const res=await fetch(url)
   const data=await res.json()
   
   return data
 }
 
 
 const getSingleProduct =async (_id:number) => {
     const item=await getData()
     const single=await item.find((product:any)=>product._id===_id)
   return single
 }
 
 export default getSingleProduct
 