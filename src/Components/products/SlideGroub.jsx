import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const SlideGroup = ({ title, data, Component }) => {
  return (
    <>
      <div className="top-slide">
        <h2 className='title'>{title}</h2>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <Component product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideGroup;