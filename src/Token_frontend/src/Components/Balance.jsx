import React,{useEffect, useState} from 'react'
import { Principal } from "@dfinity/principal"
import { Token_backend } from "../../../declarations/Token_backend"

const Balance = () => {
  const [inputValue, setInput] = useState("")
  const [balanceResult, setBalance] = useState("")
  const [symbol, setSymbol] = useState("")
  const [hidden, setHidden] = useState(true)

  const handleChange = async () => {
    const principal = Principal.fromText(inputValue);
    const balance = await Token_backend.balanceOf(principal);
    setBalance(balance.toLocaleString());
    setSymbol(await Token_backend.currency());
    setHidden(false)
    setInput("");
  }



  return (
    <div id='/balance' className='text-white mx-14 p-10 flex items-center justify-center font-montserrat animate-slideleft'>

      <div className='flex flex-col items-center'>
        <div className='mb-3 text-ash font-bold'>Check Account Token Balance</div>
        <div className='flex items-center gap-2 mt-5'>
        <input className='w-64 font-bold outline-none text-black rounded-lg h-8' type="text" placeholder='Enter a principal ID' value={inputValue} onChange={(e) => setInput(e.target.value)}/>
          <button className='bg-darkgreen w-32 h-10 rounded-lg ' onClick={handleChange}>Check Balance</button>
        </div>

          <div className='mt-5 animate-slideright' hidden={hidden}>The Account Has The Balance of {balanceResult} {symbol}</div>
        </div>

      </div>
  )
}

export default Balance