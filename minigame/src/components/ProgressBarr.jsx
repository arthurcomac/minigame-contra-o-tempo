import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState("100%");

  useEffect(() => {
    const totalTime = 9000; // Tempo total em milissegundos (9 segundos)
    let currentTime = 0;

    const updateProgressBar = () => {
      currentTime += 100;
      const newProgressWidth = ((totalTime - currentTime) / totalTime) * 100 + "%";
      setProgressWidth(newProgressWidth);

      if (currentTime < totalTime) {
        setTimeout(updateProgressBar, 100);
      } else {
        gameOverTimeFinish(); // Função para recarregar a página
      }
    };

    const gameOverTimeFinish = () => {
      window.location.reload(); //pendencia, ajustar para React
    };

    updateProgressBar();

    return () => {
      clearTimeout(updateProgressBar);
    };
  }, []);

  return (
    <div className="w-full h-4 bg-[#a6faca] rounded-lg overflow-hidden">
      <div
        className="h-full bg-[#ffe605]"
        style={{ width: progressWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;