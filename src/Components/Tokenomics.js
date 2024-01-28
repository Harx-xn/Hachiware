import React from 'react'
import img1 from '../Assests/tokenomics.png'
import img2 from '../Assests/pepetitle.png'
import img3 from '../Assests/notax.png'
import line from '../Assests/Line3.png'
const Tokenomics = () => {
  return (
    <div className='pt-10 md:px-12 px-4'>
        <div className='flex justify-center '>
        <div className='flex md:w-3/4 gap-6'> 
        <div className='flex-col space-y-10'>
        <div className=' md:hidden'>
                   <img src={img3} alt='?' className='h-full' />
            </div>
                <div className='justify-center flex md:block'>
                    <img src={img1} alt='?' className='md:h-40 h-28 ' />
                </div>
                <div  className='justify-center flex md:block'>
                   <img src={img2} alt='?' className='md:h-32 h-24' />
                </div>
                <div>
                  <h1 className='text-black/45 font-bold text-3xl text-center md:text-left'>6% Marketing</h1>
                </div>
                <div className='flex justify-center'>
                  <div className='py-4 px-2  flex justify-center rounded-sm bg-black'>
              <p className='text-white text-sm md:text- px-2 font-semibold text-left'>
              31iQsahfa4CMiirU7REygBzuAWg4R4ah7Y4aDu9ZfXJP
              </p>
              </div>
                    
                </div>
              
            </div>
            <div className='hidden md:block'>
                   <img src={img3} alt='?' className='h-[70vh]' />
            </div>
        </div>
          
        </div>
        <div>
            <img src={line} className='pt-8 md:pt-2' alt='?' />
        </div>
    </div>
  )
}

export default Tokenomics