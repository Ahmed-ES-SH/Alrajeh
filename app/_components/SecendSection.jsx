import React from "react";
import Img from "./Image";
import Link from "next/link";

export default function SecendSection() {
  return (
    <>
      <div className="w-full mt-28">
        <h1 className="text-4xl font-semibold text-purple text-center">
          دعنا نساعدك في تحقيق أهدافك بالطريقة الصحيحة
        </h1>
        <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-3  mt-12 w-[85%] max-md:w-[98%] m-auto">
          <div
            className={`firstcard relative w-full rounded-lg  bg-black h-[608px]`}
          >
            <div className="content  absolute top-12 left-1/2 -translate-x-1/2">
              <h1 className="my-2 font-semibold text-white text-center max-md:text-xl text-4xl">
                تمويل السيارات
              </h1>
              <h1 className="pt-8 text-white text-center max-md:text-[17px] text-xl">
                انطلق إلى آفاق جديدة
              </h1>
            </div>
            <Img
              imgsrc={"/auto-finance.png"}
              styles={
                "w-[350px]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              }
            />
            <div className="button+link absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
                تقدم بطلبك الأن
              </button>
              <Link className="pt-8 text-[14px] text-sky-500" href={"#"}>
                لمعرفة المزيد
              </Link>
            </div>
          </div>
          <div
            className={`secendcard relative  w-full rounded-lg bg-white shadow-sm h-[608px]`}
          >
            <div className="content  absolute top-12 left-1/2 -translate-x-1/2">
              <h1 className="my-2 font-semibold text-purple  text-center max-md:text-xl text-4xl">
                التمويل العقاري
              </h1>
              <h1 className="pt-8 whitespace-nowrap text-center max-md:text-[17px] text-xl">
                استكشف مجموعتنا الكبيرة من منتجات التمويل
              </h1>
            </div>
            <Img
              imgsrc={"/homefinanceimg.png"}
              styles={
                " w-[350px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              }
            />
            <div className="button+link absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
                تقدم بطلبك الأن
              </button>
              <Link className="pt-8 text-[14px] text-sky-500" href={"#"}>
                لمعرفة المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
