import React from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import Link from "next/link";

const signUp = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-[#242F3E]">
      <div className=" mx-9">
        <div className="flex justify-center">
          <Image src={logo} alt="AWS Logo" />
        </div>
        <div className="flex text-sm uppercase justify-center mt-2">
          <p className="text-white">rent a car </p>
        </div>
        <div className="mt-16">
          <form>
            <div className="flex justify-center mt-8">
              <h1 className="text-2xl font-extrabold uppercase text-[#F3971F]">
                i want to rent a car
              </h1>
            </div>
            <div className="flex w-full my-10">
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-3/4" href="/newUser">
                  <button className="border border-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-32">
              <h1 className="text-2xl font-extrabold uppercase text-white">
                i want to offer a car
              </h1>
            </div>

            <div className="flex w-full my-10">
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-3/4" href="/companySignUp">
                  <button className="border border-[#FFFFFF] text-white font-normal py-2 px-4 mb-[42px] rounded-full w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
