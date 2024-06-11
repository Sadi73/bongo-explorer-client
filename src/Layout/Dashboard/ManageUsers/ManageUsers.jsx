import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmptyPage from '../EmptyPage/EmptyPage';

const ManageUsers = () => {

    const [allRequest, setAllRequest] = useState([]);
    const [reload, setReload] = useState(false);

    const handleApprove = (userEmail, requestId) => {
        axios.put(`https://bongo-traveler.vercel.app/users?email=${userEmail}`)
            .then(res => {
                console.log(res?.data)
                if (res?.data?.modifiedCount) {
                    axios.delete(`https://bongo-traveler.vercel.app/users/request/${requestId}`)
                        .then(res => {
                            if (res?.data?.deletedCount) {
                                setReload(!reload);
                            }
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/users/request')
            .then(res => {
                setAllRequest(res?.data)
            })
            .catch(error => console.log(error))
    }, [reload])

    return (
        <div className='mt-10'>
            {allRequest.length > 0 ? allRequest.map(request =>
                <div key={request?._id}
                    className='flex justify-between items-center border rounded-lg p-5 shadow-lg'
                >
                    <div>
                        <p>User Email</p>
                        <p>{request?.userEmail}</p>
                    </div>
                    <div>
                        <p>Requested Role</p>
                        <p>{request?.requestedRole}</p>
                    </div>
                    <div>
                        <button
                            className='bg-green-500 text-white px-5 py-3 rounded-md'
                            onClick={() => handleApprove(request?.userEmail, request?._id)}
                        >Approve</button>
                    </div>
                </div>
            ) : <EmptyPage message='No request Found'/>}
        </div>
    );
};

export default ManageUsers;