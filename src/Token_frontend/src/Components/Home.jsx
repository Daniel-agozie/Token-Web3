import React from 'react'

const Home = () => {
  return (
    <div id="/" className='bg-black p-20 flex flex-col md:flex-row md:justify-between font-roboto items-center animate-slideup'>
      <div className='text-ash text-lg w-96 animate-slideleft flex'>
        Welcome to the web3 world of Decentralization.
        This Token is built on one of the powerful blockchain.
          The Interent Computer (ICP) 
          <img className='w-4 h-9' src="images/favicon.ico" alt="Dfinity"/>

      </div>
      <div className='animate-slideright'>
        <img className='md:w-80 w-96 h-44 rounded-xl mt-5' src="images/coin.jpeg" alt="Coin" />
      </div>

    </div>
  )
}

export default Home