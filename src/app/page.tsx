


import Header from "@/components/Header";



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
          <p>آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید</p>
        </div>
        <div className="mt-[8px] flex justify-center items-center gap-[8px]">

          <div className="text-white  rounded-[8px]  bg-[#A72F3B] flex justify-center items-center gap-[4px]">
           
            <img src="./icons/brush.svg" />
            <p>شروع طراحی</p>
          </div>

          <div className=" bg-[#EDD5D8] text-[#A72F3B] rounded-[8px] border-[1px] border-[#A72F3B]">
            <p>دیدن محصولات</p>

          </div>
        </div>


      </div>
      <div className="mt-[24px] px-[20px] flex justify-between items-center">
        <div>
          <p className="text-[#313131] font-bold">دسته بندی محصولات</p>
        </div>
        <div className="flex justify-center items-center gap-[4px]">
 
          <img src="./icons/arrow-right.svg" />
          <img src="./icons/arrow-left.svg" />
        </div>
      </div>


      <div>
        
      </div>

    </>
  );
}
