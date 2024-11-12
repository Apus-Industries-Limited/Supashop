import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import slide1 from "../../assets/slide.png";
import slide2 from "../../assets/slide1.png";
import { Image } from '@nextui-org/react';


const Slider = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper h-52 w-full"
      loop={true}
    >
      <SwiperSlide className='h-48 w-full flex items-center justify-center'>
        <Image src={slide1} className='object-contain flex-1 w-full'/>
      </SwiperSlide>
      <SwiperSlide className='h-48 w-full flex items-center justify-center'>
        <Image src={slide2} className='object-contain flex-1 w-full'/>
      </SwiperSlide>
      <SwiperSlide className='h-48 w-full flex items-center justify-center'>
        <Image src={slide1} className='object-contain flex-1 w-full'/>
      </SwiperSlide>
      <SwiperSlide className='h-48 w-full flex items-center justify-center'>
        <Image src={slide2} className='object-contain flex-1 w-full'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider