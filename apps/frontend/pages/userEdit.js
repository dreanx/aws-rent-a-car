import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const orderConfirm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-[#121A25]">
      <div className="flex flex-col mx-9">
        <div className="flex justify-center mt-14">
          <h1 className="text-3xl font-extrabold text-[#F3971F]">
            Welcome, name
          </h1>
        </div>
        <div className="flex justify-center items-center content-center my-10">
          <div className="flex justify-center items-center w-24 h-24 bg-[#F3971F] rounded-full">
            <p className="text-[#242F3E] text-5xl text-center uppercase">cn</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-t-3xl mt-10 bg-[#242F3E] justify-center">
        <form>
          <div className="flex flex-col mx-9 mt-20">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase">name</p>
                <input
                  type="text"
                  placeholder="user name"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-white text-sm text-right"
                />
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase">last name</p>
                <input
                  type="text"
                  placeholder="user last name"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-white text-sm text-right"
                />
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase w-full">date of birth</p>
                <DatePicker
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-[#F3971F] text-sm justify-end react-datepicker__header datePickerColor datePickerFontColor dateBgSelector react-datepicker__input-container dateBgSelectorOnChange"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                {/* <input
                  type="text"
                  placeholder="dd/mm/yy"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-white text-sm text-right"
                /> */}
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase">country</p>
                <select
                  name="country"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-[#F3971F] text-sm text-right"
                >
                  <option value="Country of residence">user country</option>
                  <option value="France">France</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Spain">Spain</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Belgiumd">Belgium</option>
                  <option value="Germany">Germany</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Italy">Italy</option>
                  <option value="Croatia">Croatia</option>
                </select>
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase">phone</p>
                <input
                  type="number"
                  placeholder="+33 6 00 00 00 00"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-white text-sm text-right"
                />
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white uppercase">email</p>
                <input
                  type="text"
                  placeholder="example@mail.com"
                  className="bg-[#242F3E] placeholder-[#F3971F] uppercase text-white text-sm text-right"
                />
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-[#F3971F]"></div>
              </div>
            </div>
            <div className="my-10">
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-full" href="/userAccount">
                  <button className="border border-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="flex w-full mt-4">
                <Link className="mx-auto w-full" href="/userAccount">
                  <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 mb-[42px] rounded-full w-full">
                    Confirm
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

export default orderConfirm;
