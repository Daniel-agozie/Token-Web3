import React, { useState } from 'react'
import { Token_backend, canisterId, createActor } from "../../../declarations/Token_backend";
import { AuthClient } from '@dfinity/auth-client';

const Claim = () => {

  const [disabled, setDisable] = useState(false)
  const [buttonText, setText] = useState("Claim")

  const handleChange = async () => {
    setDisable(true)

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
    setText(result)
  }

  return (
    <div id="/claim" className='mx-10 rounded-xl bg-darkgreen  text-white p-10 animate-slideright'>

      <div className='flex flex-col md:flex-row items-center justify-between '>
        <img className='md:w-80 w-64 h-36 md:h-44 ml-10 mr-10 pt-10 rounded-lg animate-slideleft' src="images/wallet.jpeg" alt="wallet" />
        <div className='text-sm md:text-lg font-roboto mr-10 flex md:flex-col items-center animate-slideup md:mt-5 mt-14'>
          Get your free Dan Token here! Claim 10,000 🚰 token to your account
          <button className='md:mt-10 bg-black rounded-md md:w-32 w-44 shadow-xl ml-10 text-sm px-5 py-2' onClick={handleChange} disabled={disabled}>
            {buttonText}
            </button>
        </div>

      </div>

    </div>
  )
}

export default Claim; 