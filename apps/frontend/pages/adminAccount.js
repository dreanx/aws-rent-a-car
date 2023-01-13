import React from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import { CiBullhorn } from "react-icons/ci";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoKeyOutline, IoCarSportOutline } from "react-icons/io5";
import { BiTransferAlt, BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const adminAccount = () => {
  return (
    <div>
      <div className="flex flex-col justify-center h-screen bg-[#F3971F]">
        <div className="mx-9">
          <div className="flex justify-center my-8">
            <h1 className="text-2xl font-extrabold uppercase text-[#121A25] text-center mx-9">
              Welcome, administrator name
            </h1>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">dashboard</p>
              <RiDashboardLine className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">admin users</p>
              <AiOutlineUser className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">advertisement</p>
              <CiBullhorn className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">bookings</p>
              <BsArrowRightCircle className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">car owner</p>
              <IoKeyOutline className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">cars listing</p>
              <IoCarSportOutline className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">car specifications</p>
              <AiOutlineInfoCircle className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">rental transaction</p>
              <BiTransferAlt className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold">log out</p>
              <BiLogOutCircle className="text-2xl" />
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-[#121A25]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#242F3E]">
      <div className="my-10">
        <div className="flex justify-center">
          <Link href="/"><Image src={logo} alt="AWS Logo" /></Link>
        </div>
        <div className="flex text-sm uppercase justify-center mt-2">
          <p className="text-white">rent a car </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default adminAccount;
