import React from "react";
import {
  HiChevronDown,
  HiClock,
  HiCog,
  HiEye,
  HiHeart,
  HiHome,
  HiLibrary,
  HiOutlineBookOpen,
  HiOutlineChevronRight,
  HiOutlineClock,
  HiOutlineMicrophone,
  HiOutlineStar,
  HiPlus,
  HiSearch,
  HiStar,
  // HiSearch,
} from "react-icons/hi";
import { FaExpandAlt, FaPlay, FaRandom, FaRetweet } from "react-icons/fa";
import { RiSoundModuleLine } from "react-icons/ri";
import { GoPlay } from "react-icons/go";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import "./../App.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// import required modules
// import { Pagination } from "swiper";

// import required modules
// import { EffectCards } from "swiper";

const LastPlayed = () => {
  // const range = _.range(0, 50);

  // const songTimeInput = document.getElementById("songTimeInput");

  const handleMenu = (close) => {
    const menuBg = document.getElementById("menuBackground");
    const menu = document.getElementById("menu");

    if (close === "close") {
      menu.style.transition = "1s";
      menu.style.right = "100%";
      if (menu.style.right === "100%") {
        menuBg.style.display = "none";
      }
      return;
    }

    menuBg.style.display = "grid";
    menu.style.transition = "1s";
    menu.style.right = "0%";
  };

  const handleRange = (id) => {
    const input = id.target;
    input.style.background = `linear-gradient(90deg, #ffffff ${input.value}%, #484848 ${input.value}%)`;
  };

  const handleShowAccounts = (e, x) => {
    const accounts = document.getElementsByClassName("accounts")[x];
    const accountsBg = document.getElementsByClassName("accountsBg")[x];

    if (e === "open") {
      accounts.style.display = "block ";
      accountsBg.style.display = "block ";
    }

    if (e === "close") {
      accounts.style.display = "none ";
      accountsBg.style.display = "none ";
    }

    // console.log(accounts.style.display, accountsBg.style.display);
  };

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="w-full bg-black py-8 px-2 transition-all hidden lg:!block lg:!col-span-1 h-screen">
          <div className="h-fit">
            <div className="mb-3 ml-3 relative">
              <div
                className="w-28 h-8 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 hover:bg-stone-500 accountsBtn"
                onClick={() => handleShowAccounts("open", 0)}
              >
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="h-full rounded-full"
                />
                <div className="text-ellipsis overflow-hidden w-4/5 text-xs text-stone-300">
                  ABOL
                </div>
                <div className="w-1/5">
                  <HiChevronDown className="w-5 h-5 mt-[2px] text-stone-200" />
                </div>
              </div>
              <div className="absolute w-28 h-fit top-10 bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden">
                <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt=""
                    className="h-full rounded-full"
                  />
                  <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    ABOL
                  </button>
                </div>
                <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt=""
                    className="h-full rounded-full"
                  />
                  <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    ALI
                  </button>
                </div>
                <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt=""
                    className="h-full rounded-full"
                  />
                  <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    AMIR
                  </button>
                </div>
                <hr className="mx-1 bg-black" />
                <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                  <HiPlus className="w-8 h-8 ml-1 text-stone-300" />
                  <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    Add
                  </button>
                </div>
              </div>
              <div
                className="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                onClick={() => handleShowAccounts("close", 0)}
              ></div>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
              >
                <HiHome className="w-5 h-5 ml-2 mr-2" />
                <div className="text">Home</div>
              </Link>
              <Link
                to={"/search"}
                className="flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
              >
                <HiSearch className="w-5 h-5 ml-2 mr-2" />
                <div className="text">Search</div>
              </Link>
              <Link
                to={"/library"}
                className="flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
              >
                <HiLibrary className="w-5 h-5 ml-2 mr-2" />
                <div className="text">Library</div>
              </Link>
              <Link
                to={"/"}
                className="flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
              >
                <HiClock className="w-5 h-5 ml-2 mr-2" />
                <div className="text">Last Played</div>
              </Link>
              <Link
                to={"/"}
                className="flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
              >
                <HiCog className="w-5 h-5 ml-2 mr-2" />
                <div className="text">Setting</div>
              </Link>
            </div>
            <hr className="text-stone-300 m-4 " />
            <div>
              <div className="">
                <div className="px-4">
                  <div className="text-xl text-stone-400">Playlist</div>
                </div>
              </div>
              <div>
                <div className="flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer mt-1 text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                  <div className="w-8 h-8 rounded-xl bg-purple-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <HiStar className="w-5 h-5" />
                  </div>
                  <div>your marks</div>
                </div>
                <div className="flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                  <div className="w-8 h-8 rounded-xl bg-red-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <HiHeart className="w-5 h-5" />
                  </div>
                  <div>your liking</div>
                </div>
                <div className="flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                  <div className="w-8 h-8 rounded-xl bg-cyan-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <HiPlus className="w-5 h-5" />
                  </div>
                  <div>add playlist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-5 lg:!p-3 lg:!px-6 p-2 mb-32">
          <div className="lg:grid grid-cols-12 items-center my-2">
            <div className="lg:col-span-6 pb-0">
              <div className="grid grid-cols-12 lg:block items-center justify-between mb-5 lg:!mb-0">
                <div className="w-fit px-2 lg:hidden col-span-1">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt=""
                      className="w-full"
                      onClick={() => handleShowAccounts("open", 1)}
                    />
                  </div>
                  <div className="absolute w-28 h-fit top-[67px] bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden">
                    <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <img
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt=""
                        className="h-full rounded-full"
                      />
                      <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        ABOL
                      </button>
                    </div>
                    <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <img
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt=""
                        className="h-full rounded-full"
                      />
                      <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        ALI
                      </button>
                    </div>
                    <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <img
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt=""
                        className="h-full rounded-full"
                      />
                      <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        AMIR
                      </button>
                    </div>
                    <hr className="mx-1 bg-black" />
                    <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                      <HiPlus className="w-8 h-8 ml-1 text-stone-300" />
                      <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        Add
                      </button>
                    </div>
                  </div>
                  <div
                    className="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                    onClick={() => handleShowAccounts("close", 1)}
                  ></div>
                </div>
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
                <div className="lg:!hidden col-span-1 flex items-end justify-end">
                  <div id="hamburgerMenuBtn" onClick={handleMenu}>
                    <div className="w-10 h-10 overflow-hidden pt-1 flex flex-col gap-[7.5px] px-1">
                      {/* <HiMenu className="w-full h-full dark:text-stone-700" /> */}
                      <div className="w-full h-[6px] rounded bg-stone-700 "></div>
                      <div className="w-full h-[6px] rounded bg-stone-700 "></div>
                      <div className="w-full h-[6px] rounded bg-stone-700 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-baseline justify-evenly px-6 lg:!pr-1 lg:!pl-10 lg:col-span-5 lg:col-start-8 lg:justify-between text-sm">
              <button className="w-1/5 lg:w-1/4 mx-2 h-8 sm:!h-10 lg:!h-9 hover:bg-stone-500 !bg-blue-800 text-white rounded-md flex items-center justify-center shadow-[0_0_12px_blue]">
                Playlist
              </button>
              <button className="w-1/5 lg:w-1/4 mx-2 h-8 sm:!h-10 lg:!h-9 hover:bg-stone-500 bg-stone-600 rounded-md flex items-center justify-center">
                Artists
              </button>
              <button className="w-1/5 lg:w-1/4 mx-2 h-8 sm:!h-10 lg:!h-9 hover:bg-stone-500 bg-stone-600 rounded-md flex items-center justify-center">
                Podcasts
              </button>
              <button className="w-1/5 lg:w-1/4 mx-2 h-8 sm:!h-10 lg:!h-9 hover:bg-stone-500 bg-stone-600 rounded-md flex items-center justify-center">
                Albums
              </button>
            </div>
          </div>
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
        </div>
      </div>
      <div className="fixed bottom-16 lg:bottom-0 w-full h-20 bg-[#1F003E] grid-cols-12 hidden lg:!grid">
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
                <HiOutlineStar className="w-5 h-5  lg:!ml-1 hover:text-yellow-300" />
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
              <GoPlay className="w-10 h-10 text-stone-300 cursor-pointer hover:-rotate-[90deg] transition-all" />
              <IoIosSkipForward className="w-7 h-7 text-stone-300 cursor-pointer hover:translate-x-1 hover:text-white transition-all" />
            </div>
            <FaRetweet className="w-5 h-5 hover:text-blue-500 text-stone-400 cursor-pointer" />
            {/* <div className="text-stone-400 flex items-center space-x-1 cursor-pointer">
              <FaRegHeart className="w-5 h-5" />
              <span>10k</span>
            </div> */}
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
      <div className="fixed bottom-16 lg:bottom-0 w-full h-17 bg-[#171717] flex flex-col justify-between items-center lg:!hidden">
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
          <div className="flex items-center space-x-5 pr-3 pb-1">
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

      <div className="fixed bottom-0 w-full h-16 bg-black flex justify-between items-center lg:!hidden">
        <div className="flex items-center justify-evenly w-full">
          <HiOutlineBookOpen className="w-10 h-10 text-stone-500 cursor-pointer" />
          <HiHome className="w-10 h-10 text-stone-300 cursor-pointer" />
          <HiOutlineClock className="w-10 h-10 text-stone-500 cursor-pointer" />
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black/70 fixed top-0 hidden grid-cols-12"
        id="menuBackground"
      >
        <div
          className="col-span-7 sm:!col-span-4 md:!col-span-3 h-full bg-stone-900 p-2 relative right-full transition-all"
          id="menu"
        >
          <div className="mb-3 relative">
            <div
              className="w-28 h-8 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 hover:bg-stone-500 accountsBtn"
              onClick={() => handleShowAccounts("open", 2)}
            >
              <img
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                alt=""
                className="h-full rounded-full"
              />
              <div className="text-ellipsis overflow-hidden w-4/5 text-xs text-stone-300">
                ABOL
              </div>
              <div className="w-1/5">
                <HiChevronDown className="w-5 h-5 mt-[2px] text-stone-200" />
              </div>
            </div>
            <div className="absolute w-28 h-fit top-10 bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden">
              <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="h-full rounded-full"
                />
                <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  ABOL
                </button>
              </div>
              <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="h-full rounded-full"
                />
                <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  ALI
                </button>
              </div>
              <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="h-full rounded-full"
                />
                <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  AMIR
                </button>
              </div>
              <hr className="mx-1 bg-black" />
              <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                <HiPlus className="w-8 h-8 ml-1 text-stone-300" />
                <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  Add
                </button>
              </div>
            </div>
            <div
              className="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
              onClick={() => handleShowAccounts("close", 2)}
            ></div>
          </div>
          <div>
            <Link
              to={"/"}
              className="flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
            >
              <HiHome className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Home</div>
            </Link>
            <Link
              to={"/search"}
              className="flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
            >
              <HiSearch className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Search</div>
            </Link>
            <Link
              to={"/library"}
              className="flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
            >
              <HiLibrary className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Library</div>
            </Link>
            <Link
              to={"/"}
              className="flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
            >
              <HiClock className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Last Played</div>
            </Link>
            <Link
              to={"/"}
              className="flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100"
            >
              <HiCog className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Setting</div>
            </Link>
          </div>
          <hr className="text-stone-300 m-4" />
          <div>
            <div className="">
              <div className="px-2">
                <div className="text-xl text-stone-400">Playlist</div>
              </div>
            </div>
            <div>
              <div className="flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer mt-1 text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                <div className="w-8 h-8 rounded-xl bg-purple-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiStar className="w-5 h-5" />
                </div>
                <div>your marks</div>
              </div>
              <div className="flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                <div className="w-8 h-8 rounded-xl bg-red-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiHeart className="w-5 h-5" />
                </div>
                <div>your liking</div>
              </div>
              <div className="flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-400 hover:bg-stone-700 hover:text-stone-100">
                <div className="w-8 h-8 rounded-xl bg-cyan-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiPlus className="w-5 h-5" />
                </div>
                <div>add playlist</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-5 sm:!col-span-8 md:!col-span-9 h-full"
          onClick={() => handleMenu("close")}
        ></div>
      </div>
    </>
  );
};

export default LastPlayed;
