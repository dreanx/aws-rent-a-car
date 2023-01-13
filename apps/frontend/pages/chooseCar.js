import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Car from "../components/Car";
import { useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cars, setCars] = useState([]);

  const URI = "http://localhost:5055";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(URI, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setCars(data));
  }, []);

  console.log(cars);
  return (
    <div className="bg-[#242F3E] h-full">
      <Header />

      <h1 className="flex align-left ml-[36px] mt-[47px] text-[#F3971F] text-[32px] font-[800]">
        Choose Your Car
      </h1>
      <div>
        <Car cars={cars} />
      </div>
    </div>
  );
}
