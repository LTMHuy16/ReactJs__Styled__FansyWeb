import * as Styled from './Slider.styled'
import SliderItem from './SliderItem';
import { sliderInfos } from '../../../assets/fakeData/Sliders';

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Slider = () => {
  return (
    <Styled.SliderContainer>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // autoplay={{
        //   delay: 500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {sliderInfos?.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              img={item.img}
              subTitle={item.subTitle}
              title={item.title}
              btn1={item.btn1}
              btn2={item.btn2}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.SliderContainer>
  )
}

export default Slider