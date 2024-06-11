import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Providers/UserInfoProvider';
import EmptyPage from '../EmptyPage/EmptyPage';

const MyAssignedTours = () => {

    const { userDetails } = useContext(UserContext);
    const [myAssignedBooking, setMyAssignedBooking] = useState([]);
    const [reload, setReload] = useState(false);

    const handleApprove = (id, status) => {
        axios.put(`https://bongo-traveler.vercel.app/update-package-status/${id}`, { status })
            .then(res => {
                if (res?.data) {
                    setReload(!reload);
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/assigned-package/guide?email=${userDetails?.email}`)
            .then(res => setMyAssignedBooking(res?.data))
            .catch(error => console.log(error))
    }, [reload]);

    return (
        <div className='mt-10'>
            {myAssignedBooking.length > 0 ?
                myAssignedBooking.map(booking =>
                    <div key={booking?._id }
                        className='flex justify-between items-center border rounded-lg p-5 shadow-lg mb-5 flex-wrap'
                    >
                        <div className='p-5'>
                            <p>User Email</p>
                            <p>{booking?.touristEmail}</p>
                        </div>
                        <div className='p-5'>
                            <p>Selected package</p>
                            <p>{booking?.package}</p>
                        </div>
                        <div className='p-5'>
                            <p>Date</p>
                            <p>{booking?.date}</p>
                        </div>
                        <div className='p-5'>
                            <p>Offered Price</p>
                            <p>{booking?.price}</p>
                        </div>
                        <div  className='p-5'>
                            {booking?.status !== 'approved' ?
                                <button
                                    className='bg-green-500 text-white px-5 py-3 rounded-md'
                                    onClick={() => handleApprove(booking?._id, 'approved')}
                                >Approve</button> : <p className='text-green-500'>{booking?.status}</p>
                            }
                        </div>
                    </div>
                )
                : <EmptyPage message='You have No Tours Assigned'/>}
        </div>
    );
};

export default MyAssignedTours;