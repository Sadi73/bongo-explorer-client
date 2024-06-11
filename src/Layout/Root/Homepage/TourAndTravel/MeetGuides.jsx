import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import person1 from '../../../../assets/person1.jpeg'
import person2 from '../../../../assets/person2.jpeg'
import person3 from '../../../../assets/person3.jpg'
import person4 from '../../../../assets/person4.jpg'
import person5 from '../../../../assets/person5.jpg'
import person6 from '../../../../assets/person6.jpeg'
import person7 from '../../../../assets/person7.jpg'
import person8 from '../../../../assets/person8.jpg'
import axios from 'axios';

const MeetGuides = () => {

    // useEffect(() => {
    //     axios.get('https://bongo-traveler.vercel.app/guides/all')
    //         .then(res => {
    //             console.log(res?.data)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    return (
        <div className='p-10 space-y-10 '>
            {/* <h1 className='text-center text-5xl'>Our Experts</h1> */}

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={person1} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person2} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person3} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person4} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person5} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person6} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person7} alt="" className='h-60' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person8} alt="" className='h-60' />
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default MeetGuides;