import "./../App.css";
import AccountsBtn from "./AccountsBtn";

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
    const accounts = document.getElementsByclass("accounts")[x];
    const accountsBg = document.getElementsByclass("accountsBg")[x];

    if (e === "open") {
      accounts.style.display = "block ";
      accountsBg.style.display = "block ";
    }

    if (e === "close") {
      accounts.style.display = "none ";
      accountsBg.style.display = "none ";
    }
  };

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("mainNav").classList.add("lg:bg-black");
    } else {
      document.getElementById("mainNav").classList.remove("lg:bg-black");
    }
  });

  return (
    <>
      <div
        class="grid-cols-12 items-center pt-3 px-2 lg:py-3 lg:sticky top-0 z-[99999]"
        id="mainNav"
      >
        <div class="lg:col-span-6 pb-0">
          <div class="grid grid-cols-12 lg:block items-center justify-between mb-5 lg:!mb-0">
            <div class="w-10 h-10 rounded-full overflow-hidden lg:!hidden">
              <img
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                alt=""
                class="w-full"
                onClick={() => handleShowAccounts("open", 1)}
              />
              <AccountsBtn index={1} top={"top-16"} />
              <div
                class="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                onClick={() => handleShowAccounts("close", 1)}
              ></div>
            </div>
            <div class="w-full col-span-10 lg:col-span-12">
              <div class="w-full lg:!w-1/2 flex items-center relative pl-4 pr-3 lg:!p-0 mx-auto">
                <input
                  type="search"
                  class="relative lg:h-[54px] pb-1 focus:border-2 w-full pl-4 xl:pl-6 h-11 rounded-xl hover:bg-stone-800/60 focus:!bg-neutral-700 bg-stone-800 placeholder:text-xs md:placeholder placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                  placeholder="artists , songs , . . ."
                />
                <button class="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 absolute right-3 lg:!-right-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 text-stone-200 dark:text-stone-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="lg:!hidden col-span-1 flex items-end justify-end">
              <div id="hamburgerMenuBtn" onClick={handleMenu}>
                <div class="w-10 h-10 overflow-hidden pt-1 flex flex-col gap-[7.5px] px-1">
                  <div class="w-full h-[6px] rounded bg-stone-700"></div>
                  <div class="w-full h-[6px] rounded bg-stone-700"></div>
                  <div class="w-full h-[6px] rounded bg-stone-700"></div>
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
