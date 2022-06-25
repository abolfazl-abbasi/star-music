import { handleShowAccounts } from "../Containers/handlers";
import AccountsBar from "./AccountsBar";

const AccountsBtn = ({ index, top }) => {
  return (
    <>
      <div class="mb-3 ml-3 relative">
        <div
          class="w-28 h-8 rounded-full overflow-hidden bg-stone-600 p-1 flex items-center space-x-3 hover:bg-stone-500 accountsBtn"
          onClick={() => handleShowAccounts("open", index)}
        >
          <div class="h-full rounded-full w-16 bg-green-400 text-center">A</div>
          <div class="text-ellipsis overflow-hidden w-4/5 text-xs text-stone-300">
            ABOL
          </div>
          <div class="w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 mt-[2px] text-stone-200"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <AccountsBar top={top} index={index} />
      </div>
    </>
  );
};

export default AccountsBtn;
