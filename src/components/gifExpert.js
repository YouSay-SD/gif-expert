import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpert = () => {

  const [categories, setCategories] = useState(['Shinobu Oshino']);
  
  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory setCategories={ setCategories } />

      <hr />

      <ol>
        { 
          categories.map( category => 
            <GifGrid 
              key={ category }
              category={ category }
            />
          )
        }
      </ol>

    </>
  )
}

export default GifExpert;

