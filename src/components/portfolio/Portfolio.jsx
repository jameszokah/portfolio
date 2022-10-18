import React, { useContext } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css';
import Netflix from '../../img/netflix.png'
import Blog from '../../img/blog.png'
import Yuutube from '../../img/youtube-clone.png'
import 'swiper/css';
import { themeContext } from '../../context/context';

const Portfolio = () => {

        const {state} = useContext(themeContext)
    const darkMode = state.darkMode;

  return (
    <div className='portfolio'  id='Portfolio'>

{/* heading */}
    <span style={{color: darkMode ? '#fff' : ''}}>Recent Projects</span>
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