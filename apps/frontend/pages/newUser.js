import React from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import Link from "next/link";

const signUp = () => {
  return (
    <div className=" bg-[#242F3E]">
      <div className="flex flex-col justify-center">
        <form>
          <div className="flex justify-center mt-8">
            <h1 className="text-2xl font-extrabold uppercase text-[#F3971F]">
              Create an account
            </h1>
          </div>
          <div className="mx-9 mt-10">
            <div className="my-2">
              <p className="text-white carFontDetail">
                Fields with * must be filled in.
              </p>
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="text"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="name"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="last_name"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="last name"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="birth_date"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="date of birth"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="country"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="country of residence"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="number"
                id="phne_number"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="phone number"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="email"
                id="email"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="email"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="password"
                id="password"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="password"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="password"
                id="confirm_password"
                className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
                placeholder="confirm password"
                required
              />
            </div>
            <div className="flex w-full mt-10">
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-full" href="/userAccount">
                  <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 mb-[42px] rounded-full w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#F3971F] carFontDetail mt-[42px] mb-[42px]">
                by sigin up, you agree with the Privacy Policy of AWS Rent a
                Car.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signUp;
