import React from "react";
import { HiEye, HiSearch, HiUser } from "react-icons/hi";
import "./../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";

// import required modules
import { EffectCards } from "swiper";

const HomePage = () => {
  const range = _.range(0, 50);

  return (
    <>
      <div className="container mx-auto p-2 overflow-hidden">
        <header className="flex justify-between items-center">
          <div className="flex justify-center items-center  dark:text-stone-500">
            <HiUser className="w-7 h-7" />
            <div className="flex flex-col items-start text-xs">
              <span className="font-bold">MY ACCOUNT</span>
              <span>test@gmail.com</span>
            </div>
          </div>
          <div></div>
          <div className="dark:text-stone-400">LOGO AND NAME</div>
        </header>
        <section className="w-full mb-12">
          <div className="w-full my-8">
            <Swiper
              effect={"cards"}
              autoplay={true}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-5/6 !overflow-visible flex items-center justify-center h-52 sm:h-auto"
              loop={true}
              cardsEffect={{
                rotate: false,
                perspective: true,
                slideShadows: false,
              }}
            >
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (1) 3.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="!rounded-3xl overflow-hidden">
                <img
                  src={require("./../assets/images/download (11) 2.jpg")}
                  alt=""
                  className="w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              type="search"
              className="w-1/2 pl-4 h-8 md:h-12 rounded-l-xl bg-stone-800 my-4 placeholder:text-xs md:placeholder:text-base placeholder:text-stone-300 dark:placeholder:text-stone-500 text-white"
              placeholder="artists , songs , playlist , . . ."
            />
            <div className="bg-stone-800 rounded-r-xl flex items-center justify-center h-8 md:h-12 px-3">
              <HiSearch className="h-5 w-5 md:w-6 md:h-6 text-stone-200 dark:text-stone-400" />
            </div>
          </div>
          <div className="items-center justify-center w-full rounded-md grid grid-cols-2 sm:grid-cols-4 gap-2 md:my-2 md:mb-6">
            <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 text-xs lg:text-base py-2 px-2 col-span-1">
              <option value="" className="" key="">
                song style
              </option>
            </select>
            <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 text-xs lg:text-base py-2 px-2 col-span-1">
              <option value="" className="" key="">
                song style
              </option>
            </select>
            <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 text-xs lg:text-base py-2 px-2 col-span-1">
              <option value="" className="" key="">
                song style
              </option>
            </select>
            <select className="form-select rounded-lg bg-stone-800 text-stone-200 dark:text-stone-500 text-xs lg:text-base py-2 px-2 col-span-1">
              <option value="" className="" key="">
                song style
              </option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
            <div className="col-span-1 h-32 lg:h-36 bg-red-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full"
                src={require("./../assets/images/download (1) 2.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-lg font-[cursive] dark:text-stone-400 m-2  font-bold">
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
              speed={1200}
            >
              {_.range(0, 50).map((i) => (
                <SwiperSlide
                  className="flex justify-start !w-fit musicCard cursor-pointer"
                  key={i}
                >
                  {/* {console.log(i)} */}
                  <div className="w-28 h-44 bg-stone-800 rounded-xl px-2 pt-2 pb-1 mr-4 md:mr-6 md:w-40 md:h-56">
                    <div className="w-full h-2/3 ">
                      <img
                        className="w-full h-full rounded-xl"
                        src={require("./../assets/images/download (13) 1.jpg")}
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
          <div className="my-5">
            <h3 className="text-lg font-[cursive] dark:text-stone-400 m-2 font-bold">
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
              speed={1200}
            >
              {range.map((i) => (
                <SwiperSlide
                  className="flex justify-start !w-fit musicCard cursor-pointer"
                  key={i}
                >
                  {/* {console.log(i)} */}
                  <div className="w-28 h-44 bg-stone-800 rounded-xl px-2 pt-2 pb-1 mr-4 md:mr-6  md:w-40 md:h-56">
                    <div className="w-full h-2/3 ">
                      <img
                        className="w-full h-full rounded-xl"
                        src={require("./../assets/images/download (13) 1.jpg")}
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
                <div className="col-span-1 h-32 lg:h-40 xl:h-64 bg-red-300 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={require("./../assets/images/download (1) 2.jpg")}
                    alt=""
                  />
                </div>
                <div className="col-span-1 h-32 lg:h-40 xl:h-64 bg-red-300 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={require("./../assets/images/download (1) 2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h3 className="text-lg font-[cursive] dark:text-stone-400 m-2  font-bold">
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
                  <div className="flex flex-col justify-center items-center mr-4 md:mr-6 w-20 h-36 md:w-32 md:h-48">
                    <div className="bg-stone-800 rounded-full overflow-hidden w-20 h-20 md:w-32 md:h-32">
                      <img
                        className="w-full h-full rounded-xl"
                        src={require("./../assets/images/download (15) 1.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="text-stone-800 dark:text-stone-500 pt-2 mx-auto font-bold text-center w-full text-ellipsis h-16 overflow-hidden text-sm">
                      BEHNAM BANI
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
              <span className="z-10 absolute p-3">NEW COMERS</span>
              <img
                src={require("./../assets/images/blueewa 2.jpg")}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 h-24 lg:h-40 bg-red-300 rounded-2xl overflow-hidden relative font-[jejuHallasan] flex items-center justify-center text-2xl lg:text-4xl text-center cursor-pointer">
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
              <h3 className="font-bold mb-1 font-[cursive] dark:text-stone-400">
                Help
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[cursive] dark:text-stone-400">
                LINKS
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##" style={{ letterSpacing: "3px" }}>
                  TELEGRAM
                </a>
                <a href="##" style={{ letterSpacing: "3px" }}>
                  INSTAGRAM
                </a>
                <a href="##" style={{ letterSpacing: "3px" }}>
                  TWITTER
                </a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[cursive] dark:text-stone-400">
                TEST
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
              </div>
            </div>
            <div className="mx-2">
              <h3 className="font-bold mb-1 font-[cursive] dark:text-stone-400">
                TEST
              </h3>
              <div className="flex flex-col text-xs md:text-base space-y-1 dark:text-stone-500">
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
                <a href="##">How to create account?</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
