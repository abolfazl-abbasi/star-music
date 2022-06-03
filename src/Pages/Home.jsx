import React from "react";
import {
  HiChevronDown,
  HiClock,
  HiCog,
  HiEye,
  HiHeart,
  HiHome,
  HiLibrary,
  HiMenu,
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
import {
  FaBackward,
  FaExpandAlt,
  FaForward,
  FaPlay,
  FaRandom,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa";
import { RiSoundModuleLine } from "react-icons/ri";
import "./../App.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

// import required modules
// import { EffectCards } from "swiper";

const HomePage = () => {
  // const range = _.range(0, 50);

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

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="w-full bg-black py-8 px-2 transition-all hidden lg:!block lg:!col-span-1 h-screen">
          <div className=" h-fit">
            <div className="mb-3 ml-3">
              <div className="w-36 h-10 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 sticky">
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="h-full rounded-full"
                />
                <div className="text-ellipsis overflow-hidden w-2/3">ABOL</div>
                <div className="w-1/3">
                  <HiChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                <HiHome className="w-7 h-7 ml-2 mr-4" />
                <div className="text-lg">Home</div>
              </div>
              <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                <HiSearch className="w-7 h-7 ml-2 mr-4" />
                <div className="text-lg">Search</div>
              </div>
              <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                <HiLibrary className="w-7 h-7 ml-2 mr-4" />
                <div className="text-lg">Library</div>
              </div>
              <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                <HiClock className="w-7 h-7 ml-2 mr-4" />
                <div className="text-lg">Last Played</div>
              </div>
              <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                <HiCog className="w-7 h-7 ml-2 mr-4" />
                <div className="text-lg">Setting</div>
              </div>
            </div>
            <hr className="text-stone-300 m-4 " />
            <div>
              <div className="">
                <div className="px-4">
                  <div className="text-2xl text-stone-400">Playlist</div>
                </div>
              </div>
              <div>
                <div className="w-full flex items-center p-2 rounded-2xl my-1 cursor-pointer mt-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                  <div className="w-10 h-10 rounded-xl bg-purple-800 text-white ml-2 mr-4 flex items-center justify-center">
                    <HiStar className="w-7 h-7" />
                  </div>
                  <div className="text-lg">your marks</div>
                </div>
                <div className="w-full flex items-center p-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                  <div className="w-10 h-10 rounded-xl bg-red-800 text-white ml-2 mr-4 flex items-center justify-center">
                    <HiHeart className="w-7 h-7" />
                  </div>
                  <div className="text-lg">your liking</div>
                </div>
                <div className="w-full flex items-center p-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-800 text-white ml-2 mr-4 flex items-center justify-center">
                    <HiPlus className="w-7 h-7" />
                  </div>
                  <div className="text-lg">add playlist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-4 p-3 px-6 mb-32">
          <div className="lg:grid grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex lg:block items-center justify-between">
                <div className="w-fit px-2 lg:hidden">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex items-center justify-center">
                    <input
                      type="search"
                      className="relative pb-1 left-6 lg:left-0 w-full pl-4 xl:pl-6 h-10 rounded-xl hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-4 focus:ring-offset-4 dark:focus:ring-offset-stone-900 bg-stone-800 placeholder:text-xs md:placeholder placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                      placeholder="artists , songs , playlist , . . ."
                    />
                    <button className="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 relative right-7 lg:right-12 xl:right-16">
                      <HiOutlineMicrophone className="h-6 w-6 text-stone-200 dark:text-stone-400" />
                    </button>
                    {/* <input
                      type="search"
                      className="relative pb-1 left-6 lg:left-7 xl:left-8 w-full md:w-1/2 pl-4 xl:pl-6 h-12 md:h-12 rounded-xl hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-4 focus:ring-offset-4 dark:focus:ring-offset-stone-900 bg-stone-800 placeholder:text-xs md:placeholder:text-base xl:placeholder:text-lg placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                      placeholder="artists , songs , playlist , . . ."
                    />
                    <button className="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 relative right-5 lg:right-8 xl:right-9">
                      <HiOutlineMicrophone className="h-6 w-6 md:w-7 md:h-7 text-stone-200 dark:text-stone-400" />
                    </button> */}
                  </div>
                </div>
                <div className="lg:hidden">
                  <div
                    className="w-fit"
                    id="hamburgerMenuBtn"
                    onClick={handleMenu}
                  >
                    <div className="w-16 h-16 overflow-hidden pt-1">
                      <HiMenu className="w-full h-full dark:text-stone-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-evenly px-6 lg:px-4 py-6 lg:col-span-5 lg:col-start-8 lg:justify-between">
              <div className="w-1/5 h-9 bg-blue-800 text-white rounded-md flex items-center justify-center">
                Playlist
              </div>
              <div className="w-1/5 h-9 bg-stone-600 rounded-md flex items-center justify-center">
                Artists
              </div>
              <div className="w-1/5 h-9 bg-stone-600 rounded-md flex items-center justify-center">
                Podcasts
              </div>
              <div className="w-1/5 h-9 bg-stone-600 rounded-md flex items-center justify-center">
                Albums
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <div>
                <div className="flex items-center justify-between p-2">
                  <h2 className="text-stone-400 text-xl">Recently Played</h2>
                  <div className="flex items-center text-stone-500">
                    <span>show more</span>{" "}
                    <span className="pt-1">
                      <HiOutlineChevronRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:!grid-cols-3 w-full gap-2 md:!gap-3 px-2 py-1">
                {_.range(0, 3).map((id) => (
                  <div
                    className="col-span-1 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-24 md:!h-28"
                    key={id}
                  >
                    <img
                      src={"https://en.pimg.jp/038/420/827/1/38420827.jpg"}
                      className="w-1/3 h-full rounded-lg lg:!rounded-none"
                      alt=""
                    />
                    <div className="w-2/3 items-center justify-center p-2">
                      <div className="text-stone-300 text-sm text-center md:!text-base">
                        Black Home - DEP
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-between p-2">
                  <h2 className="text-stone-400 text-xl">Recently Played</h2>
                  <div className="flex items-center text-stone-500">
                    <span>show more</span>{" "}
                    <span className="pt-1">
                      <HiOutlineChevronRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:!grid-cols-5 xl:!grid-cols-6 w-full gap-4 md:gap-5 px-2 py-1">
                {_.range(0, 6).map((id) => (
                  <div
                    className="h-44 bg-stone-800 rounded-xl px-2 pt-2 pb-1 md:h-56 hover:-translate-y-2 transition-all duration-300"
                    key={id}
                  >
                    <div className="w-full h-2/3 ">
                      <img
                        className="w-full h-full rounded-xl"
                        src={require("./../assets/images/Rectangle 64 (1).jpg")}
                        alt=""
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs text-stone-300 pt-1 w-full md:mt-2">
                      <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full">
                        DO TA DEL ASHEGH
                      </div>
                      <div className="text-stone-500 text-[10px] sm:text-xs">
                        <span>BEHNAM BANI</span>
                        <div className="my-1">
                          <div className="flex items-center space-x-1 text-[10px] sm:text-xs justify-end mx-1">
                            <HiEye />
                            <span>200000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 lg:bottom-0 w-full h-16 bg-purple-900 flex justify-between items-center lg:!hidden">
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
      <div className="fixed bottom-16 lg:bottom-0 w-full h-20 bg-purple-900 grid-cols-12 hidden lg:!grid">
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
                <HiOutlineStar className="w-5 h-5 lg:!w-7 lg:!h-7 lg:!ml-1" />
              </span>
            </div>
            <div>MR . TEST</div>
          </div>
        </div>
        <div className="flex items-center space-x-5 pr-3 pb-1 flex-col col-span-7 justify-center gap-2 mt-2">
          <div className="flex items-center space-x-5 pb-2">
            <FaRandom className="w-6 h-6 text-stone-400 cursor-pointer" />
            <div className="flex space-x-4 items-center px-4">
              <FaBackward className="w-6 h-6 text-stone-300 cursor-pointer" />
              <FaPlay className="w-6 h-6 text-stone-300 cursor-pointer" />
              <FaForward className="w-6 h-6 text-stone-300 cursor-pointer" />
            </div>
            <FaRetweet className="w-6 h-6 text-stone-400 cursor-pointer" />
            <div className="text-stone-400 flex items-center space-x-1 cursor-pointer">
              <FaRegHeart className="w-5 h-5" />
              <span>10k</span>
            </div>
          </div>
          <div className="flex items-center space-x-5 pr-3 pb-1 w-5/6">
            <input type="range" className="rangeInput" />
          </div>
        </div>
        <div className="flex items-center space-x-5 pr-3 pb-1 col-span-2 flex-col justify-center">
          <FaExpandAlt className="w-4 h-4 text-stone-300 mr-6  my-3 self-end" />
          <div className="flex items-center self-end">
            <RiSoundModuleLine className="w-4 h-4 text-stone-300 mr-4" />
            <input type="range" className="rangeInput !w-4/6" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-16 bg-black flex justify-between items-center lg:!hidden">
        <div className="flex items-center justify-evenly w-full">
          <HiOutlineBookOpen className="w-10 h-10 text-stone-500 cursor-pointer" />
          <HiHome className="w-10 h-10 text-stone-300 cursor-pointer" />
          <HiOutlineClock className="w-10 h-10 text-stone-500 cursor-pointer" />
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black/70 fixed top-0 hidden grid-cols-3"
        id="menuBackground"
      >
        <div
          className="col-span-2 md:col-span-1 h-full bg-stone-900 p-2 px-4 relative right-full transition-all"
          id="menu"
        >
          <div className="mb-3">
            <div className="w-36 h-10 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3">
              <img
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                alt=""
                className="h-full rounded-full"
              />
              <div className="text-ellipsis overflow-hidden w-2/3">ABOL</div>
              <div className="w-1/3">
                <HiChevronDown className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <HiHome className="w-7 h-7 ml-2 mr-4" />
              <div className="text-lg">Home</div>
            </div>
            <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <HiSearch className="w-7 h-7 ml-2 mr-4" />
              <div className="text-lg">Search</div>
            </div>
            <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <HiLibrary className="w-7 h-7 ml-2 mr-4" />
              <div className="text-lg">Library</div>
            </div>
            <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <HiClock className="w-7 h-7 ml-2 mr-4" />
              <div className="text-lg">Last Played</div>
            </div>
            <div className="w-full flex items-center px-2 py-3 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <HiCog className="w-7 h-7 ml-2 mr-4" />
              <div className="text-lg">Setting</div>
            </div>
          </div>
          <hr className="text-stone-300 m-4 " />
          <div>
            <div className="">
              <div className="px-1">
                <div className="text-2xl text-stone-400">Playlist</div>
              </div>
            </div>
            <div>
              <div className="w-full flex items-center p-2 rounded-2xl my-1 mt-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-purple-800 text-white ml-2 mr-4 flex items-center justify-center">
                  <HiStar className="w-7 h-7" />
                </div>
                <div className="text-lg">your marks</div>
              </div>
              <div className="w-full flex items-center p-2 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-red-800 text-white ml-2 mr-4 flex items-center justify-center">
                  <HiHeart className="w-7 h-7" />
                </div>
                <div className="text-lg">your liking</div>
              </div>
              <div className="w-full flex items-center p-2 rounded-2xl my-1 text-stone-500 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-cyan-800 text-white ml-2 mr-4 flex items-center justify-center">
                  <HiPlus className="w-7 h-7" />
                </div>
                <div className="text-lg">add playlist</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 md:!col-span-2 h-full"
          onClick={() => handleMenu("close")}
        ></div>
      </div>
    </>
  );
};

export default HomePage;
