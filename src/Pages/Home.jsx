import React from "react";
import {
  HiEye,
  HiFilter,
  HiOutlineMicrophone,
  // HiSearch,
  HiUser,
} from "react-icons/hi";
import "./../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

// import required modules
import { EffectCards } from "swiper";

const HomePage = () => {
  const range = _.range(0, 50);

  return (
    <>
      <header className="w-full dark:bg-stone-800">
        <div className="container flex justify-between items-center mx-auto py-4 px-2">
          <a
            href="##"
            className="flex justify-center items-center  dark:text-stone-500 cursor-pointer"
          >
            <HiUser className="w-8 h-8" />
            <div className="flex flex-col items-start text-xs">
              <span className="font-bold">MY ACCOUNT</span>
              <span>test@gmail.com</span>
            </div>
          </a>
          <div></div>
          <a href="##" className="dark:text-stone-400 cursor-pointer">
            LOGO AND NAME
          </a>
        </div>
      </header>
      <div className="container mx-auto p-2 overflow-hidden">
        <section className="w-full mb-12">
          <div className="w-11/12 md:w-5/6 mb-8 mt-5 mx-auto">
            <Swiper
              effect={"cards"}
              autoplay={true}
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              className="w-5/6 !overflow-visible flex items-center justify-center h-52 sm:h-auto"
              loop={true}
              style={{ perspective: "2300px" }}
              pagination={{
                dynamicBullets: true,
              }}
              cardsEffect={{
                rotate: false,
                perspective: true,
                slideShadows: false,
              }}
            >
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault (1).jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden border-2 border-black w-full max-h-[500px] relative sliderSlide">
                <div className="sliderInfo p-2 py-5 sm:p-3 sm:py-8 lg:p-5 lg:py-10 xl:py-16 xl:p-8">
                  <h2 className="text-sm w-1/3 lg:w-1/4 sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                    IN ESHGHE
                  </h2>
                  <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    BEHNAM BANI
                  </h3>
                  <div className="xl:space-y-2">
                    <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                      Publish : 2022 / 3 / 12
                    </div>
                    <div className="text-[8px] flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                      <HiEye />
                      <div>2100000</div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full">
                  <img
                    src={require("./../assets/images/maxresdefault.jpg")}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <div className="w-full flex items-center justify-center">
              <input
                type="search"
                className="w-1/2 pl-4 xl:pl-6 h-8 md:h-12 xl:h-16 rounded-xl hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-4 focus:ring-offset-4 dark:focus:ring-offset-stone-900 focus:ring-offset-[#c5c4c4]  bg-stone-800 placeholder:text-xs md:placeholder:text-base xl:placeholder:text-lg placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
                placeholder="artists , songs , playlist , . . ."
              />
              <button className="rounded-xl flex items-center justify-center h-8 md:h-12 xl:h-16 px-3 xl:px-5 relative right-10 md:right-12 lg:right-14 xl:right-16">
                <HiOutlineMicrophone className="h-5 w-5 md:w-6 md:h-6 text-stone-200 dark:text-stone-400" />
              </button>
            </div>
            <div className="w-full flex items-center justify-center my-2 mt-6">
              <HiFilter className="w-8 h-8 md:h-12 md:w-12 dark:fill-stone-500" />
            </div>
            <div className="items-center justify-center w-full rounded-md grid grid-cols-2 sm:grid-cols-4 gap-2 md:mb-6">
              <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 md:p-4 text-xs md:text-base lg:text-base p-2 col-span-1 border-2 dark:border-stone-700 hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-900">
                <option value="" className="" key="">
                  song style
                </option>
              </select>
              <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 md:p-4 text-xs md:text-base lg:text-base p-2 col-span-1 border-2 dark:border-stone-700 hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-900">
                <option value="" className="" key="">
                  song style
                </option>
              </select>
              <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 md:p-4 text-xs md:text-base lg:text-base p-2 col-span-1 border-2 dark:border-stone-700 hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-900">
                <option value="" className="" key="">
                  song style
                </option>
              </select>
              <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 md:p-4 text-xs md:text-base lg:text-base p-2 col-span-1 border-2 dark:border-stone-700 hover:bg-stone-800/70 focus:ring-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-900">
                <option value="" className="" key="">
                  song style
                </option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4 md:my-6">
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-sm sm:text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                  BEHNAM BANI
                </h3>
                <div className="xl:space-y-2">
                  <div className="text-[10px] sm:text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="text-[8px] inline-flex items-center space-x-1 sm:space-x-2 sm:text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-48 bg-red-300 rounded-xl overflow-hidden relative posterBody">
              <div className="trackPoster absolute p-5 text-center">
                <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                  IN ESHGHE
                </h2>
                <h3 className="text-sm xl:text-lg font-[itim]">BEHNAM BANI</h3>
                <div className="xl:space-y-2">
                  <div className="text-sm xl:text-lg font-[itim]">
                    Publish : 2022 / 3 / 12
                  </div>
                  <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                    <HiEye />
                    <div>2100000</div>
                  </div>
                </div>
              </div>

              <img
                className="w-full h-full "
                src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="my-6 md:my-10">
            <h3 className="text-lg font-[itim] dark:text-stone-400 m-2 mb-0  font-bold">
              NEW SONGS
            </h3>
            {/* className="flex space-x-3" */}
            <Swiper
              modules={[FreeMode, Pagination]}
              freeMode={true}
              onSetTranslate={(e) =>
                -e.translate >=
                document.querySelector(".musicCard").clientWidth *
                  range.length -
                  document.querySelector(".container").clientWidth
                  ? e.setTranslate(
                      -document.querySelector(".musicCard").clientWidth *
                        range.length +
                        document.querySelector(".container").clientWidth
                    )
                  : null
              }
              speed={800}
            >
              {_.range(0, 50).map((i) => (
                <SwiperSlide
                  className="flex justify-start !w-fit musicCard cursor-pointer"
                  key={i}
                >
                  {/* {console.log(i)} */}
                  <div className="w-28 h-44 bg-stone-800 rounded-xl px-2 pt-2 pb-1 mr-4 md:mr-6 md:w-40 md:h-56 hover:-translate-y-2 transition-all duration-300">
                    <div className="w-full h-2/3 ">
                      <img
                        className="w-full h-full rounded-xl"
                        src={
                          "https://i.scdn.co/image/ab67616d0000b2739ad87215ee8e7b29d39f6449"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-xs text-stone-300 pt-1 w-full md:mt-2">
                      <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full">
                        DO TA DEL ASHEGH
                      </div>
                      <div className="text-stone-500">
                        <span>BEHNAM BANI</span>
                        <div className="my-1">
                          <div className="flex items-center space-x-1 justify-end mx-1">
                            <HiEye />
                            <span>200000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="my-6 md:my-10">
            <h3 className="text-lg font-[itim] dark:text-stone-400 m-2 mb-0 font-bold">
              TOP WEEK
            </h3>
            {/* className="flex space-x-3" */}
            <Swiper
              modules={[FreeMode, Pagination]}
              freeMode={true}
              onSetTranslate={(e) =>
                -e.translate >=
                document.querySelector(".musicCard").clientWidth *
                  range.length -
                  document.querySelector(".container").clientWidth
                  ? e.setTranslate(
                      -document.querySelector(".musicCard").clientWidth *
                        range.length +
                        document.querySelector(".container").clientWidth
                    )
                  : null
              }
              speed={800}
            >
              {range.map((i) => (
                <SwiperSlide
                  className="flex justify-start !w-fit musicCard cursor-pointer"
                  key={i}
                >
                  <div className="w-28 h-44 bg-stone-800 rounded-xl px-2 pt-2 pb-1 mr-4 md:mr-6 md:w-40 md:h-56 hover:-translate-y-2 transition-all duration-300">
                    <div className="w-full h-2/3 ">
                      <img
                        className="w-full h-full rounded-xl"
                        src={
                          "https://i.scdn.co/image/ab67616d0000b2739ad87215ee8e7b29d39f6449"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-xs text-stone-300 pt-1 w-full md:mt-2">
                      <div className="whitespace-nowrap text-ellipsis overflow-hidden w-full">
                        DO TA DEL ASHEGH
                      </div>
                      <div className="text-stone-500">
                        <span>BEHNAM BANI</span>
                        <div className="my-1">
                          <div className="flex items-center space-x-1 justify-end mx-1">
                            <HiEye />
                            <span>200000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="col-span-1 h-32 lg:h-48 xl:h-72 bg-red-300 rounded-xl overflow-hidden relative posterBody">
                  <div className="trackPoster absolute p-5 text-center">
                    <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                      IN ESHGHE
                    </h2>
                    <h3 className="text-sm xl:text-lg font-[itim]">
                      BEHNAM BANI
                    </h3>
                    <div className="xl:space-y-2">
                      <div className="text-sm xl:text-lg font-[itim]">
                        Publish : 2022 / 3 / 12
                      </div>
                      <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                        <HiEye />
                        <div>2100000</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-full h-full duration-300 hover:scale-110 cursor-pointer"
                    src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                    alt=""
                  />
                </div>
                <div className="col-span-1 h-32 lg:h-48 xl:h-72 bg-red-300 rounded-xl overflow-hidden relative posterBody">
                  <div className="trackPoster absolute p-5 text-center">
                    <h2 className="text-xl font-bold xl:text-4xl md:mb-1 xl:mb-2 font-[itim]">
                      IN ESHGHE
                    </h2>
                    <h3 className="text-sm xl:text-lg font-[itim]">
                      BEHNAM BANI
                    </h3>
                    <div className="xl:space-y-2">
                      <div className="text-sm xl:text-lg font-[itim]">
                        Publish : 2022 / 3 / 12
                      </div>
                      <div className="inline-flex items-center space-x-1 sm:space-x-2 text-sm md:text-base lg:text-lg my-1 font-[itim]">
                        <HiEye />
                        <div>2100000</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-full h-full duration-300 hover:scale-110 cursor-pointer"
                    src={"https://i.ytimg.com/vi/ymuZtiVX21k/maxresdefault.jpg"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-lg font-[itim] dark:text-stone-400 m-2 mb-0  font-bold">
              TOP SINGERS
            </h3>
            {/* className="flex space-x-3" */}
            <Swiper
              modules={[FreeMode, Pagination]}
              freeMode={true}
              onSetTranslate={(e) =>
                -e.translate >=
                document.querySelector(".singerCard").clientWidth *
                  range.length -
                  document.querySelector(".container").clientWidth
                  ? e.setTranslate(
                      -document.querySelector(".singerCard").clientWidth *
                        range.length +
                        document.querySelector(".container").clientWidth
                    )
                  : null
              }
              speed={1200}
            >
              {range.map((i) => (
                <SwiperSlide
                  className="flex items-center !w-fit singerCard cursor-pointer"
                  key={i}
                >
                  {/* {console.log(i)} */}
                  <div className="flex flex-col justify-center items-center mr-4 md:mr-6 w-20 h-36 md:w-32 md:h-48 relative artistInfo">
                    <img
                      src="https://pngimg.com/uploads/headphones/headphones_PNG101963.png"
                      alt=""
                      className="headphone absolute top-0 opacity-0 transition-all duration-500 h-2/5 sm:h-auto w-full"
                    />
                    <div className="bg-stone-800 rounded-full overflow-hidden w-20 h-20 md:w-32 md:h-32">
                      <img
                        className="w-full h-full rounded-xl"
                        src={
                          "https://img.melobit.com/7-dXjt80pz1naIkXEkCp0VeyZre4FEcsHIOH81-C2i0/rs:fill:1024:1024:1/dpr:1/Y292ZXJzL2FydGlzdC1iZWhuYW0tYmFuaS5qcGc"
                        }
                        alt=""
                      />
                    </div>
                    <div className="text-stone-800 dark:text-stone-500 pt-2 mx-auto font-bold text-center w-full text-ellipsis h-16 overflow-hidden text-sm artistName">
                      BEHNAM BANI
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer categoryMusic">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </section>
        <footer className="flex flex-col items-center mb-8">
          <div className="w-5/6 h-1 bg-black dark:bg-stone-800 rounded-md"></div>
          <div className="p-4 rounded-lg dark:text-stone-400">
            LOGO AND NAME
          </div>
          <div className="flex justify-between w-full lg:justify-around">
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[itim] dark:text-stone-400">
                Help
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[itim] dark:text-stone-400">
                LINKS
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a
                  href="##"
                  className="hover:text-blue-600 transition-colors"
                  style={{ letterSpacing: "3px" }}
                >
                  TELEGRAM
                </a>
                <a
                  href="##"
                  className="hover:text-pink-600 transition-colors"
                  style={{ letterSpacing: "3px" }}
                >
                  INSTAGRAM
                </a>
                <a
                  href="##"
                  className="hover:text-blue-400 transition-colors"
                  style={{ letterSpacing: "3px" }}
                >
                  TWITTER
                </a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[itim] dark:text-stone-400">
                TEST
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[itim] dark:text-stone-400">
                TEST
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
                <a href="##" className="hover:text-blue-600 transition-colors">
                  How to create account?
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
