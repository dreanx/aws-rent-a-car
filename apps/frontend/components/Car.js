import Image from "next/image";
import Link from "next/link";

const Car = ({ cars }) => {
  return (
    <ul>
      {cars.map((cars) => {
        return (
          <li className="mx-7" key={cars.id}>
            <div className="mt-10">
              <p className="text-sm font-medium text-white">{cars.CarName}</p>
              <p className="text-xs font-normal text-white">
                or similar Economy
              </p>
            </div>
            <div className="flex">
              <div className="mr-10">
                <Image
                  className="ml-5"
                  src={cars.CarImage}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-2 items-center">
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.TransmissionMode} Transmission
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.NbPassengers} Passengers
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.PowerSteering}
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.NbDoors} Doors
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full mt-4">
              <Link className="mx-auto w-1/2" href="/reviewOrder">
                <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 mt-5 mb-[42px] rounded-full w-full">
                  Choose
                </button>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Car;
