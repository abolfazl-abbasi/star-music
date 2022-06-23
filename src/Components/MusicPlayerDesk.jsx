import React from "react";
import {
  HiOutlineStar,
  // HiSearch,
} from "react-icons/hi";
import { FaExpandAlt, FaRandom, FaRetweet } from "react-icons/fa";
import { RiSoundModuleLine } from "react-icons/ri";
import { GoPlay } from "react-icons/go";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import "./../App.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const MusicPlayerDesk = () => {
  const handleRange = (id) => {
    const input = id.target;
    input.style.background = `linear-gradient(90deg, #ffffff ${input.value}%, #484848 ${input.value}%)`;
  };

  return (
    <>
      <div className="fixed bottom-16 lg:bottom-0 w-full h-20 bg-[#1F003E] grid-cols-12 hidden lg:!grid !z-[99999]">
        <div className="flex items-center p-2 col-span-3">
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <img
              src={require("./../assets/images/Rectangle 64 (1).jpg")}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="ml-2 text-stone-300">
            <div className="flex items-center pb-2">
              Black Home - DEP
              <span className="pl-2">
                <HiOutlineStar className="w-5 h-5 lg:!ml-1 hover:text-yellow-300" />
              </span>
            </div>
            <div>MR . TEST</div>
          </div>
        </div>
        <div className="flex items-center space-x-5 pr-3 pb-1 flex-col col-span-7 justify-center gap-2">
          <div className="flex items-center space-x-5 pb-0">
            <FaRandom className="w-5 h-5 hover:text-blue-500 text-stone-400 cursor-pointer" />
            <div className="flex space-x-4 items-center px-4">
              <IoIosSkipBackward className="w-7 h-7 text-stone-300 cursor-pointer hover:-translate-x-1 hover:text-white transition-all" />
              <GoPlay className="w-10 h-10 text-stone-300 cursor-pointer hover:scale-110 hover:text-stone-100 transition-all" />
              <IoIosSkipForward className="w-7 h-7 text-stone-300 cursor-pointer hover:translate-x-1 hover:text-white transition-all" />
            </div>
            <FaRetweet className="w-5 h-5 hover:text-blue-500 text-stone-400 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-5 pr-3 pb-1 w-5/6">
            <input
              type="range"
              className="rangeInput"
              id={"songTimeInput"}
              onChange={(e) => handleRange(e)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-5 pr-3 pb-1 col-span-2 flex-col justify-center">
          <FaExpandAlt className="w-4 h-4 text-stone-300 mr-6 my-3 self-end" />
          <div className="flex items-center self-end">
            <RiSoundModuleLine className="w-4 h-4 text-stone-300 mr-4" />
            <input
              type="range"
              className="rangeInput !w-4/6"
              onChange={(e) => handleRange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayerDesk;
