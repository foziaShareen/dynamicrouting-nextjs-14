import Image from 'next/image'
import getSingleProduct  from '@/helpers'
type Props={
    searchParams:{[key:string]:string|string[] | undefined}
}
const SingleProduct = async ({searchParams}:Props) => {
    const _idString=searchParams?._id
const  _id = Number(_idString)
const product = await getSingleProduct(_id)
console.log(product)

  return (
    <div className='max-w-screen-xl mx-auto flex items-center gap-10 x--gap-0'>
        <Image src={product?.image} alt="img" width={500} height={500}/>
        <div className='flex flex-col gap-2'>
        <h1>{product?.title}</h1>
        <p>Price${product?.price}</p>
        
        <p>{product?.description}</p>
        </div>
       
    </div>
  )
}

export default SingleProduct
