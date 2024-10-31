import Link from "next/link";
import React from "react";
import Img from "./Image";

export default function LastSection() {
  return (
    <>
      <div className="w-[85%] max-md:w-full h-[500px] max-md:h-fit px-12 max-md:px-2 ml-auto mt-4">
        <div className="w-full flex max-md:flex-col-reverse justify-end items-start max-md:items-center max-md:gap-12 gap-4">
          <div
            style={{ direction: "rtl" }}
            className="links text-sky-400 text-xl font-extrabold flex items-start flex-col gap-2"
          >
            <div className="flex items-center gap-2 my-2">
              <Img
                imgsrc={"/arb-media-center.png"}
                styles={"w-[180px] md:hidden"}
              />
              <Link href={"#"}>تقارير ربع سنوية</Link>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Img
                imgsrc={"/arb-media-center.png"}
                styles={"w-[180px] md:hidden"}
              />
              <Link href={"#"}>علاقات المستثمرين</Link>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Img
                imgsrc={"/arb-media-center.png"}
                styles={"w-[180px] md:hidden"}
              />
              <Link href={"#"}>تقارير سنوية</Link>
            </div>
          </div>
          <div className="bg-white h-[360px] max-md:h-fit max-md:gap-14 flex custom-flex-reverse items-center justify-between py-3 px-2 rounded-lg shadow-md w-[85%] max-md:w-full">
            <Img imgsrc={"/Screenshot_3.png"} styles={"w-[300px]"} />
            <div style={{ direction: "rtl" }} className="content">
              <h1 className="text-2xl text-purple my-5 font-extrabold">
                سعر السهم
              </h1>
              <p className=" text-lg text-gray-400">
                سعر السهم المعروض إرشادي فقط ويتأخر 15 دقيقة على الأقل. يمكن
                الاطلاع على أسعار الأسهم الحية مباشرة على{" "}
                <Link href={"#"} className="text-sky-400 ">
                  . موقع تداول
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
