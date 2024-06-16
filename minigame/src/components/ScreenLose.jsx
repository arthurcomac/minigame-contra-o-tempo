import React from "react";

import { Link } from 'react-router-dom';

function ScreenLose() {
  return (    
    <div className="bg-[#229a00] flex w-[25rem] h-[10rem] rounded-lg p-2 items-center justify-center">
      <div className="space-x-4 flex flex-col items-center text-white">
        <h1 className="text-3xl font-bold">
          GAME OVER
        </h1>
        <p className="flex text-center text-xl">
          Tente novamente!
        </p>
        <button
        className="w-32 h-12 bg-[#ffdc14] text-[#229a00] font-bold border-solid border-yellow-700 border-[2px] rounded-lg text-2xl hover:bg-[#ceaf00]">
        <Link to="/play">Reiniciar</Link>          
        </button>
      </div>      
    </div>
  );
}

export default ScreenLose;