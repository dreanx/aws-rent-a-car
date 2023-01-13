import close from "../assets/close.svg";
import Image from "next/image";

export default function Menu({ menu, setMenu }) {
  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div>
      {!menu ? (
        ""
      ) : (
        <div className="bg-[#242F3E] h-screen overflow-hidden sticky z-20 ">
          <div className="flex flex-row pt-10 justify-end pr-5">
            <button onClick={handleOnClick}>
              <Image className="" src={close} />
            </button>
          </div>
          <div className="pt-[20%] flex flex-col text-white text-[48px] leading-[56px] font-[800]  gap-5 pl-[42px]">
            <a className="hover:text-[#F3971F]" href="">
              About
            </a>
            <a className="hover:text-[#F3971F]" href="">
              Vehicles
            </a>
            <a className="hover:text-[#F3971F]" href="">
              Locations
            </a>
            <a className="hover:text-[#F3971F]" href="">
              FAQ
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
