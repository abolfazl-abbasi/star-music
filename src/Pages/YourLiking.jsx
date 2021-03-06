import "./../App.css";

const YourLiking = () => {
  return (
    <>
      <table class="w-full text-left text-stone-300 mt-4">
        <thead class="pb-4">
          <th class="md:w-[40%] text-sm md:text-base whitespace-nowrap">
            <div class="flex ml-2">
              <div class="w-6 md:w-8">#</div>
              <div>Last Liking</div>
            </div>
          </th>
          <th class="w-[20%] text-sm md:text-base whitespace-nowrap">Album</th>
          <th class="w-[20%] text-sm md:text-base whitespace-nowrap">Date</th>
          <th class="w-[10%] text-sm md:text-base whitespace-nowrap hidden sm:table-cell">
            Time
          </th>
          <th class="w-[20%] text-sm md:text-base whitespace-nowrap hidden md:table-cell">
            Likes
          </th>
        </thead>
        <tbody>
          {/* Music Card */}
          {/* {_.range(1, 51).map((i) => ( */}
          <tr class="transition-all duration-300 hover:shadow-[0_0_20px_black] hover:scale-[1.01]">
            <td class="flex items-center my-2 ml-2">
              <div class="w-6 md:w-8">{1}</div>
              <div class="w-10 h-10">
                <img
                  src={require("./../assets/images/Rectangle 64 (1).jpg")}
                  class="w-full h-full rounded-lg"
                  alt=""
                />
              </div>
              <div class="ml-2">
                <div class="!text-[12px] sm:!text-sm text-stone-200">
                  Tanham Nazar
                </div>
                <div class="!text-[10px] sm:!text-xs text-stone-400">
                  Moein Habiby
                </div>
              </div>
            </td>
            <td class="text-xs sm:!text-sm">Ghasedak</td>
            <td class="text-xs sm:!text-sm">2 Days ago</td>
            <td class="text-xs sm:!text-sm hidden sm:table-cell">3 : 36</td>
            <td class="items-center hidden md:table-cell">
              <div class="w-full h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 h-6 inline-block mr-2 text-red-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                200K
              </div>
            </td>
          </tr>
          {/* ))} */}
          {/* Music Card */}
        </tbody>
      </table>
    </>
  );
};

export default YourLiking;
