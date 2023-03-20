import React from "react";
import image from "../../../assets/plebhyScreenshot.png";
import Button from "../../../components/UI/Button";

function Home() {
    return (
        <div className="flex justify-center flex-col mx-2 my-2">
            <h2 className="text-lg font-montserrat text-center">
                Decentralized GIF library built on nostr
            </h2>
            <div className="flex justify-center my-8">
                <img src={image} alt="screenshot" className="w-72" />
            </div>
            <Button title='Get Started'/>
        </div>
    );
}

export default Home;
