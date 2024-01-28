import React from 'react'
import img1 from '../Assests/howtobuy.png'
import img2 from '../Assests/Line33323.png'
const Howtobuy = () => {
  return (
    <div>
<div className='  flex justify-center items-center align-middle'>
<div className='flex-col space-y-10'>
    <div className=' flex justify-center'>
<img src={img1} alt='?' className='h-24 md:h-40 ' />
    </div>
 
    <div className='px-10 md:px-0  md:flex md:justify-center items-center py-6 '>
<div className='md:flex md:justify-center rounded-md md:w-3/6  bg-black/35 py-2 md:py-0 pb-10 md:px-10'>    
        <p className='md:py-6 py-2 text-left text-xl px-4 md:px-2 font-bold'>01.</p>
        <div className='px-4 md:px-0  '>
            <h1 className='text-white font-bold text-xl text-left md:pb-8 pb-8 md:pt-6 '>Create a Wallet</h1>
            <hr className='text-black' color='black'/>
            <p className='text-black text-left text-lg  pt-8 pb-4'>
            download Phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to Phantom.app.
            </p>
        </div>    
        </div>
    </div>
    <div className='px-10 md:px-0  md:flex md:justify-center items-center py-6 '>
<div className='md:flex md:justify-center rounded-md md:w-3/6  bg-black/35 py-2 md:py-0 pb-10 md:px-10'>    
        <p className='md:py-6 py-2 text-left text-xl px-4 md:px-2 font-bold'>02.</p>
        <div className='px-4 md:px-0  '>
            <h1 className='text-white font-bold text-xl text-left md:pb-8 pb-8 md:pt-6 '>Get Some $SOL</h1>
            <hr className='text-black' color='black'/>
            <p className='text-black text-left text-lg  pt-8 pb-4'>
            have SOL in your wallet to switch to $SOLZILLA. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.
             </p>
        </div>    
        </div>
    </div>
    <div className='px-10 md:px-0  md:flex md:justify-center items-center py-6 '>
<div className='md:flex md:justify-center rounded-md md:w-3/6  bg-black/35 py-2 md:py-0 pb-10 md:px-10'>    
        <p className='md:py-6 py-2 text-left text-xl px-4 md:px-2 font-bold'>03.</p>
        <div className='px-4 md:px-0  '>
            <h1 className='text-white font-bold text-xl text-left md:pb-8 pb-8 md:pt-6 '>
Go to Orca.so</h1>
            <hr className='text-black' color='black'/>
            <p className='text-black text-left text-lg  pt-8 pb-4'>
            connect to Raydium. Go to Orca.so in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $SOLZILLA token address into Orca, select SOLZILLA, and confirm. When Phantom prompts you for a wallet signature, sign.
             </p>
        </div>    
        </div>
    </div>
    <div className='px-10 md:px-0  md:flex md:justify-center items-center py-6 '>
<div className='md:flex md:justify-center rounded-md md:w-3/6  bg-black/35 py-2 md:py-0 pb-10 md:px-10'>    
        <p className='md:py-6 py-2 text-left text-xl px-4 md:px-2 font-bold'>04.</p>
        <div className='px-4 md:px-0  '>
            <h1 className='text-white font-bold text-xl text-left md:pb-8 pb-8 md:pt-6 '>Switch SOL for $SOLZILLA</h1>
            <hr className='text-black' color='black'/>
            <p className='text-black text-left text-lg  pt-8 pb-4'>
            switch SOL for $SOLZILLA. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
                  </p>
        </div>    
        </div>
    </div>
    </div>
    </div>
    
    <div>
        <img src={img2} alt='?' className='px-12' />
    </div>
    </div>
    
    
  )
}

export default Howtobuy