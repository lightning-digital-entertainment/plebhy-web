import React, { useEffect, useState } from 'react';
import GifContainer from '../components/GifContainer';

function Library() {
  const [gifs, setGifs] = useState();
  const getGifs = async () => {
    const response = await fetch('https://current.fyi/plebhy?limit=50&search=trending');
    const data = await response.json();
    const parsedGifs = data.data.map((gif) => ({
      pTag: gif.ptag,
      eTag: gif.etag,
      thumbnail: decodeURIComponent(gif.images.downsized.url),
      id: gif.sid,
    }));
    setGifs(parsedGifs);
  };
  useEffect(() => {
    getGifs();
  }, []);
  return (
    <div className="font-montserrat flex flex-col items-center">
      {gifs ? (
        <div className="grid gap-1 grid-cols-3 w-fit">
          {gifs.map((gif) => (
            <GifContainer gifUrl={gif.thumbnail} key={gif.id} pTag={gif.pTag} id={gif.id} />
          ))}
        </div>
      ) : undefined}
    </div>
  );
}

export default Library;
