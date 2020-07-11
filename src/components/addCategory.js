import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  // Handle Input Change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length > 1 ) {
      setCategories( cats => [ inputValue, ...cats ] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>

      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
        placeholder="Escribe tu busqueda"
      />

    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;