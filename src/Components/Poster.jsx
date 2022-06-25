const Poster = ({ id, col }) => {
  return (
    <>
      <button
        class={`col-span-1 lg:!col-span-${col} bg-black h-20 rounded-lg lg:!rounded-none p-2 lg:!p-0 flex items-center sm:!h-28 md:!h-32 cursor-pointer sectionTitle`}
        key={id}
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
    </>
  );
};

export default Poster;
