import React from "react";
import { useState } from "react";
import Image from "next/image";
import Fiat from "../assets/pngwing.png";
import Header from "../components/Header";
import Link from "next/link";

const ContinueReview = () => {
  const [logIn, setLogIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const myRef = React.createRef();
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("FR");

  const handleLogIn = () => {
    setLogIn(true);
    setSignUp(false);
  };

  const handleSignUp = () => {
    setSignUp(true);
    setLogIn(false);
  };

  return (
    <div className="bg-[#242F3E]">
      <Header />
      <div className="flex flex-col mx-9 mt-10">
        <div>
          <h1 className="text-3xl font-extrabold text-[#F3971F]">
            Review Order
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-sm font-medium text-white">Fiat 500</p>
          <p
            className="text-xs
font-normal text-white"
          >
            or similar Economy
          </p>
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
              <p
                className="carFontDetail font-normal
text-white ml-2"
              >
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
      <div className="flex justify-evenly bg-[#121A25] mt-6">
        <div className="w-full pt-3">
          {logIn ? (
            <button
              onClick={handleLogIn}
              className="text-sm font-normal text-white border-b-2 border-[#F3971F] uppercase pb-2 w-full"
            >
              {" "}
              log in with{" "}
            </button>
          ) : (
            <button
              onClick={handleLogIn}
              className="text-sm font-normal text-white uppercase pb-2 w-full"
            >
              {" "}
              log in with{" "}
            </button>
          )}
        </div>
        <div className="w-full pt-3">
          {signUp ? (
            <button
              onClick={handleSignUp}
              className="text-sm font-normal text-white border-b-2 border-[#F3971F] uppercase pb-2 w-full"
            >
              {" "}
              create an account{" "}
            </button>
          ) : (
            <button
              onClick={handleSignUp}
              className="text-sm font-normal text-white uppercase pb-2 w-full"
            >
              {" "}
              create an account{" "}
            </button>
          )}
        </div>
      </div>
      <div className="bg-[#121A25] pb-10">
        {logIn && (
          <form>
            <div className="mx-9 pt-10">
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
              <div className="my-2">
                <p className="text-white carFontDetail">I forgot my password</p>
              </div>
              <div className="flex w-full my-10">
                <Link className="mx-auto w-full" href="/orderConfirm">
                  <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 mb-[42px] rounded-full w-full">
                    Confirm
                  </button>
                </Link>
              </div>
              <div>
                <p className="text-[#F3971F] carFontDetail">
                  By logging in, you agree with the Privacy Policy of AWS Rent a
                  Car
                </p>
              </div>
            </div>
          </form>
        )}

        {signUp && (
          <form>
            <div className="mx-9 pt-10">
              <div className="flex w-full mt-4">
                <p className="text-white carFontDetail">
                  Fie lds with * must be filled in.
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
                  className="border border-[#F3971F] bg-[#242F3E] text-whi
te text-sm rounded-full block w-full p-2.5 "
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
              <div className="flex w-full my-10">
                <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
                  Sign Up
                </button>
              </div>
              <div>
                <p className="text-[#F3971F] carFontDetail">
                  By signing up, you agree with the Privacy Policy of AWS Rent a
                  Car
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContinueReview;
