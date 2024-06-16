import React from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";

import Routes from "./components/routes";


export function Main() {
  return (
    <div className="mt-[4rem] flex flex-col items-center">
      <div className="animate-spin-slow w-[16rem] h-[16rem]">
        <FaRegHourglassHalf color="#229a00" size={250} />
      </div>
      <div className="z-0">
        <Routes />
      </div>
    </div>
  );
}
  