import { GoPlay } from "react-icons/go";
import { HiEye } from "react-icons/hi";

const MusicCard = ({ id }) => {
  return (
    <>
      <button
        className="h-40 sm:!h-48 bg-[#181818] rounded-lg px-2 pt-2 pb-1 md:h-56 hover:bg-[#272727] transition-all duration-300 cursor-pointer songCart text-left lg:!text-center hover:-translate-y-1"
        key={id}
      >
        <div className="w-full h-3/5 rounded-lg overflow-hidden shadow-[0_0_12px_#000000] relative">
          <img
            className="w-full h-full"
            src={require("./../assets/images/Rectangle 64 (1).jpg")}
            alt=""
          />
          <div className="absolute w-full h-full flex items-center justify-center top-0 cartPlay">
            <GoPlay className="w-10 h-10 text-green-600 cartSongPlay" />
          </div>
        </div>
        <div className="text-[10px] text-stone-100 pt-1 w-full md:mt-2 text-left">
          <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full cartMusicName">
            DO TA DEL ASHEGH
          </div>
          <div className="text-stone-400 text-[10px] cartSingerName">
            <span>BEHNAM BANI</span>
            <div className="my-1">
              <div className="flex items-center space-x-1 text-[10px] justify-end mx-1">
                <HiEye />
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
