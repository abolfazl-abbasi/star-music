import React from "react";
import {
  HiEye,
  HiHeart,
  HiOutlineChevronRight,
  HiOutlineHeart,
  HiPlus,
} from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import "./../App.css";
import _ from "lodash";

const YourLiking = () => {
  return (
    <>
      <table className="w-full text-left text-stone-300 mt-4">
        <thead className="pb-4">
          <th className="md:w-[40%] text-sm md:text-base whitespace-nowrap">
            <div className="flex ml-2">
              <div className="w-6 md:w-8">#</div>
              <div>Last Liking</div>
            </div>
          </th>
          <th className="w-[20%] text-sm md:text-base whitespace-nowrap">
            Album
          </th>
          <th className="w-[20%] text-sm md:text-base whitespace-nowrap">
            Data Added
          </th>
          <th className="w-[10%] text-sm md:text-base whitespace-nowrap hidden sm:table-cell">
            Time
          </th>
          <th className="w-[20%] text-sm md:text-base whitespace-nowrap hidden md:table-cell">
            Likes
          </th>
        </thead>
        <tbody>
          {_.range(1, 51).map((i) => (
            <tr key={i} className="transition-colors hover:bg-black/40">
              <td className="flex items-center my-2 ml-2">
                <div className="w-6 md:w-8">{i}</div>
                <div className="w-10 h-10">
                  <img
                    src={require("./../assets/images/Rectangle 64 (1).jpg")}
                    className="w-full h-full rounded-lg"
                    alt=""
                  />
                </div>
                <div className="ml-2">
                  <div className="!text-[12px] sm:!text-sm text-stone-200">
                    Tanham Nazar
                  </div>
                  <div className="!text-[10px] sm:!text-xs text-stone-400">
                    Moein Habiby
                  </div>
                </div>
              </td>
              <td className="text-xs sm:!text-sm">Ghasedak</td>
              <td className="text-xs sm:!text-sm">2 Days ago</td>
              <td className="text-xs sm:!text-sm hidden sm:table-cell">
                3 : 36
              </td>
              <td className="items-center hidden md:table-cell">
                <div className="w-full h-full flex items-center">
                  <HiHeart className="w-6 h-6 inline-block mr-2 text-red-600" />
                  200K
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default YourLiking;
