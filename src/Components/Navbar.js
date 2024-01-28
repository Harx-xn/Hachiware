import React from 'react'
import logo from '../Assests/solzillatiltle.png'
const Navbar = () => {
  return (
    <div className='py-8 '>

          <div className=' flex justify-center md:justify-between md:px-40  '>
            <img src={logo} className='h-24' alt='logo?' />
            <button  className=' hidden md:block hover:scale-105 duration-200'>
            <div className='px-4 py-3 rounded-md text-lg tracking-wide border-black border-2'> 
                        Buy now
            </div>
            </button>
          </div>
    </div>
  )
}

export default Navbar