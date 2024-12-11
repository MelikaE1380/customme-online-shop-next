'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; // وارد کردن Swiper و SwiperSlide
import 'swiper/css'; // وارد کردن CSS اصلی Swiper
import 'swiper/css/navigation'; // وارد کردن CSS برای Navigation
import 'swiper/css/pagination'; // وارد کردن CSS برای Pagination
import { Navigation, Pagination } from 'swiper/modules'; // وارد کردن ماژول‌ها از 'swiper'
import styles from './SwiperComponent.module.css'; // وارد کردن فایل CSS ماژول

const SwiperComponent = () => {
  return (
    <>
      <div className="mt-[24px] px-[20px] flex justify-between items-center">
        <div>
          <p className="text-[#313131] font-bold">دسته بندی محصولات</p>
        </div>
        <div className={`flex items-center justify-center gap-[4px] ${styles.customNavigation}`}>
        <img
            src="./icons/arrow-right.svg"
            className={`swiper-button-next ${styles.customArrow}`}
          />
          <img
            src="./icons/arrow-left.svg"
            className={`swiper-button-prev ${styles.customArrow}`}
          />
          
        </div>
      </div>
      <div className='pr-[20px] pt-[12px]'>

      <Swiper 
          modules={[Navigation, Pagination]} // ماژول‌ها را به این شکل استفاده کنید
          navigation={{
            prevEl: '.swiper-button-prev', // دکمه قبلی
            nextEl: '.swiper-button-next', // دکمه بعدی
          }}
          pagination={false} // غیرفعال کردن صفحه‌بندی (سه نقطه)
          spaceBetween={0} // حذف فضای بین اسلایدها
          slidesPerView={4} // هر بار فقط یک اسلاید نمایش داده شود
          loop={true} // چرخه‌ای بودن اسلایدها
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            // تنظیمات برای عرض‌های مختلف صفحه
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
        <SwiperSlide  className='w-[54px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='w-[54px] h-[64px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='w-[54px] h-[64px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='w-[54px] h-[64px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='w-[54px] h-[64px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide  className='w-[54px] h-[64px] ml-[12px] text-[12px] border-[1px] flex justify-start'>   
          <div className='w-[68px] flex flex-col justify-center items-center'>
          <div className='px-[4px]'>
            <img src="./imgs/Rectangle978.png" className="w-[100%] pt-[8px]" />
          </div>
          <div>
            <p>قاب موبایل</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
