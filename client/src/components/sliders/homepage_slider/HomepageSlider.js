import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './homepageSlider.scss';

// Iport required slide photos
import Slide1 from '../../../assets/photos/hompage/gallery/galleryphoto_1.jpeg';
import Slide2 from '../../../assets/photos/hompage/gallery/galleryphoto_2.jpeg';
import Slide3 from '../../../assets/photos/hompage/gallery/galleryphoto_3.jpeg';
import Slide4 from '../../../assets/photos/hompage/gallery/galleryphoto_4.jpeg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Slide1} id='slide_1' className='img__slide active' width='100%' height='100%' alt='cope event podium selfie'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide2} id='slide_2' className='img__slide' width='100%' height='100%'alt='cope event team '></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide3} id='slide_3' className='img__slide' width='100%' height='100%'alt='cope event group '></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide4} id='slide_4' className='img__slide' width='100%' height='100%'alt='cope event group '></img>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
