import React from "react";
import {
  HiOutlineChevronRight,
  // HiSearch,
} from "react-icons/hi";
import "./../App.css";
import _ from "lodash";
import MusicCard from "../Components/MusicCard";

const LastPlayed = () => {
  return (
    <div className="space-y-2">
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Last Played Albums</h2>
            <div className="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span className="pt-1">
                <HiOutlineChevronRight />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:!grid-cols-3 w-full gap-2 md:!gap-3 px-2 py-1">
          {_.range(0, 3).map((id) => (
            <button
              className="col-span-1 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-24 md:!h-28 cursor-pointer sectionTitle"
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
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Last Played All</h2>
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
            <MusicCard id={id} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between p-2">
            <h2 className="text-stone-400 text-xl">Last Played All</h2>
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
            <MusicCard id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPlayed;
