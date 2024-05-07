"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
interface ProductProps{
  "_id": number,
"title": string,
"price": number,
"previousPrice": number,
"description": string,
"category": string,
"image": string,
"isNew": boolean,
"brand": string,
"quantity": number
  
}
interface Props{
  products:ProductProps[]
}


const Products = ({products=[]}:Props) => {

  
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
    {products.map((product)=>(
      <div key={product._id}>
        <Link href={{pathname:`/singleproduct`,query:{_id:product._id}}}>
       <div className='border-[1px] border-gray-300 rounded:md overflow-hidden hover:border-gray-950 duration-300'>
         <Image src={product.image} alt={product.title} width={500} height={500} className='w-full h-80 object-cover'/></div>

        <div className='px-4 pb-2 text-sm flex flex-col gap-1'>
          <p className='text-gray-600'>{product.title}</p>
          <p className='font-semibold'>${product.price}</p>
          <div className='flex items-center justify-between'>
            <button>Add to cart</button>
            <button className='hover:text-blue-600 uppercase text-xs font-semibold duration-200'>More Info</button>
          </div>
        </div>
        </Link>
</div>
    ))}
   </div> 
  )
}

export default Products



         
      
     

