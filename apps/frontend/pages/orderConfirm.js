import React from "react";
import { useState } from "react";
import Image from "next/image";
import Fiat from "../assets/pngwing.png";
import Paypal from "../assets/paypal-784404_1280.png";
import Stripe from "../assets/stripe.png";
import Header from "../components/Header";
import Link from "next/link";

const orderConfirm = () => {
  return (
    <div className="bg-[#121A25]">
      <div className="bg-[#121A25]">
        <Header />
        <div className="flex flex-col mx-9 mt-10">
          <div className="flex justify-center my-10">
            <h1 className="text-3xl font-extrabold text-[#F3971F]">
              Welcome, name
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-t-3xl bg-[#242F3E] justify-center h-screen">
        <div className="flex flex-col mx-9 mt-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#F3971F]">
              Review Order
            </h1>
          </div>
          <div className="mt-10">
            <p className="text-sm font-medium text-white">Fiat 500</p>
            <p className="text-xs font-normal text-white">or similar Economy</p>
          </div>
          <div className="flex">
            <div className="mr-10">
              <Image src={Fiat} alt="Fiat 500" />
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-2 items-center">
              <div className="border-l-2 border-[#F3971F] h-8">
                <p className="carFontDetail font-normal text-white ml-2">
                  automatic transmission
                </p>
              </div>
              <div className="border-l-2 border-[#F3971F] h-8">
                <p className="carFontDetail font-normal text-white ml-2">
                  5 passengers
                </p>
              </div>
              <div className="border-l-2 border-[#F3971F] h-8">
                <p className="carFontDetail font-normal text-white ml-2">
                  power steering
                </p>
              </div>
              <div className="border-l-2 border-[#F3971F] h-8">
                <p className="carFontDetail font-normal text-white ml-2">
                  2 doors
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-8">
            <div>
              <p className="text-xs text-white">Pick up</p>
              <p className="text-xs font-bold text-[#F3971F]">
                Las Palmas Gran Canaria Airport
              </p>
              <p className="text-xs text-white">2023-02-02 - 10:00</p>
            </div>
            <div>
              <p className="text-xs text-white">Return</p>
              <p className="text-xs font-bold text-[#F3971F]">
                Las Palmas Gran Canaria Airport
              </p>
              <p className="text-xs text-white">2023-02-02 - 10:00</p>
            </div>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-[#F3971F]"></div>
          </div>
          <div className="flex justify-between text-2xl font-extrabold text-[#F3971F] uppercase">
            <p>total</p>
            <p>€448.8</p>
          </div>
        </div>
        <form>
          <div className="mx-9 mt-10">
            <div className="flex w-full mt-10">
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-full" href="thankYou">
                  <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex w-full my-4">
              <button className="flex justify-center bg-white text-white font-normal py-2 px-4 rounded-full w-full">
                <Image className="w-14" src={Paypal} alt="Paypal" />
              </button>
            </div>
            <div className="flex w-full my-4">
              <button className="flex justify-center bg-white text-white font-normal py-2 px-4 rounded-full w-full">
                <Image className="w-14" src={Stripe} alt="Stripe" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default orderConfirm;
