import React from "react";
import { useState } from "react";
import Image from "next/image";
import logoDark from "../assets/logo-dark.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiLockAlt, BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const accountCompany = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mx-9">
        <div className="flex justify-center mt-14">
          <h1 className="text-center text-3xl font-extrabold text-[#242F3E]">
            Welcome, Company name
          </h1>
        </div>
        <div className="flex justify-center items-center content-center my-10">
          <div className="flex justify-center items-center w-24 h-24 bg-[#242F3E] rounded-full">
            <p className="text-white text-5xl text-center uppercase">cn</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-9 mt-20">
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">
              Company information
            </p>
            <Link href="/accountCompanyInfo"><p className="text-[#F3971F]">EDIT</p></Link>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">Add vehicle</p>
            <Link href="/addNewVehicule"><AiOutlinePlusCircle className="text-2xl text-[#F3971F]" /></Link>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div></div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">privacy policy</p>
            <BiLockAlt className="text-2xl text-[#F3971F]" />
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">log out</p>
            <Link href="/"><BiLogOutCircle className="text-2xl text-[#F3971F]" /></Link>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
          <div className="my-20">
            <div className="flex justify-center">
            <Link href="/"><Image src={logoDark} alt="AWS Logo" /></Link>
            </div>
            <div className="flex text-sm uppercase justify-center mt-2">
              <p className="text-[#242F3E]">rent a car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accountCompany;
