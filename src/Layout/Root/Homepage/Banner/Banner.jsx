import React from 'react';
import img from '../../../../assets/1.jpg';

const Banner = () => {
    return (
        <div>
            <img src={img} alt=""  className='w-full h-screen'/>
        </div>
    );
};

export default Banner;