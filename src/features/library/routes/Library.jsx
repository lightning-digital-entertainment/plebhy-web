import React, { useEffect, useState } from 'react';
import { Button } from '../../../components';
import GifContainer from '../components/GifContainer';
import { getKind0 } from '../utils/nostr';

function Library() {
  const [gifs, setGifs] = useState();
  const getGifs = async () => {
    const response = await fetch('https://current.fyi/plebhy?limit=25&search=trending');
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
    <div className="font-montserrat flex flex-col">
      <h2 className="text-lg font-medium ">PLEBHY Library</h2>
      {gifs ? (
        <div className="grid gap-1 grid-cols-3">
          {gifs.map((gif) => (
            <GifContainer gifUrl={gif.thumbnail} key={gif.id} />
          ))}
        </div>
      ) : undefined}
      <Button
        onClick={() => {
          getKind0('ddf03aca85ade039e6742d5bef3df352df199d0d31e22b9858e7eda85cb3bbbe');
        }}
        title="Test"
      />
    </div>
  );
}

export default Library;
