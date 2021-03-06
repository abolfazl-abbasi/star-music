import "./../App.css";

const LibraryPage = () => {
  return (
    <div class="space-y-2">
      <div>
        <div>
          <div class="flex items-center justify-between p-2">
            <h2 class="text-stone-400 text-xl">Your Library</h2>
            <div class="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span class="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:!grid-cols-10 w-full gap-2 md:!gap-3 px-2 py-1">
          {/* Poster */}
          {/* {_.range(0, 3).map((id) => ( */}
          <button
            class={`col-span-1 lg:!col-span-3 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-28 md:!h-32 cursor-pointer sectionTitle`}
          >
            <img
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4e9a052f23cffd91e9838755/1/en/default"
              class="w-2/5 h-full rounded-lg lg:!rounded-none"
              alt=""
            />
            <div class="w-3/5 items-center justify-center p-2">
              <div class="text-stone-300 text-sm text-center md:!text-base lg:!text-lg sectionTitleText">
                Black Home - DEP
              </div>
            </div>
          </button>
          {/* ))} */}
          {/* Poster */}
          <button class="col-span-1 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-28 md:!h-32 cursor-pointer sectionTitle hover:!bg-purple-900">
            <div class="w-2/5 lg:!w-full h-full rounded-lg lg:!rounded-none bg-purple-900 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-2/3 h-2/3"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="w-3/5 lg:!hidden items-center justify-center p-2">
              <div class="text-stone-300 text-sm text-center md:!text-base sectionTitleText">
                ADD ALBUM
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div>
          <div class="flex items-center justify-between p-2">
            <h2 class="text-stone-400 text-xl">Your Favorites</h2>
            <div class="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span class="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:!grid-cols-5 xl:!grid-cols-7 w-full gap-4 md:gap-5 px-2 py-1">
          {/* Artist Card */}
          {/* {_.range(0, 7).map((id) => ( */}
          <button class="h-40 sm:!h-44 bg-[#050505] rounded-lg px-2 py-2 md:!p-4 md:!h-56 xl:!h-68 hover:bg-[#0a0a0ad4] transition-all duration-300 cursor-pointer singerCart text-left lg:!text-center shadow-[0_0_12px_#0f0f0f]">
            <div class="w-full h-2/3 rounded-full overflow-hidden relative">
              <img
                class="w-full h-full"
                src={require("./../assets/images/Rectangle 64 (1).jpg")}
                alt=""
              />
              <div class="absolute w-full h-full flex items-center justify-center top-0 cartLike">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-10 h-10 text-red-600 cartLikeHeart"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="text-[12px] md:!text-sm lg:!text-base text-stone-100 pt-1 w-full md:mt-2 flex items-center flex-col ">
              <div class="whitespace-nowrap text-ellipsis overflow-hidden w-full flex items-center justify-between my-1">
                <span>Mr.Folani</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4 lg:w-5 lg:h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div class="text-stone-400 text-[12px] w-full">
                <div class="mt-1 flex items-center justify-between w-full">
                  <div class="flex items-center space-x-1 text-[10px] md:!text-xs justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>200K</span>
                  </div>
                  <div class="flex items-center space-x-1 text-[10px] md:!text-xs justify-end">
                    <span>200K</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="w-3 h-3"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          {/* ))} */}
          {/* Artist Card */}
        </div>
      </div>
      <div>
        <div>
          <div class="flex items-center justify-between p-2">
            <h2 class="text-stone-400 text-xl">Recently Played</h2>
            <div class="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
              <button>show more</button>{" "}
              <span class="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-9 w-full gap-4 md:!gap-3 px-2 py-1">
          {/* Music Card */}
          {/* {_.range(0, 9).map((id) => ( */}
          <button class="h-40 sm:!h-48 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-56 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center hover:scale-105">
            <div class="w-full h-3/5 rounded-lg overflow-hidden shadow-[0_0_12px_#000000] relative">
              <img
                class="w-full h-full"
                src={require("./../assets/images/Rectangle 64 (1).jpg")}
                alt=""
              />
              <div class="absolute w-full h-full flex items-center justify-center top-0"></div>
            </div>
            <div class="text-[10px] text-stone-100 pt-1 w-full md:mt-2 text-left">
              <div class="whitespace-nowrap text-ellipsis overflow-hidden w-full cartMusicName">
                DO TA DEL ASHEGH
              </div>
              <div class="text-stone-400 text-[10px] cartSingerName">
                <span>BEHNAM BANI</span>
                <div class="my-1">
                  <div class="flex items-center space-x-1 text-[10px] justify-end mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>200000</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
          {/* ))} */}
          {/* Music Card */}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
