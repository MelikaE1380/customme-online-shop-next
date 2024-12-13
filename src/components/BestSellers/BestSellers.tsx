


function BestSellers() {
    return (

        <>

            <div className="flex px-[20px] mt-[20px] justify-between">

                <div className="flex justify-center items-center">
                    <p className="font-bold text-[15px]">پرفروش ترین ها</p>
                </div>
                <div>
                    <p className="text-[#A62F3B] text-[13px] px-[3px] flex justify-center items-center">مشاهده بیشتر</p>
                </div>

            </div>

            <div className="flex flex-wrap mt-[12px] mx-[20px] justify-between">

                <div className="border-[#EDEDED] border-[1px] flex flex-col items-center rounded-[16px]">

                    <img className="mt-[12px]" src="./imgs/Best-sellers/best1.png" />

                    <div className="flex justify-between items-center gap-[30px] mx-[12px] mt-[12px]">
                        <p className="font-bold">
                            تیشرت زنانه
                        </p>
                        <img src="./icons/Like.svg" />
                    </div>
                    <div className="mt-[12px] px-[12px]">
                        <p className=" text-[13px]">دارای رنگ بندی، قابل طراحی</p>
                    </div>

                    <div className="mt-[5px] flex gap-[9px] justify-end font-bold">
                        <p> 150,000  </p><p>تومان</p>
                    </div>
                </div>



                <div className="border-[#EDEDED] border-[1px] flex flex-col items-center rounded-[16px]">

                    <img className="mt-[12px]" src="./imgs/Best-sellers/best1.png" />

                    <div className="flex justify-between items-center gap-[30px] mx-[12px] mt-[12px]">
                        <p className="font-bold">
                            تیشرت زنانه
                        </p>
                        <img src="./icons/Like.svg" />
                    </div>
                    <div className="mt-[12px] px-[12px]">
                        <p className=" text-[13px]">دارای رنگ بندی، قابل طراحی</p>
                    </div>

                    <div className="mt-[5px] flex gap-[9px] justify-end font-bold">
                        <p> 150,000  </p><p>تومان</p>
                    </div>
                </div>





            </div>

        </>
    )
}

export default BestSellers;