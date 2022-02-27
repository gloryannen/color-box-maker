import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
  // Set a form inputs to empty strings/values
  const INITIAL_STATE = {
    backgroundColor: '',
    width: '',
    height: ''
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  // Handle input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  // Handle form submission - create new box with params given, assign id, clear inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE)
  };

  //Color box form
  return (
    <div className='newBoxFormMain'>
      <form onSubmit={ handleSubmit }>
        <h2>Color Box Maker</h2>
        <input
          id='backgroundColor'
          type='text'
          name='backgroundColor'
          value={ formData.backgroundColor }
          onChange={ handleChange }
          placeholder='Color'
          required
        />
        <input
          id='width'
          type='text'
          name='width'
          value={ formData.width }
          onChange={ handleChange }
          placeholder='Width(px)'
          required
        />
        <input
          id='height'
          type='text'
          name='height'
          value={ formData.height }
          onChange={ handleChange }
          placeholder='Height(px)'
          required
        />
        <button>Create Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm;