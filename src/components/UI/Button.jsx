import React from "react";

function Button({ onClick, title }) {
    return (
        <div className="flex justify-center">
            <button
                onClick={onClick}
                className="inline px-2 py-2 bg-slate-500 self-start rounded font-montserrat active:bg-slate-700 hover:bg-slate-600"
            >
                {title}
            </button>
        </div>
    );
}

export default Button;
