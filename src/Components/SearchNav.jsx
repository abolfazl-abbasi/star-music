import React from "react";
import { HiOutlineMicrophone } from "react-icons/hi";
import "./../App.css";
import AccountsBar from "../Components/AccountsBar";

const SearchNav = () => {
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
      <div className="grid-cols-12 items-center my-2 lg:!hidden">
        <div className="lg:col-span-6 pb-0">
          <div className="grid grid-cols-12 lg:block items-center justify-between mb-5 lg:!mb-0">
            <div className="w-10 h-10 rounded-full overflow-hidden lg:!hidden">
              <img
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                alt=""
                className="w-full"
                onClick={() => handleShowAccounts("open", 1)}
              />
              <AccountsBar index={1} top={"top-16"} />
              <div
                className="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                onClick={() => handleShowAccounts("close", 1)}
              ></div>
            </div>
            <div className="w-full col-span-10">
              <div className="w-full flex items-center relative pl-4 pr-3 lg:!p-0">
                <input
                  type="search"
                  className="relative pb-1 w-full pl-4 xl:pl-6 h-11 rounded-xl hover:bg-stone-800/60 focus:ring-stone-800 focus:ring-0 lg:focus:ring-4 focus:ring-offset-0 lg:focus:ring-offset-4 dark:focus:ring-offset-stone-900 bg-stone-800 placeholder:text-xs md:placeholder placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                  placeholder="artists , songs , . . ."
                />
                <button className="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 absolute right-3 lg:!-right-2">
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
      </div>
    </>
  );
};

export default SearchNav;
