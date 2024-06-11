import React, { useContext } from 'react';
import personImage from '../../../assets/person1.jpeg';
import { UserContext } from '../../../Providers/UserInfoProvider';

const MyProfile = () => {

    const { userDetails, isLoading } = useContext(UserContext);

    return (
        <div className='mt-20 bg-[#f9f9f9] flex text-center items-center'>
            <div className='leading-8'>
                <p >Australia</p>
                <h1 className='text-2xl'>Want to see the countryside</h1>
                <p>{userDetails?.name}</p>

                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam quos dicta maxime odit dolore quis, necessitatibus nostrum. Aliquid possimus quos ad, modi deleniti at voluptatum placeat ab! Dignissimos, rerum!</p>

            </div>

            <div>
                <img src={userDetails?.photoURL ? userDetails?.photoURL : personImage} alt="" className='w-96' />
            </div>

        </div>
    );
};

export default MyProfile;