import React, { useContext } from 'react';
import { UserContext } from '../../../Providers/UserInfoProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RequestToAdmin = () => {

    const { userDetails } = useContext(UserContext);
    const navigate = useNavigate();

    const handleApply = () => {
        axios.post(`https://bongo-traveler.vercel.app/update-role`, { userEmail: userDetails?.email, requestedRole: 'GUIDE' })
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Requested to be a guide",
                        showConfirmButton: false,
                        timer: 1500,
                        didClose: () => {
                            navigate('/');
                        }
                    });
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <div className='flex justify-center mt-20'>
            <div className='w-[500px] border px-10 py-5 space-y-5 rounded-lg'>
                <p className='text-xl font-bold text-center'>Request to Admin</p>
                <p className='text-center'>I have enough experience of travelling. I am confident that I can be a valuable tour guide.</p>

                <div className='flex justify-center'>
                    <button
                        className='bg-teal-500 text-white py-3 px-5 rounded-md hover:bg-teal-700'
                        onClick={handleApply}
                    >Apply</button>
                </div>
            </div>
        </div>
    );
};

export default RequestToAdmin;