import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, LoadingComponent } from '../../../components';
import { encodePubkey } from '../../../utils';
import { useUser } from '../hooks';

function GifPage() {
  const [gifData, setGifData] = useState();
  const { gifId } = useParams();
  const user = useUser(gifData?.ptag);
  useEffect(() => {
    const getGifData = async () => {
      const res = await fetch(`https://getcurrent.io/plebhy/get/${gifId}`);
      const { data } = await res.json();
      setGifData(data[0]);
    };
    getGifData();
  }, []);

  const copyHandler = () => {
    navigator.clipboard.writeText(decodeURIComponent(gifData?.images.original.url));
  };
  return (
    <div className="w-full">
      <div className="py-2 px-8 bg-zinc-800 mb-4 font-montserrat font-bold">
        <Link to="/library">{'<- Back'}</Link>
      </div>
      {gifData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="flex justify-center px-12 flex-col">
            <img src={decodeURIComponent(gifData?.images.original.url)} className="rounded-xl" alt="Plebhy GIF" />
            <div className="flex flex-row justify-evenly mt-4">
              <Button title="Copy URL" onClick={copyHandler} />
              <Button title="Zap (Coming Soon)" />
            </div>
          </div>
          {user ? (
            <div className="font-montserrat flex flex-col items-center w-full p-4 text-center sm:text-left sm:items-start">
              <h3 className="text-xs mb-4">Created by:</h3>
              <img src={user.userData.picture} className="w-1/5 rounded-full flex" alt="Creator Profileimage" />
              <h4 className="text-lg font-bold">{user.userData.name}</h4>
              <p className="">{user.userData.about}</p>
              <p className="text-xs text-accent">
                {encodePubkey(user.pubkey).slice(0, 32)}
                ...
              </p>
            </div>
          ) : (
            <LoadingComponent />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GifPage;
