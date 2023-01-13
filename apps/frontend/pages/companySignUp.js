import React from "react";
import Link from "next/link";

const companySignUp = () => {
  return (
    <div className="flex flex-col justify-center h-screen ">
      <form>
        <div className="flex justify-center mt-8">
          <h1 className="text-2xl font-extrabold uppercase text-[#121A25]">
            Create an account
          </h1>
        </div>
        <div className="mx-9 mt-10">
          <div className="flex justify-center my-2">
            <p className="text-[#121A25] text-base font-medium uppercase ">
              company information
            </p>
          </div>
          <div className="flex w-full mt-4">
            <input
              type="text"
              id="text"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="name"
              required
            />
          </div>
          <div className="flex w-full mt-4">
            <input
              type="text"
              id="country"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="country of residence"
              required
            />
          </div>
          <div className="flex w-full mt-4">
            <input
              type="number"
              id="phne_number"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="phone number"
              required
            />
          </div>
          <div className="mx-9 my-6">
            <div className="flex justify-center">
              <p className="text-[#121A25] text-base font-medium uppercase ">
                account access
              </p>
            </div>
          </div>
          <div className="flex w-full mt-4">
            <input
              type="email"
              id="email"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="email"
              required
            />
          </div>
          <div className="flex w-full mt-4">
            <input
              type="password"
              id="password"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="password"
              required
            />
          </div>
          <div className="flex w-full mt-4">
            <input
              type="password"
              id="confirm_password"
              className="border border-[#121A25] text-[#121A25] text-sm rounded-full block w-full p-2.5 "
              placeholder="confirm password"
              required
            />
          </div>
          <div className="my-2">
            <p className="text-[#F3971F] carFontDetail">
              Fields with * must be filled in.
            </p>
          </div>

          <div className="flex w-full my-10">
            <div className="flex w-full mt-4">
              <Link className="mx-auto w-full" href="/accountCompany">
                <button className="bg-[#121A25] text-white font-normal py-2 px-4 rounded-full w-full">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[#121A25] carFontDetail">
              by sigin up, you agree with the Privacy Policy of AWS Rent a Car
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default companySignUp;
