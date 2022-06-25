import "./../App.css";

const PostPage = () => {
  return (
    <>
      <div class="mx-2">
        <div>
          <div class="flex w-full">
            <div class="flex items-center w-1/2">
              <div class="w-40 h-40 rounded-lg overflow-hidden flex justify-center items-center">
                <img
                  src={require("./../assets/images/Rectangle 64 (1).jpg")}
                  alt=""
                />
              </div>
              <div class="ml-4 h-36 flex justify-between flex-col">
                <h2 class="text-2xl font-semibold text-stone-200">
                  Black Home - DEP
                </h2>
                <div>
                  <h3 class="text-stone-500">Album Taraneh</h3>
                  <h4 class="text-stone-500 flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4 mr-1 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-red-500"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    426K
                  </h4>
                </div>
                <div class="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-10 h-10 text-stone-300 cursor-pointer hover:scale-110 hover:text-stone-100"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-6 h-6 text-stone-300 cursor-pointer hover:scale-110 hover:text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-6 h-6 text-stone-300 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-yellow-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <div class="flex items-center text-stone-300 text-sm gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      class="w-6 h-6 cursor-pointer hover:scale-110 lg:!ml-1 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    2.4M
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/2 h-56 bg-stone-400 -top-[58px] grid grid-cols-2">
              <div class="col-span-1">
                <div></div>
                <div>
                  {/* <h3></h3>
                  <h3></h3> */}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default PostPage;
