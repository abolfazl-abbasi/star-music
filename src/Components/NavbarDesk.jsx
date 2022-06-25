import AccountsBtn from "./AccountsBtn";

const NavbarDesk = () => {
  const loc = window.location;

  return (
    <>
      <div class="w-full bg-black py-8 px-2 transition-all hidden lg:!block lg:!col-span-1 h-auto">
        <div class="h-fit sticky top-8">
          <AccountsBtn index={0} top={"top-10"} />
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
    </>
  );
};

export default NavbarDesk;
