import React from "react";
import Img from "./Image";
import Link from "next/link";
export default function SixthSection() {
  return (
    <>
      <div className="bg-white relative mt-8 w-[85%] max-md:w-[98%] rounded-lg shadow-sm h-[695px] max-md:h-fit m-auto flex items-center justify-center ">
        <div className="box w-full">
          <div className="content  mt-2">
            <h1 className="my-2 whitespace-nowrap text-purple font-semibold  text-center text-3xl">
              أرقامنا تتحدث
            </h1>
            <h1 className="pt-8  text-center text-[18px]">
              تأسس مصرف الراجحي عام 1957 ، وهو أحد أكبر البنوك في العالم
            </h1>
          </div>
          <div className="grid grid-cols-5 max-md:grid-cols-1 max-lg:grid-cols-3 pt-12 w-full">
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_stock_market_up.png"} styles={"w-[70px]"} />
              <h1 className="font-extrabold text-[22px] text-purple">
                مليون ريال سعودي
              </h1>
              <span className="font-extrabold text-[22px] text-purple">
                8.4
              </span>
              <p>صافي الأرباح (بعد الزكاة)</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_Endeavor_Blue-136.png"} styles={"w-[70px]"} />
              <h1 className="font-extrabold text-[22px] text-purple">
                13 +مليون
              </h1>
              <p>حساب عميل </p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_Bank_branch.png"} styles={"w-[70px]"} />
              <h1 className="font-extrabold text-[22px] text-purple">513</h1>
              <p>الفروع</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_ATM.png"} styles={"w-[70px]"} />
              <h1 className="font-extrabold text-[22px] text-purple">4,660</h1>
              <p>جهاز صراف الي</p>
            </div>
            <div className="w-full flex items-center flex-col gap-4">
              <Img imgsrc={"/L_finance_cash.png"} styles={"w-[70px]"} />
              <h1 className="font-extrabold text-[22px] text-purple">
                776 مليار ريال
              </h1>
              <span className="font-extrabold text-[22px] text-purple">
                سعودي
              </span>
              <p>إجمالي الأصول</p>
            </div>
          </div>
          <div className="button+link  flex flex-col items-center">
            <p className="pt-8 text-[14px] text-center ">
              ملتزمون بتقديم أفضل الخدمات والمنتجات لك لجميع احتياجاتك المالية
            </p>
            <button className="mt-4 bg-sky-500 text-white cursor-pointer py-3 px-4 rounded-full hover:bg-sky-300 transition-all">
              استثمر معنا الأن
            </button>
            <Link className="pt-8 text-[14px] text-sky-500" href={"#"}>
              تعرف أكثر عن مصرف الراجحى
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
