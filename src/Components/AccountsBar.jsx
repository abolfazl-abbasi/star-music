import { handleShowAccounts } from "../Containers/handlers";

const AccountsBar = ({ index, top }) => {
  return (
    <>
      <div
        class={`absolute w-28 h-fit ${top} bg-stone-600 rounded-xl z-50 overflow-hidden accounts hidden`}
      >
        <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <div class="h-full rounded-full w-10 bg-green-400 text-center">A</div>
          <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            ABOL
          </button>
        </div>
        <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <div class="h-full rounded-full w-10 bg-green-400 text-center">A</div>
          <button class="text-ellipsis overflow-hidden w-full text-xs text-stone-300 text-left">
            ALI
          </button>
        </div>
        <div class="w-full h-8 overflow-hidden p-1 flex items-center space-x-3  hover:bg-stone-500">
          <div class="h-full rounded-full w-10 bg-green-400 text-center">A</div>
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
        onClick={() => handleShowAccounts("close", index === 1 ? 2 : index)}
      ></div>
    </>
  );
};

export default AccountsBar;
