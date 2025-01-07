import React,{useContext} from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Claim from './Components/Claim'
import Balance from './Components/Balance'
import Transfer from './Components/Transfer'
import Color from './Components/Color'
import {AddContext} from "./Context/ContextProvider"

const App = () => {
  
  return (
  <>
      <div className='bg-black pb-10'>
      {/* <Color /> */}
      <Header />
      <Home />
      <Claim />
      <Balance />
      <Transfer />
    </div>
  </>

  )
}

export default App