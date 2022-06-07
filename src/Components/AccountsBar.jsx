import { HiPlus } from "react-icons/hi";

const AccountsBar = ({ index, top }) => {
  return (
    <>
      <div
        className={`absolute w-28 h-fit ${top} bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden`}
      >
        <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <img
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt=""
            className="h-full rounded-full"
          />
          <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            ABOL
          </button>
        </div>
        <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <img
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt=""
            className="h-full rounded-full"
          />
          <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            ALI
          </button>
        </div>
        <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <img
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt=""
            className="h-full rounded-full"
          />
          <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            AMIR
          </button>
        </div>
        <hr className="mx-1 bg-black" />
        <div className="w-full h-8 overflow-hidden p-1 flex items-center space-x-3 hover:bg-stone-500">
          <HiPlus className="w-8 h-8 ml-1 text-stone-300" />
          <button className="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountsBar;
