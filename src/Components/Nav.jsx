import "./../App.css";
import AccountsBar from "../Components/AccountsBar";
import { handleMenu, handleShowAccounts } from "../Containers/handlers";

const MainNav = () => {
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
        class={`lg:grid grid-cols-12 items-center lg:py-[15px] lg:!px-5 lg:!sticky m-2 lg:!m-0 top-0 z-[99999]`}
        id={"mainNav"}
      >
        <div class="lg:col-span-6 pb-0 lg:!col-start-4">
          <div class="grid grid-cols-12 lg:block items-center justify-between mb-5 lg:!mb-0">
            <div class="w-10 h-10 rounded-full overflow-hidden lg:!hidden">
              <div
                class="h-full rounded-full w-full bg-green-400 text-center flex items-center justify-center text-xl"
                onClick={() => handleShowAccounts("open", 1)}
              >
                A
              </div>
              <div
                class="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                onClick={() => handleShowAccounts("close", 1)}
              ></div>
              <AccountsBar index={1} top={"top-16"} />
            </div>
            <div class="w-full col-span-10">
              <div class="w-full flex items-center relative pl-4 pr-3 lg:!p-0">
                <input
                  type="search"
                  class="relative lg:!h-12 focus:border-2 focus:!bg-neutral-700 pb-1 w-full pl-4 xl:pl-6 h-11 rounded-xl hover:bg-stone-800/60 bg-stone-800 placeholder:text-xs md:placeholder placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
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
                  {/* <HiMenu class="w-full h-full dark:text-stone-700" /> */}
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

export default MainNav;
