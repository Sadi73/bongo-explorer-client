import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PackageCard = ({ type, packageInfo, packageDetails, reload, setReload }) => {
    const navigate = useNavigate();

    const handleCancelBooking = (id) => {
        axios.delete(`https://bongo-traveler.vercel.app/booked-package/delete/${id}`)
            .then(res => {
                if (res?.data) {
                    setReload(!reload)
                }
            })
            .catch(error => console.log(error))
    }

    const handleRemoveFromWishlist = (id) => {
        axios.delete(`https://bongo-traveler.vercel.app/wishlist/delete/${id}`)
            .then(res => {
                if (res?.data) {
                    setReload(!reload)
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='flex flex-col lg:flex-row items-center gap-10 border shadow-xl rounded-lg p-5'>
            <div>
                <img src={packageDetails?.imageURL} alt="" className='w-96 h-64 rounded-lg' />
            </div>

            <div className='lg:w-[60%] leading-7'>
                <h1><span className='font-bold'>Package Name:</span> {packageDetails?.title}</h1>
                <p><span className='font-bold'>Description:</span> {packageDetails?.description}</p>
                {type === 'bookings' &&
                    <>
                        <p><span className='font-bold'>Guided By</span>: {packageInfo?.guide}</p>
                        <p><span className='font-bold'>Price:</span> ${packageInfo?.price}</p>
                        <p><span className='font-bold'>Date:</span> {packageInfo?.date}</p>
                        <p><span className='font-bold'>Status:</span> {packageInfo?.status}</p>
                    </>
                }
            </div>

            <div className='flex lg:flex-col  gap-5'>
                {type === 'wishlist' ?
                    <>
                        <Button type="primary" danger ghost onClick={() => handleRemoveFromWishlist(packageInfo?._id)}>Remove</Button>
                        <Button type="primary" onClick={() => navigate(`/package/${packageDetails?.id}`)}>Details</Button>
                    </> :
                    <>
                        <Button type="primary" danger ghost onClick={() => handleCancelBooking(packageInfo?._id)}>Cancel</Button>
                        <Button type="primary">Pay Now</Button>
                    </>
                }
            </div>

        </div>
    );
};

export default PackageCard;