const MusicCard = ({ id }) => {
  return (
    <>
      <button
        class="h-40 sm:!h-48 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-56 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center hover:scale-105"
        key={id}
      >
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
    </>
  );
};

export default MusicCard;
