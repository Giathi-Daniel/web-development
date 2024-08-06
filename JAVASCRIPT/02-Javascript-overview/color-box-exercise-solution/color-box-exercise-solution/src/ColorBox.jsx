import React, { useState } from 'react'

function selectColor(arr) {
  const randIdx = Math.floor(Math.random() * arr.length)
  return arr[randIdx]
}

const ColorBox = ({colors}) => {
  const [color, setColor] = useState(selectColor(colors))

  const changeColor = () => {
    const randColor = selectColor(colors)
    setColor(randColor)
  }
  return (
    <div 
      onClick={changeColor}
      style={{backgroundColor: color}}
    >
      
    </div>
  )
}

export default ColorBox