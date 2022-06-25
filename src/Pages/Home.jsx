import "./../App.css";

const HomePage = () => {
  return (
    <>
      <div class="space-y-2">
        <div>
          <div>
            <div class="flex items-center justify-between p-2">
              <h2 class="text-stone-400 text-xl">Recently Played</h2>
              <div class="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
                <button>show more</button>{" "}
                <span class="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
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
          <div class="grid grid-cols-2 lg:!grid-cols-3 w-full gap-2 md:!gap-3 px-2 py-1">
            {/* Poster */}
            {/* {_.range(0, 3).map((id) => ( */}
            <button
              class={`col-span-1 lg:!col-span-1 bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-28 md:!h-32 cursor-pointer sectionTitle`}
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
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
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
          <div class="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-9 w-full gap-4 md:gap-3 px-2 py-1">
            {/* Music Card */}
            {/* {_.range(0, 9).map((id) => ( */}
            <button class="h-40 sm:!h-48 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-56 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center hover:scale-105">
              <div class="w-full h-3/5 rounded-lg overflow-hidden shadow-[0_0_12px_#000000] relative">
                <img
                  class="w-full h-full"
                  src="./../assets/images/Rectangle 64 (1).jpg"
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
        <div>
          <div>
            <div class="flex items-center justify-between p-2">
              <h2 class="text-stone-400 text-xl">Recently Played</h2>
              <div class="flex items-center text-stone-500 hover:text-blue-700 hover:translate-x-1 transition-all cursor-pointer">
                <button>show more</button>{" "}
                <span class="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
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
          <div class="grid grid-cols-3 sm:grid-cols-5 md:!grid-cols-6 xl:!grid-cols-9 w-full gap-4 md:gap-3 px-2 py-1">
            {/* Music Card */}
            {/* {_.range(0, 9).map((id) => ( */}
            <button class="h-40 sm:!h-48 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-56 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center hover:scale-105">
              <div class="w-full h-3/5 rounded-lg overflow-hidden shadow-[0_0_12px_#000000] relative">
                <img
                  class="w-full h-full"
                  src="./../assets/images/Rectangle 64 (1).jpg"
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
    </>
  );
};

export default HomePage;
