import React, { useState, useEffect, useCallback } from "react";
import ProgressBar from "./ProgressBarr";

import { Link, useNavigate } from "react-router-dom";

function RandomLetter () {
  const letterRandom = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z","0","1","2","3","4","5","6","7","8","9"];
  
  const [randomArrayElements, setRandomArrayElements] = useState([]);
  const navigate = useNavigate();

  const generateRandomElements = () => {
    let randomArray = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letterRandom.length);
      randomArray.push({
        key: letterRandom[randomIndex],
        active: false
      });
    }

    setRandomArrayElements(randomArray);
  };

  const gameOverTimeFinish = useCallback(() => {
    navigate(0);
  }, [navigate]);
    
  setTimeout(() => {
    gameOverTimeFinish();
  }, 9000);

  useEffect(() => {
    generateRandomElements();
  }, []);

  const handleKeyDown = useCallback((event) => {
    const keyPressed = event.key.toLowerCase();

    if (!randomArrayElements.some(item => item.key === keyPressed)) {
      navigate('/lose');
    }

    const updatedElements = randomArrayElements.map((item) =>
    item.key === keyPressed ? { ...item, active: true } : item
  );

    setRandomArrayElements(updatedElements);
  }, [randomArrayElements]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const allActive = randomArrayElements.every(item => item.active);
    if (allActive) {
      const timeout = setTimeout(() => {
        navigate('/win');
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [randomArrayElements]);

  return (
    <div className="flex flex-col space-y-2  bg-[#229a00] w-[25rem] h-[10rem] rounded-lg p-2 items-center justify-center">
      <div className="flex">
        {randomArrayElements.map((item, index) => (
          <span
            key={index}
            className={`uppercase w-10 h-10 flex items-center justify-center text-3xl rounded-lg m-1 cursor-pointer ${item.active ? 'bg-[#ffe605] text-white' : 'bg-[#81ebaf] text-black'}`}
            
            onClick={() => {
              const updatedElements = randomArrayElements.map((el, i) =>
                i === index ? { ...el, active: true } : el
              );
              setRandomArrayElements(updatedElements);
            }}            
          >
            {item.key}
          </span>
        ))}
      </div>      
      <ProgressBar />      
      <Link to="/">
        <button
          className="w-32 h-8 bg-[#ffdc14] text-[#229a00] font-bold border-solid border-yellow-700 border-[2px] rounded-lg text-2xl hover:bg-[#ceaf00]"
        >
          Reiniciar
        </button>
      </Link>      
    </div>
  );
};

export default RandomLetter;