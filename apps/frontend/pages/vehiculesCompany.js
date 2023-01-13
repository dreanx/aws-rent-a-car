import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import closeDark from "../assets/closeDark.svg";
import Image from "next/image";

const myBookings = () => {
  return (
    <div className=" bg-white h-screen">
      <div className="flex flex-row pt-10 mb-[42px] justify-end pr-5 items-end">
        <button>
          <Image src={closeDark} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#121A25]">
            My Vehicules
          </h1>
        </div>

        <p className="my-40 text-[#121A25] text-xl uppercase text-center">
          You don't have any vehicules registered yet
        </p>

        <div className="flex flex-col justify-center items-center">
          <AiOutlinePlusCircle className="text-5xl text-[#121A25] text-center my-2" />
          <p className="text-[#121A25]">Add a vehicule</p>
        </div>
      </div>
    </div>
  );
};

export default myBookings;
