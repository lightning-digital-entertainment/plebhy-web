import React, { useEffect, useState } from 'react';
import GifContainer from '../components/GifContainer';
import { Button } from '../../../components';

function StickerLibrary() {
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(0);
  const getGifs = async () => {
    const offset = page ? `&offset=${page * 25}` : '';
    const response = await fetch(`https://current.fyi/plebhy?limit=25&type=sticker${offset}&apikey=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    const parsedGifs = data.data.map((gif) => ({
      pTag: gif.ptag,
      eTag: gif.etag,
      thumbnail: decodeURIComponent(gif.images.downsized.url),
      id: gif.sid,
    }));
    setGifs((prev) => [...prev, ...parsedGifs]);
  };
  useEffect(() => {
    getGifs();
  }, [page]);
  return (
    <div className="font-montserrat flex flex-col items-center">
      {gifs ? (
        <div>
          <div className="grid gap-1 grid-cols-3 w-fit">
            {gifs.map((gif) => (
              <GifContainer gifUrl={gif.thumbnail} key={gif.id} pTag={gif.pTag} id={gif.id} />
            ))}
          </div>
          <Button
            title="Load More"
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          />
        </div>
      ) : undefined}
    </div>
  );
}

export default StickerLibrary;
