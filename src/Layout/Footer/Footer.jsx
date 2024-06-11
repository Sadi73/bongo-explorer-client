import { Divider } from 'antd';
import React from 'react';
import image from '../../assets/map.gif';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <div id='contact-us-footer' className='mt-20'>
            <div className='md:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10 uppercase'>
                <div className='md:w-1/3'>
                    <Divider>Where We Are</Divider>
                    <img src={image} alt="" />
                </div>

                <div className='md:w-1/3'>
                    <Divider>Follow Us</Divider>
                    <div className='flex justify-center gap-5'>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaFacebookSquare className='text-2xl' />
                            <p className='text-xs'>Facebook</p>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaXTwitter className='text-2xl' />
                            <p className='text-xs'>Twitter</p>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <IoLogoYoutube className='text-2xl' />
                            <p className='text-xs'>Youtube</p>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <FaLinkedin className='text-2xl' />
                            <p className='text-xs'>Linked In</p>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/3'>
                    <Divider>News Letter</Divider>
                    <div className='space-y-3 px-5'>
                        <input type="text" name="" className="w-full border p-3" placeholder='Email Address' />
                        <button className='w-full border p-3 bg-black text-white uppercase'>Subscribe</button>
                    </div>
                </div>
            </div>


            <p className='bg-black text-white text-center py-3 mt-10 md:mt-0'>© 2024 Bongo Explorer. All rights reserved.</p>


        </div>
    );
};

export default Footer;