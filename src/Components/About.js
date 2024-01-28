import React from 'react'
import img1 from '../Assests/about.png'
import img2 from '../Assests/solzilla.png'
import img3 from '../Assests/Line3.png'
const About = () => {
  return (
    <div className=' px-14'>
     <div className=' md:hidden '>
    <img src={img2} alt='text?' className='h-auto' />
    </div>
    <div className='flex px-4 md:px-28 '>
    <div className='md:w-11/12'>
    <div className=' md:pl-10'>
    <img src={img1} alt='text?' className='h-40' />
    </div>
    <div className='py-4 md:pl-10 '>
               <p className='tracking-wide leading-8 text-xl py-3 text-left'>
               As we ride the exhilarating bull market wave of Solana, it’s time to introduce the powerhouse that is SOLZILLA, a memecoin that’s all set to make seismic waves in the crypto ocean. With Solana’s market charging forward, and the anticipated Jupiter (JUP) airdrop, the ecosystem is primed for unprecedented growth, and SOLZILLA is at the heart of this financial renaissance.
                    </p>
                    <p className='tracking-wide leading-8 text-xl py-3 text-left'>
                    What truly fuels SOLZILLA’s potential isn’t just the market conditions or the financial backing—it’s the unbreakable spirit and the united front of its community, the Zillers. This passionate collective is SOLZILLA’s greatest asset; their unwavering belief and vibrant energy are what transform this memecoin from a digital asset into a cultural movement.
                  </p>
                    <p className='tracking-wide leading-8 text-xl py-3 text-left'>
                    With the chant, “ALL HEIL KING ZILLA,” we rally the community, signifying not just our strength in numbers but our shared vision of ascending to new heights in the crypto sphere. As Zillers, we’re not just witnessing a bull run; we’re actively shaping it with SOLZILLA.
                  </p>
                  <p className='tracking-wide leading-8 text-xl py-3 text-left'>
                  So, whether you’re a seasoned crypto trader or a newcomer to the digital currency domain, now is the time to be part of SOLZILLA’s journey. With the robust Solana network, Jupiter’s liquidity boost, and a community that’s second to none, SOLZILLA isn’t just another memecoin—it’s a beacon of collective achievement in the cryptocurrency world. Join us, and let’s make the digital realm roar with the might of SOLZILLA! 🚀🐉💎 
                  </p>
                  <img/>
                  <img/>
                  <img/>
            </div>
    </div>
    <div className='hidden md:flex justify-center items-center'>
    <div className='hidden md:flex  md:pl-10 xl:pt-auto  md:pt-auto  xl:pl-20  '>
          <img className='xl:h-[60vh] md:h-[30vh]' src={img2} alt='?'/>
        </div>  
    </div>
       
    </div>
     <div>
        <img src={img3} alt='?' />
     </div>
    </div>
  )
}

export default About