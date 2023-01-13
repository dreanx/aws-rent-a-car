import React, { useContext } from "react";
import DatePicker from "../components/DatePicker";
import Link from "next/link";

const SelectDate = () => {
  return (
    <div className="flex flex-col justify-center bg-[#242F3E] h-screen">
      <div className="flex justify-center items-center">
        <DatePicker />
      </div>
      <div className="flex justify-evenly my-8">
        <div>
          <p className="text-xs text-center text-[#F3971F]">pick-up time</p>
          <select
            name="hours"
            className="bg-transparent text-sm text-white appearance-none outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
          <span className="text-sm mr-2 text-white">:</span>
          <select
            name="minutes"
            className="bg-transparent text-sm text-white appearance-none outline-none mr-2"
          >
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <select
            name="ampm"
            className="bg-transparent text-sm text-white appearance-none outline-none"
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
        <div>
          <p className="text-xs text-center text-[#F3971F]">drop-off time</p>
          <select
            name="hours"
            className="bg-transparent text-sm text-white appearance-none outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">10</option>
            <option value="12">12</option>
          </select>
          <span className="text-sm mr-2 text-white">:</span>
          <select
            name="minutes"
            className="bg-transparent text-sm text-white appearance-none outline-none mr-2"
          >
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <select
            name="ampm"
            className="bg-transparent text-sm text-white appearance-none outline-none"
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
      <div className="flex w-full mt-4">
        <Link className="mx-auto w-1/2" href="/rentCar">
          <button className="border border-[#F3971F] text-white font-normal py-2 px-4   rounded-full w-full">
            Cancel
          </button>
        </Link>
      </div>
      <div className="flex w-full mt-4">
        <Link className="mx-auto w-1/2" href="/rentCar">
          <button className=" bg-[#F3971F] text-white font-normal py-2 px-4  mb-[42px] rounded-full w-full">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SelectDate;
