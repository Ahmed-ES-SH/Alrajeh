import Link from "next/link";
import React from "react";
import SliderVideos from "./SliderVideos";
export default function SeventhSection() {
  return (
    <>
      <div className="bg-white relative mt-8 w-full rounded-lg shadow-sm h-[750px] max-md:h-fit m-auto   ">
        <div className="box w-full">
          <div className="content w-[52%] max-md:w-[90%] m-auto flex items-center justify-between pt-12">
            <button className="mt-4 bg-sky-500 text-[16px] px-2 py-3 text-white cursor-pointer  rounded-full hover:text-black hover:bg-sky-300 transition-all">
              عرض الكل
            </button>
            <h1 className="my-2 whitespace-nowrap text-purple font-extrabold  text-center text-3xl">
              فيديوهات تعليمية
            </h1>
          </div>
          <div className="videos mt-12">
            <SliderVideos />
          </div>
        </div>
      </div>
    </>
  );
}
