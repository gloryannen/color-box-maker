import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

// Box list consist of array of boxes
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = newBox => {
    setBoxes(boxes => [...boxes, newBox]);
  }

  // Handle remove on box by id when clicked
  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  // Loads DOM with a form, renders a Box once form is submitted
  return (
    <div className='boxListContainer'>
      <div>
        <NewBoxForm addBox={ addBox } />
        { boxes.map(({ backgroundColor, width, height, id, handleRemoveBox }) =>
          <Box
            backgroundColor={ backgroundColor }
            width={ width }
            height={ height }
            id={ id }
            key={ id }
            handleRemoveBox={ removeBox }
          />) }
      </div>
    </div>
  )
}

export default BoxList;