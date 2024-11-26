'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import  review1 from '../public/voices/review1.webp';
import  review2 from '../public/voices/review2.webp';
import  review3 from '../public/voices/review3.webp';
import  review4 from '../public/voices/review4.webp';
import  review5 from '../public/voices/review5.webp';
import  review6 from '../public/voices/review6.webp';

import Card from './ui/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Container from 'react-bootstrap/Container';

export default function CarrouselWork() {
  return (
    <>
      <section id='reviews' className='bg-gray-100'>
     <Container>
          <div className="wrap-template">
          <h2 className='wrap-template__title'>Reviews:</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              830: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            <SwiperSlide>
              <Card src={review1} alt='taxi review #1' title='Izmailov R.L.' text='yandex.com'/>
            </SwiperSlide>

            <SwiperSlide>
              <Card src={review2} alt='taxi review #2' title='Toropov Kh.V.' text='google.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review3} alt='taxi review #3' title='Farudinov M.K.' text='2gis.ru'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review4} alt='taxi review #4' title='Karpov K.K.' text='yandex.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review5} alt='taxi review #5' title='Belsky Yu.D.' text='taxi.yandex.com'/>
            </SwiperSlide>
            <SwiperSlide>
              <Card src={review6} alt='taxi review #6' title='Petrov L.N.' text='yandex.com'/>
            </SwiperSlide>
          </Swiper>
          </div>
      </Container>
    </section>
    </>
  );
}