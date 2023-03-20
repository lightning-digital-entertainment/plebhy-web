import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/plebhyScreenshot.png";
import Button from "../../../components/UI/Button";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center flex-col mx-2 my-2">
            <h2 className="text-lg font-bungee font-medium text-center">
                Decentralized GIF library built on nostr
            </h2>
            <div className="flex justify-center my-8">
                <img src={image} alt="screenshot" className="w-72" />
            </div>
            <Button title='Get Started' onClick={() => {navigate("/get-started")}}/>
        </div>
    );
}

export default Home;
