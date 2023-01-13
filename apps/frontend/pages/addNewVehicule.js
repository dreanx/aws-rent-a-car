import React from "react";
import Image from "next/image";
import Link from "next/link";
import closeDark from "../assets/closeDark.svg";

const addNewVehicules = () => {
  return (
    <div className=" bg-white">
      <div className="flex flex-row pt-10 mb-[42px] justify-end pr-5 items-end">
        <button>
          <Image src={closeDark} />
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <form>
          <div className="flex justify-center mt-8">
            <h1 className="text-2xl font-extrabold  text-[#242F3E]">
              New Vehicule
            </h1>
          </div>
          <div className="mx-9 mt-10">
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="model"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-[#242F3E]text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="model"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="category"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="category"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="class"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="class"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="transmission"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="transmission"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="text"
                id="power steering"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="power steering"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="number"
                id="passenger"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="number of passengers"
                required
              />
            </div>
            <div className="flex w-full mt-4">
              <input
                type="number"
                id="door"
                className="border border-[#242F3E] placeholder-[#242F3E] bg-white text-[#242F3E] text-sm rounded-full block w-full p-2.5 "
                placeholder="doors"
                required
              />
            </div>

            <div className="flex w-full mb-10 mt-20">
          <div className="flex w-full">
            <Link className="mx-auto w-full" href="/accountCompany">
              <button className="bg-[#121A25] text-white font-normal py-2 px-4 rounded-full w-full">
                Save
              </button>
            </Link>
          </div>
        </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addNewVehicules;
