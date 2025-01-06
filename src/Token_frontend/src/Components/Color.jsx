import React from 'react'
import ColorItem from './ColorItem'

const Color = () => {

  const colors = ['#2d3436', '#4834d4', '#be2edd', '#f9ca24', '#6ab04c', '#30336b']

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color',color)
  }

  const setColor = (event) => {
    const currentColor = event.target.style.backgroundColor
    setTheme(currentColor)
    console.log(currentColor);
  }
  

  return (
    <div className='fixed top-[30%] bg-white w-56 z-50'>
        <div className='  text-sm p-7'>Select Color</div>
        <div className='grid grid-cols-3'>
          {colors.map((color,index) => {
          return  color   })}
        </div>

      </div>

  )
}

export default Color