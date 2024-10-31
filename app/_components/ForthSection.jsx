import React from "react";
import Img from "./Image";
import Link from "next/link";
export default function ForthSection() {
  return (
    <>
      <div className="bg-white relative mt-8 w-[85%] max-md:w-[98%] rounded-lg shadow-sm h-[550px] max-md:h-fit m-auto flex items-center ">
        <div className="box  w-full">
          <div className="content  ">
            <h1 className="my-2 whitespace-nowrap text-purple font-semibold  text-center max-md:text-xl text-3xl">
              تجربة ثرية ومجزية تغطي احتياجاتك
            </h1>
            <h1 className="pt-8  text-center text-[18px]">
              مع برنامج مكافاة اربح واستبدل نقاط المكافآت في كل خطوة على الطريق!
              أيا كان ، في
            </h1>
            <h1 className="pt-2 font-semibold text-center text-[18px]">
              أي مكان ، في أي وقت
            </h1>
          </div>
          <div className="flex items-center max-md:flex-col max-md:flex-wrap gap-6 pt-12 w-full">
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_transfer_point.png"} styles={"w-[70px]"} />
              <h1 className="font-semibold">تحويل النقاط</h1>
              <p>أرسل النقاط لأحبائك.</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_Cart_shopping.png"} styles={"w-[70px]"} />
              <h1 className="font-semibold">استبدال النقاط</h1>
              <p>كتالوج شامل من المكافآت مصمم خصيصًا لك.</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_transfer_point.png"} styles={"w-[70px]"} />
              <h1 className="font-semibold">كسب النقاط</h1>
              <p>ربح النقاط بسهولة من خلال برنامج مكافأه المحسّن</p>
            </div>
          </div>
          <div className="w-fit mt-11 m-auto">
            <Link className=" text-[14px] text-sky-500" href={"#"}>
              <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
                تقدم بطلبك الأن
              </button>
            </Link>
          </div>
          ;
        </div>
      </div>
    </>
  );
}
