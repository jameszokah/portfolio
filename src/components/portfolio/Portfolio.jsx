import React, { useContext } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css';
import Netflix from '../../img/netflix.png'
import Blog from '../../img/blog.png'
// import Yuutube from '../../img/youtube-clone.png'
import Spotify from '../../img/spotify.png'
import Metap from '../../img/metap.png'
import MetapNew from '../../img/metap_new.png'
import Yamazon from '../../img/yamazon.png'
import { themeContext } from '../../context/context';
import { useResponsive } from '../../hooks/useResponsive';
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Portfolio = () => {

        const {width} = useResponsive()

        const {state} = useContext(themeContext)
    const darkMode = state.darkMode;

  return (
    <div className='portfolio'  id='Portfolio'>

{/* heading */}
    <span style={{color: darkMode ? '#fff' : ''}}>Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper spaceBetween={20} modules={[Navigation]} navigation={width > 480 ? true : false}  slidesPerView={width < 480 ? 1 : 3} grabCursor className='portfolio-slider'>
    <SwiperSlide>
                <a href="https://metap.live" target="_blank" rel="noopener noreferrer" className="p-link">
                        <img src={MetapNew} alt='metap new' />
                </a>
        </SwiperSlide>
        <SwiperSlide>
                <a href="https://noflix-web.vercel.app" target="_blank" rel="noopener noreferrer" className="p-link">
                        <img src={Netflix} alt='netflix' />
                </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://yamazon-admin.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-link">
                <img src={Yamazon} alt='yuutube' />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/jameszokah/spotify" target="_blank" rel="noopener noreferrer" className="p-link">
                <img src={Spotify} alt='blog' />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/jameszokah/metap" target="_blank" rel="noopener noreferrer" className="p-link">
                <img src={Metap} alt='blog' />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/jameszokah/" target="_blank" rel="noopener noreferrer" className="p-link">
                <img src={Blog} alt='blog' />
        </a>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Portfolio