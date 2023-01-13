import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiLockAlt, BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const orderConfirm = () => {
  return (
    <div className="bg-[#121A25]">
      <div className="flex flex-col mx-9">
        <div className="flex justify-center mt-14">
          <h1 className="text-3xl font-extrabold text-[#F3971F]">
            Welcome, name
          </h1>
        </div>
        <div className="flex justify-center items-center content-center my-10">
          <div className="flex justify-center items-center w-24 h-24 bg-[#F3971F] rounded-full">
            <p className="text-[#242F3E] text-5xl text-center uppercase">cn</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-t-3xl mt-10 bg-[#242F3E] justify-center">
        <div className="flex flex-col mx-9 mt-20">
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-white text-sm">
                personal information
              </p>
              <Link href="userEdit"><p className="text-[#F3971F]">edit</p></Link>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#F3971F]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-white text-sm">book a car</p>
              <Link href="/chooseCar">
                <AiOutlinePlusCircle className="text-2xl text-[#F3971F]" />
              </Link>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#F3971F]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-white text-sm">my bookings</p>
              <Link href="/myBookings"><IoChevronForwardCircleOutline className="text-2xl text-[#F3971F]" /></Link>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#F3971F]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-white text-sm">privacy policy</p>
              <BiLockAlt className="text-2xl text-[#F3971F]" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#F3971F]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase text-white text-sm">log out</p>
              <Link href="/">
                <BiLogOutCircle className="text-2xl text-[#F3971F]" />
              </Link>
            </div>
            <div className="my-20">
              <Link href="/">
                <div className="flex justify-center">
                  <Image src={logo} alt="AWS Logo" />
                </div>
              </Link>
              <div className="flex text-sm uppercase justify-center mt-2">
                <p className="text-white">rent a car</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orderConfirm;
