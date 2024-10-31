import React from "react";
import Img from "./Image";
import Link from "next/link";
export default function ThirdSection() {
  return (
    <>
      <div className="bg-white relative mt-8 w-[85%] max-md:w-[98%] rounded-lg shadow-sm h-[695px] max-md:h-fit m-auto flex  justify-center ">
        <div className="box flex items-center flex-col justify-between py-3  ">
          <div className="content  ">
            <h1 className="my-2 whitespace-nowrap text-purple font-semibold  text-center text-3xl">
              التمويل الشخصي
            </h1>
            <h1 className="pt-8  text-center text-[18px]">
              استكشف مجموعتنا الكبيرة من منتجات التمويل الشخصي وخدماته
            </h1>
          </div>
          <Img imgsrc={"/personal-finance.png"} styles={"w-[350px]"} />
          <div className="button+link  flex flex-col items-center">
            <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
              تقدم بطلبك الأن
            </button>
            <Link className="pt-8 text-[14px] text-sky-500" href={"#"}>
              لمعرفة المزيد
            </Link>
            <Link className="pt-8 text-[14px] text-sky-500" href={"#"}>
              قواعد الافصاح عن أسعار المنتجات التمويلية للأفراد
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
