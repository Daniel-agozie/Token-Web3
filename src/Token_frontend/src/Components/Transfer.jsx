import React, { useState } from 'react'
import { Token_backend } from '../../../declarations/Token_backend';
import { Principal } from "@dfinity/principal"


const Transfer = () => {

  const [recipientId, setId] = useState("")
  const [amount, setAmount] = useState("")
  const [feedBack, setFeed] = useState("")


  const handleClick = async () => {
    const recipient = Principal.fromText(recipientId,);
    const amountToTransfer = Number(amount);
    const result = await Token_backend.transfer(recipient, amountToTransfer);
    setFeed(result)
    setId("");
    setAmount("");
  }

  return (
    <div id="/transfer" className='text-white p-5 rounded-xl'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6'>
        <div className=''>
          <div className='text-sm mr-5 mb-2'>Account ID</div>
          <input className='h-5 text-black outline-none' type="text" value={recipientId} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className=''>
          <div className='text-sm mr-5 mb-2'>Amount</div>
          <input className='h-5 text-black outline-none' type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div className='text-sm'>{feedBack}</div>
        <button className='bg-darkgreen px-7 py-2 rounded-lg cursor-pointer mt-5' onClick={handleClick}>Transfer</button>
      </div>
    </div>
  )
}

export default Transfer;