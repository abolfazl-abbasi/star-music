import "./../App.css";

const SearchPage = () => {
  return (
    <>
      <div class="w-full grid grid-cols-3 sm:!grid-cols-4 md:!grid-cols-5 gap-3 lg:!gap-4 my-2">
        {/* {_.range(0, 6).map((x) => ( */}
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#cf2929] cursor-pointer">
          <span class="inner-element">Pop</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2ab02a] cursor-pointer">
          <span class="inner-element">Rock</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2898c9] cursor-pointer">
          <span class="inner-element">TV</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#6816d3] cursor-pointer">
          <span class="inner-element">Discover</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#000000] cursor-pointer">
          <span class="inner-element">HipHop</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#4b0b8f] cursor-pointer">
          <span class="inner-element">Jazz</span>
        </button>
        <button class="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#afc10e] cursor-pointer">
          <span class="inner-element">Mod</span>
        </button>
        {/* ))} */}
      </div>
    </>
  );
};

export default SearchPage;
