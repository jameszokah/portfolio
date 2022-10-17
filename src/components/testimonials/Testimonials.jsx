import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css';
import data from '../../data';
import { Pagination } from 'swiper';
import 'swiper/css/paginations'
import 'swiper/css'


const Testimonials = () => {

    const testimonials = data?.testimonials;


  return (
    <div className='t-wrapper'>
        <div className="t-heading">
            <span>Clients Always get </span>
            <span>Expcetional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{backgroundColor: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{backgroundColor: 'skyblue'}}></div>
        </div>
        {/* slider */}

        <Swiper 
        modules={Pagination}
        pagination={{clickable: true}}
        slidesPerGroupSkip={1}
        >
            {
                testimonials.map((client) => {
                    return (

                        <SwiperSlide key={client.name}>
                            <div className="testimonials">
                                <img src={client.img} alt={client.name} />
                                <span>{client.name}</span>
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>

    </div>
  )
}

export default Testimonials