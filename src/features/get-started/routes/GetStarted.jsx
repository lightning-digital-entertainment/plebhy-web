import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
    const navigate = useNavigate();
    return (
        <div className="font-montserrat justify-center text-center">
            <div className="bg-zinc-800 p-2 my-4">
                <h2 className="text-lg font-medium">
                    Add your .gif to the PLEBHY library
                </h2>
                <p>
                    Adding a .gif to the PLEBHY library is as easy as posting it
                    using any nostr client or by using our{" "}
                    <p
                        onClick={() => {
                            navigate("/creator");
                        }}
                        className="inline text-zinc-400 hover:text-zinc-500"
                    >
                        CREATOR
                    </p>
                    .
                </p>
            </div>
            <div className="bg-zinc-800 p-2">
                <h2 className="text-lg font-medium">
                    Use a .gif from the PLEBHY library
                </h2>
                <p>
                   You can use PLEBHY gifs directly in clients that integrate the PLEBHY API (here is a list). If your favourite client did not integrate the PLEBHY API yet, you can still use PLEBHY gifs by copying their URL from our web-library.
                </p>
            </div>
        </div>
    );
}

export default GetStarted;
