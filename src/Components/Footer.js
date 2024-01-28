import React from 'react'
import img1 from '../Assests/solzillatiltle.png'
import img2 from '../Assests/xlogo.png'
import img3 from '../Assests/telegram.com_-1.png'
export const Footer = () => {
  return (
    <div  className='py-8'>
        <div className='flex justify-center'>
            <div className='p-10 w-2/8'>
<div className=''>
            <img src={img1} alt='?' className='h-24' />
</div>
 <div className='flex justify-center p-4'>
                <div>
                    <img src={img2} alt='?' className='h-14' />
                </div>
                <div>
                <img src={img3} alt='?' className='h-14' /> </div>
            </div>
            </div>
           
        </div>
        <div className='text-center text-xl'>
                     <p>© 2023 by SOLZILLA. All rights reserved!</p>
        </div>
    </div>
  )
}
