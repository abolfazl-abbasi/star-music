import React from "react";
import {
  HiEye,
  HiHeart,
  HiOutlineChevronRight,
  HiOutlineHeart,
  HiPlus,
} from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import "./../App.css";
import _ from "lodash";

const LibraryPage = () => {
  return (
    <div className="space-y-2">
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Your Library</h2>
            <div className="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span className="pt-1">
                <HiOutlineChevronRight />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:!grid-cols-10 w-full gap-2 md:!gap-3 px-2 py-1">
          {_.range(0, 3).map((id) => (
            <button
              className="col-span-1 lg:!col-span-3 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-24 md:!h-28 cursor-pointer sectionTitle"
              key={id}
            >
              <img
                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4e9a052f23cffd91e9838755/1/en/default"
                className="w-2/5 h-full rounded-lg lg:!rounded-none"
                alt=""
              />
              <div className="w-3/5 items-center justify-center p-2">
                <div className="text-stone-300 text-sm text-center md:!text-base sectionTitleText">
                  Black Home - DEP
                </div>
              </div>
            </button>
          ))}
          <button
            className="col-span-1 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-24 md:!h-28 cursor-pointer sectionTitle hover:!bg-purple-900"
            //   key={id}
          >
            <div className="w-2/5 lg:!w-full h-full rounded-lg lg:!rounded-none bg-purple-900 flex items-center justify-center">
              <HiPlus className="w-2/3 h-2/3" />
            </div>
            <div className="w-3/5 lg:!hidden items-center justify-center p-2">
              <div className="text-stone-300 text-sm text-center md:!text-base sectionTitleText">
                ADD ALBUM
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Your Favorites</h2>
            <div className="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span className="pt-1">
                <HiOutlineChevronRight />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:!grid-cols-5 xl:!grid-cols-6 w-full gap-4 md:gap-5 px-2 py-1">
          {_.range(0, 6).map((id) => (
            <button
              className="h-40 sm:!h-44 bg-[#050505] rounded-lg px-2 py-2 sm:!py-0 md:!h-56 xl:!h-64 hover:bg-[#0a0a0ad4] transition-all duration-300 cursor-pointer singerCart text-left lg:!text-center shadow-[0_0_12px_#0f0f0f]"
              key={id}
            >
              <div className="w-full h-2/3 rounded-full overflow-hidden relative">
                <img
                  className="w-full h-full"
                  src={require("./../assets/images/Rectangle 64 (1).jpg")}
                  alt=""
                />
                <div className="absolute w-full h-full flex items-center justify-center top-0 cartLike">
                  <HiHeart className="w-10 h-10 text-red-600 cartLikeHeart" />
                </div>
              </div>
              <div className="text-[12px] md:!text-sm lg:!text-base text-stone-100 pt-1 w-full md:mt-2 flex items-center flex-col ">
                <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full flex items-center justify-between my-1">
                  <span>Mr.Folani</span>
                  <HiOutlineHeart className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="text-stone-400 text-[12px] w-full">
                  <div className="mt-1 flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1 text-[10px] md:!text-xs lg:!text-sm justify-end">
                      <HiEye />
                      <span>200K</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[10px] md:!text-xs lg:!text-sm justify-end">
                      <span>200K</span>
                      <HiHeart />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Recently Played</h2>
            <div className="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span className="pt-1">
                <HiOutlineChevronRight />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-8 w-full gap-4 md:gap-5 px-2 py-1">
          {_.range(0, 8).map((id) => (
            <button
              className="h-40 sm:!h-44 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-52 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center"
              key={id}
            >
              <div className="w-full h-3/5 rounded-lg overflow-hidden shadow-[0_0_12px_#000000] relative">
                <img
                  className="w-full h-full"
                  src={require("./../assets/images/Rectangle 64 (1).jpg")}
                  alt=""
                />
                <div className="absolute w-full h-full flex items-center justify-center top-0 cartPlay">
                  <GoPlay className="w-10 h-10 text-green-600 cartSongPlay" />
                </div>
              </div>
              <div className="text-[10px] text-stone-100 pt-1 w-full md:mt-2">
                <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full">
                  DO TA DEL ASHEGH
                </div>
                <div className="text-stone-400 text-[10px]">
                  <span>BEHNAM BANI</span>
                  <div className="my-1">
                    <div className="flex items-center space-x-1 text-[10px] justify-end mx-1">
                      <HiEye />
                      <span>200000</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
