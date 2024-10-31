import React from "react";
import Img from "./Image";
import Link from "next/link";
export default function FivesSection() {
  return (
    <>
      <div className="bg-white relative mt-8 w-[85%] max-md:w-[98%] py-2 rounded-lg shadow-sm h-[520px] max-md:h-fit m-auto flex items-center ">
        <div className="box  w-full">
          <div className="content  ">
            <h1 className="my-2 whitespace-nowrap text-purple font-extrabold  text-center max-md:text-3xl text-4xl">
              حياك الله في دليل مصرف الراجحي
            </h1>
            <h1 className="pt-8  text-center text-[18px]">
              في كل خطوة لك دليل يفيدك. نقدم لك نصائح مفيدة ومعلومات للقادمين
              الجدد من
            </h1>
            <h1 className="pt-2  text-center text-[18px]">
              الخارج وأيضا للمقيمين في السعودية.
            </h1>
          </div>
          <div className="flex items-center max-md:flex-col max-md:flex-wrap gap-6 pt-12 w-full">
            <div className="w-full flex items-center flex-col gap-4">
              <h1 className="font-extrabold text-xl">تحويل النقاط</h1>
              <p>أرسل النقاط لأحبائك.</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <h1 className="font-extrabold text-xl">استبدال النقاط</h1>
              <p>كتالوج شامل من المكافآت مصمم خصيصًا لك.</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <h1 className="font-extrabold text-xl">كسب النقاط</h1>
              <p>ربح النقاط بسهولة من خلال برنامج مكافأه المحسّن</p>
            </div>
          </div>
          <div className="w-fit mt-11 m-auto">
            <Link className=" text-[14px] text-sky-500" href={"#"}>
              <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
                تعرف أكثر
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
