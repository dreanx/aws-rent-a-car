import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import close from "../assets/close.svg";

const myBookings = () => {
  return (
    <div className="bg-[#121A25]">
      <Link href="/userAccount"><Image className="ml-80 pt-10" src={close} /></Link>
      <div className="flex flex-col justify-center items-center bg-[#121A25] h-screen">
        <div>
          <h1 className="text-3xl font-extrabold text-[#F3971F]">
            My Bookings
          </h1>
        </div>
        <div>
          <p className="my-40 text-white text-xl uppercase">no reservation</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/rentCar">
            <AiOutlinePlusCircle className="text-5xl text-[#F3971F] text-center my-2" />
          </Link>
          <p className="text-[#F3971F]">make reservation</p>
        </div>
      </div>
    </div>
  );
};

export default myBookings;
