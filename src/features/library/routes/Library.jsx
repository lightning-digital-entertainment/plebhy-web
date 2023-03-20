import React, { useEffect, useState } from "react";
import GifContainer from "../components/GifContainer";

function Library() {
    const [gifs, setGifs] = useState();
    const getGifs = async () => {
        const response = await fetch(
            "https://current.fyi/plebhy?limit=25&search=trending"
        );
        const data = await response.json();
        const gifs = data.data.map((gif) => ({
            pTag: gif.ptag,
            eTag: gif.etag,
            thumbnail: decodeURIComponent(gif.images.downsized.url),
            id: gif.sid
        }));
        setGifs(gifs);
    };
    useEffect(() => {
        getGifs();
    }, []);
    return (
        <div className="font-montserrat flex flex-col">
            <h2 className="text-lg font-medium ">PLEBHY Library</h2>
            {gifs ? (
                <div className="grid gap-1 grid-cols-3">
                  {gifs.map(gif => <GifContainer gifUrl={gif.thumbnail} key={gif.id}/>)}
                </div>
            ) : undefined}
        </div>
    );
}

export default Library;
