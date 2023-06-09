import React from 'react';

function GetStarted() {
  return (
    <div className="font-montserrat justify-center text-center md:w-1/2">
      <div className="bg-zinc-800 p-4 m-4 rounded-lg">
        <h2 className="text-lg font-medium text-accent font-bungee">Add your .gif to the PLEBHY library</h2>
        <p>
          Adding a .gif to the PLEBHY library is as easy as posting it using any nostr
          client or by using our CREATOR. Upload your GIF and include its link as well
          as the hashtag
          <b> #PLEBHY </b>
          in an event. We will automatically index
          your GIF and include a reference to your event so that others can Zap it.
        </p>
      </div>
      <div className="bg-zinc-800 p-4 m-4 rounded-lg">
        <h2 className="text-lg font-medium text-accent font-bungee">Use a .gif from the PLEBHY library</h2>
        <p>
          You can use PLEBHY gifs directly in clients that integrate the PLEBHY API
          (here is a list).If your favourite client did not integrate the PLEBHY API
          yet, you can still use PLEBHY gifs by
          copying their URL from our web-library.
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
