import React, { useEffect } from 'react';

const GifGrid = ({ category }) => {

  useEffect(() => {
    getGifs();
  }, [])

  // Get Gifs
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=shinobu&limit=10&api_key=ftdnawdwqdCoVNJcNw2zxOOaAqNo67Ty`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
  }

  return (
    <div>
      { /*
        gifs.map(( id, title, url) => {
          return (
            <img 
              key={ id }
              alt={ title }
              src={ url }
            />
          )
        })*/
      }
    </div>
  )
}

export default GifGrid;