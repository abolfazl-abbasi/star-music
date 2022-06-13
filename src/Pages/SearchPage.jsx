import React from "react";
import "./../App.css";
import _ from "lodash";
import Tilt from "react-parallax-tilt";

const SearchPage = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 sm:!grid-cols-4 md:!grid-cols-5 gap-3 lg:!gap-4 my-2">
        {_.range(0, 6).map((x) => (
          <>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#cf2929] cursor-pointer">
                <span className="inner-element">Pop</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2ab02a] cursor-pointer">
                <span className="inner-element">Rock</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#2898c9] cursor-pointer">
                <span className="inner-element">TV</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#6816d3] cursor-pointer">
                <span className="inner-element">Discover</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#000000] cursor-pointer">
                <span className="inner-element">HipHop</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#4b0b8f] cursor-pointer">
                <span className="inner-element">Jazz</span>
              </button>
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              transitionSpeed={5000}
            >
              <button className="w-full col-span-1 h-20 sm:!h-24 md:!h-[140px] rounded flex items-center justify-center text-lg font-semibold text-white shadow-[0_0_12px_#0f0f0f] bg-[#afc10e] cursor-pointer">
                <span className="inner-element">Mod</span>
              </button>
            </Tilt>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
