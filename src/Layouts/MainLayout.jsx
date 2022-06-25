import {
  handleMenu,
  handleRange,
  handleShowAccounts,
} from "../Containers/handlers";

const MainLayout = ({ children }) => {
  const loc = window.location;
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("mainNav").classList.add("lg:bg-black");
    } else {
      document.getElementById("mainNav").classList.remove("lg:bg-black");
    }
  });
  return (
    <>
      <div class="grid grid-cols-6">
        <div class="w-full bg-black py-8 px-2 transition-all hidden lg:!block lg:!col-span-1 h-auto min-h-screen">
          <div class="h-fit sticky top-8">
            <div class="mb-3 ml-3 relative">
              <div
                class="w-28 h-8 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 hover:bg-stone-500 accountsBtn"
                onClick={() => handleShowAccounts("open", 0)}
              >
                <div class="h-full rounded-full w-16 bg-green-400 text-center">
                  A
                </div>
                <div class="text-ellipsis overflow-hidden w-4/5 text-xs text-stone-300">
                  ABOL
                </div>
                <div class="w-1/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 mt-[2px] text-stone-200"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div
                class={`absolute w-28 h-fit top-10 bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden`}
              >
                <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <div class="h-full rounded-full w-10 bg-green-400 text-center">
                    A
                  </div>
                  <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    ABOL
                  </button>
                </div>
                <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <div class="h-full rounded-full w-10 bg-green-400 text-center">
                    A
                  </div>
                  <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    ALI
                  </button>
                </div>
                <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                  <div class="h-full rounded-full w-10 bg-green-400 text-center">
                    A
                  </div>
                  <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    AMIR
                  </button>
                </div>
                <hr class="mx-1 bg-black" />
                <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-8 h-8 ml-1 text-stone-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                    Add
                  </button>
                </div>
              </div>
              <div
                class="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                onClick={() => handleShowAccounts("close", 0)}
              ></div>
            </div>
            <div>
              <a
                href={"/"}
                class={`flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/" ? "!text-white" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5 ml-2 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <div class="text">Home</div>
              </a>
              <a
                href={"/search"}
                class={`flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/search" ? "!text-white" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5 ml-2 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="text">Search</div>
              </a>
              <a
                href={"/library"}
                class={`flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/library" ? "!text-white" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5 ml-2 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="text">Library</div>
              </a>
              <a
                href={"/lastPlayed"}
                class={`flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/lastPlayed" ? "!text-white" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5 ml-2 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="text">Last Played</div>
              </a>
              <a
                href={"/setting"}
                class={`flex items-center px-1 py-2 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/setting" ? "!text-white" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  class="w-5 h-5 ml-2 mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div class="text">Setting</div>
              </a>
            </div>
            <hr class="text-stone-300 m-4 " />
            <div>
              <div class="">
                <div class="px-4">
                  <div class="text-xl text-stone-300">Playlist</div>
                </div>
              </div>
              <div>
                <a
                  href={"/yourMarks"}
                  class={`flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer mt-1 text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                    loc.pathname === "/yourMarks" ? "!text-white" : ""
                  }`}
                >
                  <div class="w-8 h-8 rounded-xl bg-purple-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      class="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div>your marks</div>
                </a>
                <a
                  href={"/yourLiking"}
                  class={`flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                    loc.pathname === "/yourLiking" ? "!text-white" : ""
                  }`}
                >
                  <div class="w-8 h-8 rounded-xl bg-red-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      class="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>your liking</div>
                </a>
                <a
                  href={"/addPlaylist"}
                  class={`flex items-center py-2 px-1 rounded-2xl my-1 mx-2 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                    loc.pathname === "/addPlaylist" ? "!text-white" : ""
                  }`}
                >
                  <div class="w-8 h-8 rounded-xl bg-cyan-800 text-white ml-2 mr-3 flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      class="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>add playlist</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6 lg:col-span-5 mb-[140px] lg:mb-20">
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
                  <div
                    class={`absolute w-28 h-fit top-16 bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden`}
                  >
                    <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <div class="h-full rounded-full w-10 bg-green-400 text-center">
                        A
                      </div>
                      <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        ABOL
                      </button>
                    </div>
                    <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <div class="h-full rounded-full w-10 bg-green-400 text-center">
                        A
                      </div>
                      <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        ALI
                      </button>
                    </div>
                    <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                      <div class="h-full rounded-full w-10 bg-green-400 text-center">
                        A
                      </div>
                      <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        AMIR
                      </button>
                    </div>
                    <hr class="mx-1 bg-black" />
                    <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-8 h-8 ml-1 text-stone-300"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                        Add
                      </button>
                    </div>
                  </div>
                  <div
                    class="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
                    onClick={() => handleShowAccounts("close", 1)}
                  ></div>
                  {/* <AccountsBar index={1} top={"top-16"} /> */}
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
          <div class="lg:!px-3 px-2">{children}</div>
        </div>
      </div>
      <div class="fixed bottom-0 w-full h-16 bg-black flex justify-between items-center lg:!hidden !z-[99999]">
        <div class="flex items-center justify-evenly w-full">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="w-10 h-10 text-stone-500 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="w-10 h-10 text-stone-300 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="w-10 h-10 text-stone-500 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="w-screen h-screen bg-black/70 fixed top-0 hidden grid-cols-12"
        id="menuBackground"
      >
        <div
          class="col-span-7 sm:!col-span-4 md:!col-span-3 h-full bg-stone-900 p-2 relative right-full transition-all"
          id="menu"
        >
          <div class="mb-3 ml-3 relative">
            <div
              class="w-28 h-8 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 hover:bg-stone-500 accountsBtn"
              onClick={() => handleShowAccounts("open", 2)}
            >
              <div class="h-full rounded-full w-16 bg-green-400 text-center">
                A
              </div>
              <div class="text-ellipsis overflow-hidden w-4/5 text-xs text-stone-300">
                ABOL
              </div>
              <div class="w-1/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 mt-[2px] text-stone-200"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              class={`absolute w-28 h-fit top-10 bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden`}
            >
              <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <div class="h-full rounded-full w-10 bg-green-400 text-center">
                  A
                </div>
                <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  ABOL
                </button>
              </div>
              <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <div class="h-full rounded-full w-10 bg-green-400 text-center">
                  A
                </div>
                <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  ALI
                </button>
              </div>
              <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
                <div class="h-full rounded-full w-10 bg-green-400 text-center">
                  A
                </div>
                <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  AMIR
                </button>
              </div>
              <hr class="mx-1 bg-black" />
              <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-8 h-8 ml-1 text-stone-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
                  Add
                </button>
              </div>
            </div>
            <div
              class="absolute w-screen h-screen top-[-16px] -left-8 z-40 accountsBg hidden"
              onClick={() => handleShowAccounts("close", 2)}
            ></div>
          </div>
          <div>
            <a
              href={"/"}
              class={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/" ? "!text-white" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5 ml-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <div class="text">Home</div>
            </a>
            <a
              href={"/search"}
              class={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/search" ? "!text-white" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5 ml-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text">Search</div>
            </a>
            <a
              href={"/library"}
              class={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/library" ? "!text-white" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5 ml-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text">Library</div>
            </a>
            <a
              href={"/lastPlayed"}
              class={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/lastPlayed" ? "!text-white" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5 ml-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text">Last Played</div>
            </a>
            <a
              href={"/setting"}
              class={`flex items-center px-1 py-2 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                loc.pathname === "/setting" ? "!text-white" : ""
              }`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="w-5 h-5 ml-2 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="text">Setting</div>
            </a>
          </div>
          <hr class="text-stone-300 m-4" />
          <div>
            <div class="">
              <div class="px-2">
                <div class="text-xl text-stone-300">Playlist</div>
              </div>
            </div>
            <div>
              <a
                href={"/yourMarks"}
                class={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer mt-1 text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/yourMarks" ? "!text-white" : ""
                }`}
              >
                <div class="w-8 h-8 rounded-xl bg-purple-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    class="w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>your marks</div>
              </a>
              <a
                href={"/yourLiking"}
                class={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/yourLiking" ? "!text-white" : ""
                }`}
              >
                <div class="w-8 h-8 rounded-xl bg-red-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    class="w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>your liking</div>
              </a>
              <a
                href={"/addPlaylist"}
                class={`flex items-center py-2 px-1 rounded-2xl my-1 cursor-pointer text-stone-500 hover:bg-stone-700 hover:text-stone-100 ${
                  loc.pathname === "/addPlaylist" ? "!text-white" : ""
                }`}
              >
                <div class="w-8 h-8 rounded-xl bg-cyan-800 text-white ml-2 mr-3 flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    class="w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>add playlist</div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-span-5 sm:!col-span-8 md:!col-span-9 h-full"
          onClick={() => handleMenu("close")}
        ></div>
      </div>
      <div class="fixed bottom-16 lg:bottom-0 w-full h-20 bg-[#1F003E] grid-cols-12 hidden lg:!grid !z-[99999]">
        <div class="flex items-center p-2 col-span-3">
          <div class="w-16 h-16 rounded-xl overflow-hidden">
            <img
              src={require("./../assets/images/Rectangle 64 (1).jpg")}
              class="w-full h-full"
              alt=""
            />
          </div>
          <div class="ml-2 text-stone-300">
            <div class="flex items-center pb-2">
              Black Home - DEP
              <span class="pl-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 lg:!ml-1 hover:text-yellow-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </span>
            </div>
            <div>MR . TEST</div>
          </div>
        </div>
        <div class="flex items-center space-x-5 pr-3 pb-1 flex-col col-span-7 justify-center gap-2">
          <div class="flex items-center space-x-5 pb-0">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="w-5 h-5 hover:text-blue-500 text-stone-400 cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"></path>
            </svg>
            <div class="flex space-x-4 items-center px-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="w-7 h-7 text-stone-300 cursor-pointer hover:-translate-x-1 hover:text-white transition-all"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 14 16"
                class="w-10 h-10 text-stone-300 cursor-pointer hover:scale-110 hover:text-stone-100 transition-all"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z"
                ></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="w-7 h-7 text-stone-300 cursor-pointer hover:translate-x-1 hover:text-white transition-all"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z"></path>
              </svg>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              class="w-6 h-6 hover:text-blue-500 text-stone-400 cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"></path>
            </svg>
          </div>
          <div class="flex items-center space-x-5 pr-3 pb-1 w-5/6">
            <input
              type="range"
              class="rangeInput"
              id={"songTimeInput"}
              onChange={(e) => handleRange(e)}
            />
          </div>
        </div>
        <div class="flex items-center space-x-5 pr-3 pb-1 col-span-2 flex-col justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="w-4 h-4 text-stone-300 mr-6 my-3 self-end"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"></path>
          </svg>
          <div class="flex items-center self-end">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="w-4 h-4 text-stone-300 mr-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z"></path>
              </g>
            </svg>
            <input
              type="range"
              class="rangeInput !w-4/6"
              onChange={(e) => handleRange(e)}
            />
          </div>
        </div>
      </div>
      <div class="fixed bottom-16 lg:bottom-0 w-full h-17 bg-[#171717] flex flex-col justify-between items-center lg:!hidden !z-[99999]">
        <div class="w-full h-16 bg-[#171717] flex justify-between items-center lg:!hidden">
          <div class="flex items-center">
            <div class="w-16 h-16">
              <img
                src={require("./../assets/images/Rectangle 64 (1).jpg")}
                class="w-full h-full"
                alt=""
              />
            </div>
            <div class="ml-2 text-stone-300">
              <div class="flex items-center pb-2">
                Black Home - DEP
                <span class="pl-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div>1:12 / 3:28</div>
            </div>
          </div>
          <div class="flex items-center space-x-5 pr-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="w-6 h-6 text-stone-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="w-8 h-8 text-stone-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </div>
        </div>
        <input
          type="range"
          class="rangeInput !w-full"
          onChange={(e) => handleRange(e)}
        />
      </div>
    </>
  );
};

export default MainLayout;
