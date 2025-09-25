"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sustainabilityCover } from "@/assets";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const LeatherProductionProcessSection = () => {
  const sliderImages = [
    "/images/leather1.jpg",
    "/images/leather2.jpg",
    "/images/leather3.jpg",
    "/images/leather4.jpg",
  ];

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    {
      title: "Tanning",
      description:
        " All the steps leading to the finished article, including dyeing and the application of surface treatments (finishing) to improve the appearance and properties of the leather.",
      image: sustainabilityCover.src,
    },
    {
      title: "Processing",
      description:
        "The transformation of tanned hides into finished leather.All the steps leading to the finished article, including dyeing and the application of surface treatments (finishing) to improve the appearance and properties of the leather.",
      image: sustainabilityCover.src,
    },
    {
      title: "Finished Products",
      description:
        "The final stage where leather is crafted into various products.All the steps leading to the finished article, including dyeing and the application of surface treatments (finishing) to improve the appearance and properties of the leather.",
      image: sustainabilityCover.src,
    },
  ];

  const totalSlides = slides.length;
  return (
    <>
      <section
        className="w-full flex flex-col"
        style={{ backgroundColor: "#e8e4e1" }}
      >
        <div className="flex flex-col justify-center items-center px-6 md:px-20 py-16">
          <p className="text-[16px] text-gray-600 mb-4 tracking-wide text-center md:text-left">
            The art of tanning
          </p>

          <h2 className="text-3xl md:text-[4.375rem] font-bold text-gray-900 mb-12 md:mb-20 text-center md:text-left">
            The production process
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-6xl w-full items-center md:items-start ">
            <p className="w-full md:flex-1  text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left ">
              An unparalleled tactile experience, unrivalled durability. Capable
              of adapting like few other materials, leather is an unrivalled
              combination of elegance and durability.
            </p>
            <p className="w-full md:flex-1  text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left ">
              Soft, supple, yet also hard-wearing, it is the perfect product to
              create an infinite number of refined and timeless products. At
              Gruppo Mastrotto we transform leather into an emotion, using
              innovative machinery and processing techniques to enhance its
              intrinsic characteristics.
            </p>
          </div>
        </div>
      </section>
      {/* Slider Section */}
      <section style={{ backgroundColor: "#e8e4e1" }}>
        <p className="text-xl text-gray-600  tracking-wide underline w-full  mb-20 text-center">
          Discover the stages of tanning
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center  px-4 md:px-20 gap-10 md:gap-20">
          {/* Left Title (Top on Mobile) */}
          <div className="flex md:hidden flex-col justify-center items-center text-center">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {slides[Math.max(currentSlide - 2, 0)].title}
            </h2>
          </div>

          {/* Left Title (Desktop Side) */}
          <div className="hidden md:flex flex-col justify-center items-end max-w-xs">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {slides[Math.max(currentSlide - 2, 0)].title}
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative w-full max-w-[576px]">
            {/* Left Arrow */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 rounded-full hover:scale-110 transition-transform duration-300 bg-white shadow"
            >
              <MdOutlineKeyboardArrowLeft className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Swiper */}
            <Swiper
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) =>
                setCurrentSlide(swiper.activeIndex + 1)
              }
              slidesPerView={1}
              spaceBetween={20}
              keyboard={{ enabled: true }}
              modules={[Keyboard, Pagination, Navigation]}
              className="rounded-lg shadow-lg"
              centeredSlides={true}
              loop={true}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="rounded-lg overflow-hidden shadow-xl"
                    style={{ aspectRatio: "576 / 705" }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Page Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 items-baseline bg-white bg-opacity-70 px-3 py-1 rounded-full shadow text-xs sm:text-sm">
              <span className="text-sm sm:text-lg font-bold text-gray-800">
                {currentSlide}
              </span>
              <span className="text-xs sm:text-sm text-gray-600">
                / {totalSlides}
              </span>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="absolute right-2 sm:-right-10 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 rounded-full hover:scale-110 transition-transform duration-300 bg-white shadow"
            >
              <MdKeyboardArrowRight className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </div>

          {/* Right Description (Below on Mobile) */}
          <div className="flex md:hidden flex-col justify-center items-center text-center mt-4">
            <p className="text-base sm:text-lg text-gray-800">
              {slides[Math.max(currentSlide - 2, 0)].description}
            </p>
          </div>

          {/* Right Description (Desktop Side) */}
          <div className="hidden md:flex flex-col justify-center items-start max-w-md">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              {slides[Math.max(currentSlide - 2, 0)].description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeatherProductionProcessSection;
