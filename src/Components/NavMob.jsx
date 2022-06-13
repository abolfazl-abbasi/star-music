import { HiHome, HiOutlineBookOpen, HiOutlineClock } from "react-icons/hi";

const NavMob = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full h-16 bg-black flex justify-between items-center lg:!hidden !z-[99999]">
        <div className="flex items-center justify-evenly w-full">
          <HiOutlineBookOpen className="w-10 h-10 text-stone-500 cursor-pointer" />
          <HiHome className="w-10 h-10 text-stone-300 cursor-pointer" />
          <HiOutlineClock className="w-10 h-10 text-stone-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default NavMob;
