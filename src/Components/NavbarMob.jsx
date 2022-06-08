import React from "react";
import {
  HiChevronDown,
  HiClock,
  HiCog,
  HiHeart,
  HiHome,
  HiLibrary,
  HiPlus,
  HiSearch,
  HiStar,
  // HiSearch,
} from "react-icons/hi";
import "./../App.css";
import { Link, useLocation } from "react-router-dom";
import AccountsBar from "../Components/AccountsBar";

const NavbarMob = () => {
  const loc = useLocation();
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
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-black/70 fixed top-0 hidden grid-cols-12"
        id="menuBackground"
      >
        <div
          className="col-span-7 sm:!col-span-4 md:!col-span-3 h-full bg-stone-900 p-2 relative right-full transition-all"
          id="menu"
        >
          <div className="mt-3 mb-1 ml-2 relative">
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
            <AccountsBar index={2} top={"top-10"} />
            <div
              className="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
              onClick={() => handleShowAccounts("close", 2)}
            ></div>
          </div>
          <div>
            <Link
              to={"/"}
              className={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/" ? "!text-white" : ""
              }`}
            >
              <HiHome className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Home</div>
            </Link>
            <Link
              to={"/search"}
              className={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/search" ? "!text-white" : ""
              }`}
            >
              <HiSearch className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Search</div>
            </Link>
            <Link
              to={"/library"}
              className={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/library" ? "!text-white" : ""
              }`}
            >
              <HiLibrary className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Library</div>
            </Link>
            <Link
              to={"/lastPlayed"}
              className={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/lastPlayed" ? "!text-white" : ""
              }`}
            >
              <HiClock className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Last Played</div>
            </Link>
            <Link
              to={"/setting"}
              className={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/setting" ? "!text-white" : ""
              }`}
            >
              <HiCog className="w-5 h-5 ml-2 mr-2" />
              <div className="text">Setting</div>
            </Link>
          </div>
          <hr className="text-stone-300 m-4" />
          <div>
            <div className="">
              <div className="px-2">
                <div className="text-xl text-stone-300">Playlist</div>
              </div>
            </div>
            <div>
              <Link
                to={"/yourMarks"}
                className={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer mt-1 text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/yourMarks" ? "!text-white" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-purple-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiStar className="w-5 h-5" />
                </div>
                <div>your marks</div>
              </Link>
              <Link
                to={"/yourLiking"}
                className={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/yourLiking" ? "!text-white" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-red-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiHeart className="w-5 h-5" />
                </div>
                <div>your liking</div>
              </Link>
              <Link
                to={"/addPlaylist"}
                className={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/addPlaylist" ? "!text-white" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <HiPlus className="w-5 h-5" />
                </div>
                <div>add playlist</div>
              </Link>
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

export default NavbarMob;
