import React from 'react'
import img1 from '../Assests/solzillaroadmap.png'
import img2 from '../Assests/solzilla2-logo.png'
import line from '../Assests/Line33323.png'
const Roadmap = () => {
  return (
    <div className='px-12'>
    <div className='flex justify-center py-10'>
        <div className='md:w-3/5'>
        <div className=' '>
        <div className='justify-center flex py-6'>
            <img src={img1} alt='?' className='h-28 md:h-40' />
        </div>
        <div className='md:flex'>
         <div>
            <img src={img2} alt='? ' className='h-80' />
         </div>
<div className='p-10'>
    <div className='p-10 text-xl flex-col  space-y-5'>
         <p>
            Phase 1 : Meme
         </p>
         <p>
            Phase 2 : HODL
         </p>
         <p>
            Phase 3 : Moon
         </p>
    </div>
</div>
        </div>

        </div>

        </div>
    </div>
<div>
    <img src={line} alt='?'    />
</div>
    </div>
  )
}

export default Roadmap