import React from 'react';
import './Box.css'

// Box - define what values are needed to compose one
const Box = ({ backgroundColor, width, height, id, handleRemoveBox }) => {
  const removeBox = () => handleRemoveBox(id);

  // Renders a Box with values passed to style attributes
  return (
    <div className='boxMain'>
      <div style={ {
        backgroundColor,
        width: `${width}px`,
        height: `${height}px`
      } }
      >
        <p className='boxText'>{ width } x { height }</p>
        <button className='boxRemoveBtn' onClick={ removeBox }>X</button>
      </div>
    </div>
  )

}

export default Box;