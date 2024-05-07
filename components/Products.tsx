"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
interface ProductProps{
  _id: number,
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


const Products = ({products}:{products:ProductProps[]}) => {
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
    {products.map((product)=>(
      <div key={product._id}>
        <Link href={`"/"${product._id}`}>
        <Image src={product.image} alt={product.title} width={500} height={500} className='w-full h-80 object-cover'/>
        </Link>
</div>
    ))}
   </div> 
  )
}

export default Products



         
      
     

