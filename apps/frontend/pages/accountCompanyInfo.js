import React from "react";
import { useState } from "react";
import Image from "next/image";
import logoDark from "../assets/logo-dark.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { BiLockAlt, BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const accountCompanyInfo = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mx-9">
        <div className="flex justify-center mt-14">
          <h1 className="text-3xl font-extrabold text-[#242F3E]">
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
            <p className="uppercase text-[#242F3E] text-sm">Company name</p>
            <p className="text-[#F3971F]">YOUR COMPANY NAME</p>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">COUNTRY</p>
            <p className="text-[#F3971F]">COMPANY COUNTRY</p>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">phone</p>
            <p className="text-[#F3971F]">+4900 000 00 00</p>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-[#242F3E] text-sm">email</p>
            <p className="text-[#F3971F]">contact@email.com</p>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#242F3E]"></div>
          </div>

          <div className="flex w-full my-10">
            <div className="flex w-full mt-4">
              <Link className="mx-auto w-full" href="/accountCompany">
                <button className="border border-[#242F3E] text-[#121A25] text-white font-normal py-2 px-4 rounded-full w-full">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-10">
          <div className="flex w-full">
            <Link className="mx-auto w-full" href="/accountCompany">
              <button className="bg-[#121A25] text-white font-normal py-2 px-4 rounded-full w-full">
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default accountCompanyInfo;
