import React from "react";
import {
  HiDownload,
  HiEye,
  HiOutlineChevronRight,
  HiOutlineHeart,
  HiOutlineStar,
} from "react-icons/hi";
import "./../App.css";
import _ from "lodash";
import MusicCard from "../Components/MusicCard";
import Poster from "../Components/Poster";
import { GoPlay } from "react-icons/go";

const PostPage = () => {
  return (
    <>
      <div className="mx-2">
        <div>
          <div className="flex w-full">
            <div className="flex items-center w-1/2">
              <div className="w-40 h-40 rounded-lg overflow-hidden flex justify-center items-center">
                <img
                  src={require("./../assets/images/Rectangle 64 (1).jpg")}
                  alt=""
                />
              </div>
              <div className="ml-4 h-36 flex justify-between flex-col">
                <h2 className="text-2xl font-semibold text-stone-200">
                  Black Home - DEP
                </h2>
                <div>
                  <h3 className="text-stone-500">Album Taraneh</h3>
                  <h4 className="text-stone-500 flex items-center text-sm">
                    <HiEye className="w-4 h-4 mr-1 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-red-500" />
                    426K
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <GoPlay className="w-10 h-10 text-stone-300 cursor-pointer hover:scale-110 hover:text-stone-100" />
                  <HiDownload className="w-6 h-6 text-stone-300 cursor-pointer hover:scale-110 hover:text-blue-500" />
                  <HiOutlineStar className="w-6 h-6 text-stone-300 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-yellow-500" />
                  <div className="flex items-center text-stone-300 text-sm gap-1">
                    <HiOutlineHeart className="w-6 h-6 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-red-500" />
                    2.4M
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-56 bg-stone-400 -top-[58px] grid grid-cols-2">
              <div className="col-span-1">
                <div></div>
                <div>
                  <h3></h3>
                  <h3></h3>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default PostPage;
