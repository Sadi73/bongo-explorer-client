import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { RiseLoader } from 'react-spinners';
import { UserContext } from '../../../Providers/UserInfoProvider';

const DashboardRoot = () => {

    const { isLoading } = useContext(UserContext);

    if (isLoading) {
        return <RiseLoader color="#36d7b7" />
    };

    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='grow px-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardRoot;