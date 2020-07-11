import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

  const { data : images, loading } = useFetchGifs( category );
 
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>

      { loading && <span className="animate__animated animate__flash">Loading</span> }
    
      <div className="card-grid">

        {
          images.map( img  => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid;