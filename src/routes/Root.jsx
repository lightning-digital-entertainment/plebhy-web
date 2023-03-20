import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Root() {
    return (
        <>
            <Navbar />
            <div className="mt-8 flex justify-center">
                <Outlet />
            </div>
        </>
    );
}

export default Root;
