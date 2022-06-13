import React from "react";
import {
  HiOutlineStar,
  // HiSearch,
} from "react-icons/hi";
import { FaPlay, FaRandom } from "react-icons/fa";
import "./../App.css";

const MusicPlayerMob = () => {
  const handleRange = (id) => {
    const input = id.target;
    input.style.background = `linear-gradient(90deg, #ffffff ${input.value}%, #484848 ${input.value}%)`;
  };

  return (
    <>
      <div className="fixed bottom-16 lg:bottom-0 w-full h-17 bg-[#171717] flex flex-col justify-between items-center lg:!hidden !z-[99999]">
        <div className="w-full h-16 bg-[#171717] flex justify-between items-center lg:!hidden">
          <div className="flex items-center">
            <div className="w-16 h-16">
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
                  <HiOutlineStar />
                </span>
              </div>
              <div>1:12 / 3:28</div>
            </div>
          </div>
          <div className="flex items-center space-x-5 pr-3">
            <FaRandom className="w-6 h-6 text-stone-400" />
            <FaPlay className="w-8 h-8 text-stone-300" />
          </div>
        </div>
        <input
          type="range"
          className="rangeInput !w-full"
          onChange={(e) => handleRange(e)}
        />
      </div>
    </>
  );
};

export default MusicPlayerMob;
