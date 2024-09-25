import React from 'react'
import ColorBox from './ColorBox'


const ColorBoxGrid = ({colors}) => {
  const boxes = []

  for (let i = 0; i <= 25; i++) {
    boxes.push(<ColorBox key={i} color={colors[i % colors.length]} />);
  }

  return <div className='ColorBoxGrid'>{boxes}</div>
}

export default ColorBoxGrid