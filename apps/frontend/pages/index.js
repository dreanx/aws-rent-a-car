import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import awsLogo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import carPicture from "../assets/carMain.png";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#242F3E] pb-[42px]">
      <Header />
      <Image className="mx-auto mt-10 w-30 h-30" src={awsLogo} />
      <h1 className="flex justify-center mt-5 mb-10 text-white">RENT A CAR</h1>
      <Image className="w-90 h-90" src={carPicture} />
      <div className="flex w-full mt-4">
        <Link className="mx-auto w-1/2" href="/rentCar"><button className="border border-[#F3971F] text-white font-normal py-2 px-4 mt-2 rounded-full w-full">
          Rent a Car
        </button></Link>
      </div>
      <div className="my-10 text-[#F3971F] text-[32px] font-bold ml-10 mr-10 text-center">
        Book a car with AWS Rent a Car
      </div>
      <div className="mx-10 text-[#FFFFFF]">
        Welcome to AWS Rent a Car, a global leader in car rental and you can
        hire a car or a commercial van from any one of our 3835 rental locations
        worldwide.
      </div>
    </div>
  );
}
