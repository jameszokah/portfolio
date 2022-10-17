import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css';
import Netflix from '../../img/netflix.png'
import Blog from '../../img/blog.png'
import Yuutube from '../../img/youtube-clone.png'
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className='portfolio'>

{/* heading */}
    <span>Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper spaceBetween={30} slidesPerView={3} grabCursor className='portfolio-slider'>
        <SwiperSlide>
                <img src={Netflix} alt='netflix' />
        </SwiperSlide>
        <SwiperSlide>
                <img src={Yuutube} alt='yuutube' />
        </SwiperSlide>
        <SwiperSlide>
                <img src={Blog} alt='blog' />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio