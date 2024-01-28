import React from 'react'
import img1 from './../Assests/Solzilla-text.png'
import img2 from './../Assests/solzilla2-logo.png'
import img3 from './../Assests/bgcube2.png'
import line from './../Assests/Line33323.png'
import logo1 from './../Assests/xlogo.png'
import logo2 from './../Assests/telegram.com_-1.png'
import logo3 from './../Assests/3232323.png'
import logo4 from './../Assests/sol-logo.com_.png'
import logo5 from './../Assests/coinmarketcap-logo-064D167A0E-seeklogo.com_.png'
import logo6 from './../Assests/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png'
const HeroSection = () => {
  return (
    <div className='py-8 flex-col  '>
  <div className='flex justify-center'>
        <img src={img2} alt='?' className='md:hidden h-56' />
    </div>
    <div className='flex md:px-28 px-4  '>
    
    <div className=' xl:pl-16  xl:pr-8'>
    <div className='py-8'>
    <div className='md:pl-10 px-4'>
    <img src={img1} alt='text?' className='h-20 md:h-40' />
    </div>

    </div>
        
            <div className='md:pr-8 md:pl-4'>
              <div className='py-4 px-2 rounded-sm bg-black'>
              <p className='text-white px-2 text-sm md:text-xl font-semibold text-left'>
              31iQsahfa4CMiirU7REygBzuAWg4R4ah7Y4aDu9ZfXJP
              </p>
              </div>
            </div>
            <div className='py-4 pr-6 pl-4 '>
               <p className='tracking-wide leading-9 text-md md:text-xl text-left'>
               In 2023, SOLANA grew like Godzilla awakening from the depths of the sea. That’s why we named our token SOLZILLA, representing SOLANA’s strength and immortality.
               </p>
            </div>
            <div className=' md:px-10 py-4 justify-center flex '>
            <div className='hidden  sm:grid grid-cols-2 grid-rows-3 md:gap-x-40 gap-10'>
               <img src={logo1} className='h-20 hover:scale-105 cursor-pointer' alt='?' />
               <img src={logo2} alt='?'  className='h-20 hover:scale-105 cursor-pointer' />
               <img src={logo3} alt='?'  className='h-20 hover:scale-105 cursor-pointer    ' />
               <img src={logo4} alt='?'  className='h-20 hover:scale-105 cursor-pointer' />
               <div className='pl-6'>
               <img src={logo5} alt='?'  className='h-14 hover:scale-105 cursor-pointer ' />
               </div>
            <div className='pl-6'>
            <img src={logo6} alt='?'  className='h-14 hover:scale-105 cursor-pointer' />

            </div>
               
            </div>
            </div>
        
        </div>
        <div className=' hidden md:block py-20 w-full '>
          <img className='  h-[auto]' src={img2} alt='?'/>
        </div>
    </div>
        
        <div>
            <img src={img3} alt='?' className='w-full h-auto md:px-10 py-2' />
        </div>
        <div>
            <img src={line} alt='?' className='w-full' />
        </div>
    </div>
  )
}

export default HeroSection