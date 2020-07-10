import React, { useState } from 'react';
import AddCategory from './addCategory';

const GifExpert = () => {

  const [categories, setCategories] = useState(['Shinobu Oshino', 'Illya Prisma', 'Ai Hinatsuru']);
  /*
  const handleAdd = () => {
    setCategories( [...categories, 'Rem'] );
  }
  */
  return (
    <>
      <h1>Gif Expert</h1>
      <AddCategory />
      
      <hr />

      <ol>
        { 
          categories.map( category => {
            return <li key={ category }> {category} </li>;
          })
        }
      </ol>

    </>
  )
}

export default GifExpert;

