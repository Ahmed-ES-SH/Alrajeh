import React from "react";
import Img from "./Image";
import Link from "next/link";
import { blogposts } from "../constants/websiteconstant";

export default function EigthSection() {
  return (
    <>
      <div className="w-full bg-transparent mt-6">
        <div className="text-purple text-center text-5xl max-md:text-xl font-extrabold w-fit m-auto">
          <h1>أخبارنا</h1>
          <h1 className="pt-4">والإعلانات</h1>
        </div>
        <div className="blog grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-4 w-[80%] max-md:w-[98%] m-auto ">
          {blogposts.map((post, index) => (
            <div
              key={index}
              className="w-full card rounded-xl shadow-lg bg-white h-[500px]  py-2 px-2 flex flex-col items-center "
            >
              <div className="w-fit m-auto h-[40%]">
                <Img imgsrc={"/arb-media-center.png"} styles={"w-[320px] "} />
              </div>
              <div style={{ direction: "rtl" }} className="content ">
                <p className="w-fit font-semibold text-[14px] ml-auto">
                  {post.category}
                </p>
                <h1 className="mt-4 font-extrabold text-xl w-fit ml-auto">
                  {post.title}
                </h1>
              </div>
              <div className="flex items-center justify-between w-[80%] text-[14px] m-auto">
                <Link
                  className="tetx-[12px] text-sky-400 font-extrabold"
                  href="#"
                >
                  إقرا أكثر{" "}
                </Link>
                <div className="date text-gray-400">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-fit m-auto pt-16">
        <Link className="text-sky-400 font-bold" href={"#"}>
          عرض الكل
        </Link>
      </div>
    </>
  );
}
