

import BestSellers from "@/components/BestSellers/BestSellers";
import Header from "@/components/Header";
import SwiperComponent from "@/components/swiper/swiperCategory";




export default function Home() {

  return (
    <>

      <Header />
      <div className="mt-[24px] mx-[20px] rounded-[8px] bg-[#EDD5D8] pb-[8px]">

        <img src="./imgs/3girls1.png" className="w-[100%] pt-[8px]" />
        <div className="mt-[8px] flex justify-center items-center">

          <p className="text-[#434343] font-bold">آنلاین شاپ کاستومی</p>

        </div>
        <div className="w-full flex justify-center items-center px-[15px]">
          <p className="text-[#434343]">آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید</p>
        </div>
        <div className="mt-[8px] flex justify-center items-center gap-[8px]">

          <div className="text-white w-[132px] h-[32px] rounded-[8px]  bg-[#A72F3B] flex justify-center items-center gap-[4px]">

            <img src="./icons/brush.svg" />
            <p>شروع طراحی</p>
          </div>

          <div className=" bg-[#EDD5D8] w-[132px] h-[32px] text-[#A72F3B] flex justify-center items-center rounded-[8px] border-[1px] border-[#A72F3B]">
            <p>دیدن محصولات</p>

          </div>
        </div>


        

      </div>


    <SwiperComponent />

    <BestSellers />
<div className="h-[900px]"></div>

    </>
  );
}
