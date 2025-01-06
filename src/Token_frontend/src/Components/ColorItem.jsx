import React from 'react'

const ColorItem = ({color, setColor}) => {
  return (
    <div onClick={setColor} className='grid grid-cols-3 w-10 h-10 bg-bgColor rounded-lg' style={{'--bg-color':color}}></div>
  )
}

export default ColorItem