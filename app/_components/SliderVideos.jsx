"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { videosurls } from "../constants/websiteconstant";
import Img from "./Image";

export default function SliderVideos() {
  const [currentIndex, setCurrentIndex] = useState(0); // لتتبع الشريحة الحالية
  const swiperRef = React.useRef(null); // استخدام المرجع للوصول إلى المنزلق

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(currentIndex); // الانتقال إلى الشريحة المحددة عند تغيير currentIndex
    }
  }, [currentIndex]);

  return (
    <div className="relative py-3">
      <Swiper
        ref={swiperRef} // تعيين المرجع إلى Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.2"}
        speed={500}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // تحديث currentIndex عند تغيير الشريحة
        pagination={false} // تعطيل pagination المدمج
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-[500px] max-md:h-fit w-[70%] m-auto"
      >
        {videosurls.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="video-container shadow-2xl border-gray-300 rounded-sm w-[90%] h-[480px] max-md:h-[300px]">
              <video
                className="shadow-lg h-[480px] max-md:h-[300px]"
                style={{ height: "" }}
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      <div className="flex items-center justify-between w-[60%] max-md:w-[90%] m-auto mt-4">
        <div className="flex items-center gap-1">
          {/* إخفاء زر السابق إذا كنا في أول شريحة */}
          {currentIndex > 0 && (
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()} // العودة إلى الفيديو السابق
              className="bg-white border z-[9999] cursor-pointer text-white w-[50px] h-[50px] border-purple rounded-full flex items-center justify-center transition-all"
            >
              <Img styles={"w-[30px]"} imgsrc={"/personalslider/left.svg"} />
            </button>
          )}
          {currentIndex < videosurls.length - 1 && (
            <button
              onClick={() => swiperRef.current.swiper.slideNext()} // الانتقال إلى الفيديو التالي
              className="bg-white border z-[9999] cursor-pointer text-white w-[50px] h-[50px] border-purple rounded-full flex items-center justify-center transition-all"
            >
              <Img styles={"w-[30px]"} imgsrc={"/personalslider/right.svg"} />
            </button>
          )}
        </div>

        {/* Pagination المخصص */}
        <div className="flex gap-2 z-[9999]">
          {videosurls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)} // تعيين الشريحة الحالية عند الضغط
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-sky-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
