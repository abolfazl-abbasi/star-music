import React from "react";
import {
  HiOutlineChevronRight,
  // HiSearch,
} from "react-icons/hi";
import "./../App.css";
import _ from "lodash";
import MusicCard from "../Components/MusicCard";
import Poster from "../Components/Poster";

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
            <Poster id={id} col={1} />
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
        <div className="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-9 w-full gap-4 md:gap-5 px-2 py-1">
          {_.range(0, 9).map((id) => (
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
        <div className="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-9 w-full gap-4 md:gap-5 px-2 py-1">
          {_.range(0, 9).map((id) => (
            <MusicCard id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPlayed;
