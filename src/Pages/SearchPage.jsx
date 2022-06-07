import React from "react";
import { HiOutlineMicrophone } from "react-icons/hi";
import "./../App.css";
import _ from "lodash";
import Tilt from "react-parallax-tilt";

const SearchPage = () => {
  return (
    <>
      <div className="lg:!grid hidden grid-cols-12 items-center my-2">
        <div className="lg:col-start-4 col-end-11 pb-0">
          <div className="grid grid-cols-12 lg:block items-center justify-between mb-5 lg:!mb-0 ">
            <div className="w-full col-span-10">
              <div className="w-full flex items-center relative pl-6 pr-2 lg:!p-0">
                <input
                  type="search"
                  className="relative pb-1 w-full pl-4 xl:pl-6 h-11 rounded-xl hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-4 focus:ring-offset-4 dark:focus:ring-offset-stone-900 bg-stone-800 placeholder:text-xs md:placeholder placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                  placeholder="artists , songs , . . ."
                />
                <button className="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 absolute right-2 lg:!-right-2">
                  <HiOutlineMicrophone className="h-6 w-6 text-stone-200 dark:text-stone-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 sm:!grid-cols-4 md:!grid-cols-5 gap-3 lg:!gap-4 mt-8">
        {_.range(0, 6).map((x) => (
          <>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#cf2929] cursor-pointer">
                Pop
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2ab02a] cursor-pointer">
                Rock
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2898c9] cursor-pointer">
                TV
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#6816d3] cursor-pointer">
                Discover
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#000000] cursor-pointer">
                HipHop
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#4b0b8f] cursor-pointer">
                Jazz
              </div>
            </Tilt>
            <Tilt>
              <div className="col-span-1 h-20 sm:!h-24 md:!h-28 rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#afc10e] cursor-pointer">
                Mod
              </div>
            </Tilt>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
