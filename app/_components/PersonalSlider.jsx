"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState, useRef } from "react";
import Img from "./Image";
import { slidercontent } from "../constants/websiteconstant";

export default function CustomSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0); // لتتبع الشريحة الحالية
  const swiperRef = useRef(null); // مرجع للـ Swiper

  // دالة لتغيير الشريحة
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  // دالة للانتقال إلى الشريحة التالية
  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slidercontent.length;
    setCurrentIndex(nextIndex);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(nextIndex);
    }
  };

  // دالة للانتقال إلى الشريحة السابقة
  const goToPrevSlide = () => {
    const prevIndex =
      currentIndex === 0 ? slidercontent.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(prevIndex);
    }
  };

  useEffect(() => {
    // تحديث الـ Swiper عندما يتغير currentIndex
    if (swiperRef.current && currentIndex < slidercontent.length) {
      swiperRef.current.swiper.slideTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="relative h-[600px] pt-20 max-md:pt-[3.5rem]">
      <Swiper
        ref={swiperRef} // ربط الـ ref بالـ Swiper
        // modules={[Autoplay]}
        // autoplay={{ delay: 3000 }} // الانزلاق التلقائي
        loop={true} // تكرار السلايدرات
        onSlideChange={handleSlideChange} // تحديث الشريحة الحالية
        className="mySwiper"
        initialSlide={currentIndex} // تعيين الشريحة الأولية
      >
        {slidercontent.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative  h-[460px] max-md:h-[580px] `}
              style={
                item.background
                  ? {
                      backgroundImage: `url(${item.imgsrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}
              }
            >
              <div className="  flex items-center justify-between w-[70%] h-full m-auto">
                {/* إذا كانت الصورة ليست خلفية */}
                {!item.background && (
                  <div className="w-1/2 max-md:w-full">
                    <Img imgsrc={item.imgsrc} styles="w-[500px] " />
                  </div>
                )}
                {/* النصوص في الجانب الأيمن */}
                <div
                  style={{ direction: "rtl" }}
                  className={` max-md:block hidden absolute w-[80%] rounded-md bg-[#f7f8f9a6] backdrop-saturate-[180%] backdrop-blur-[.25em] text-center  left-1/2 -bottom-[20px] -translate-x-1/2 p-8  bg-opacity-80 text-white`}
                >
                  {item.firsttext && (
                    <h2
                      style={{
                        color: `${item.firsttextcolor}`,
                      }}
                      className={` py-2  max-md:text-xl  font-bold`}
                    >
                      {item.firsttext}
                    </h2>
                  )}
                  {item.secendtext && (
                    <p
                      style={{ color: `${item.secendtextcolor}` }}
                      className={`text-2xl  py-6  font-medium max-md:text-[13px]`}
                    >
                      {item.secendtext}
                    </p>
                  )}
                  {item.thiredtext && (
                    <p className="text-[13px]">{item.thiredtext}</p>
                  )}
                  {/* الزر أسفل النصوص */}
                  {item.btnvalue && (
                    <button className="mt-4 bg-sky-500 cursor-pointer py-4 px-8 max-md:px-3 max-md:py-2 max-md:text-[13px] rounded-full hover:bg-sky-600 transition-all">
                      {item.btnvalue}
                    </button>
                  )}
                </div>
                <div
                  style={{ direction: "rtl" }}
                  className={`absolute max-md:hidden w-fit  right-0 p-8  bg-opacity-80 text-white`}
                >
                  {item.firsttext && (
                    <h2
                      style={{
                        color: `${item.firsttextcolor}`,
                        fontSize: `${item.firsttextwith}`,
                      }}
                      className={`text- py-2 max-md:text-xl  font-bold`}
                    >
                      {item.firsttext}
                    </h2>
                  )}
                  {item.secendtext && (
                    <p
                      style={{ color: `${item.secendtextcolor}` }}
                      className={`text-2xl  py-6  font-medium`}
                    >
                      {item.secendtext}
                    </p>
                  )}
                  {item.thiredtext && <p>{item.thiredtext}</p>}
                  {/* الزر أسفل النصوص */}
                  {item.btnvalue && (
                    <button className="mt-4 bg-sky-500 cursor-pointer py-4 px-8 rounded-full hover:bg-sky-600 transition-all">
                      {item.btnvalue}
                    </button>
                  )}
                </div>
                ;
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار Pagination مخصصة */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-[9999]">
        {slidercontent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // تعيين الشريحة الحالية عند الضغط
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-sky-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* أزرار التنقل */}
      <div className="absolute px-4 z-[9999] top-[67%] max-md:top-full left-0 right-0 flex justify-between transform -translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-white opacity-40 border z-[9999] cursor-pointer text-white w-[50px] h-[50px] border-blue rounded-full flex items-center justify-center hover:opacity-100 transition-all"
        >
          <Img styles={"w-[30px]"} imgsrc={"/personalslider/left.svg"} />
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-white opacity-40 border z-[9999] cursor-pointer text-white w-[50px] h-[50px] border-blue rounded-full flex items-center justify-center hover:opacity-100 transition-all"
        >
          <Img styles={"w-[30px]"} imgsrc={"/personalslider/right.svg"} />
        </button>
      </div>
    </div>
  );
}

//
