import React, { useContext, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Providers/UserInfoProvider';

const userItems = [
    {
        key: '1',
        label: (
            <Link to="/dashboard/my-profile">My Profile</Link>
        ),
        icon: <MailOutlined />
    },
    {
        key: '2',
        label: (
            <Link to="/dashboard/my-wishlist">My Wishlist</Link>
        ),
        icon: <AppstoreOutlined />
    },
    {
        key: '3',
        label: (
            <Link to="/dashboard/my-bookings">My Bookings</Link>
        ),
        icon: <AppstoreOutlined />
    },
    {
        key: '4',
        label: (
            <Link to="/dashboard/request-to-admin">Request To Admin</Link>
        ),
        icon: <SettingOutlined />
    },
];

const guideItems = [
    {
        key: '1',
        label: (
            <Link to="/dashboard/my-profile">My Profile</Link>
        ),
        icon: <MailOutlined />
    },
    {
        key: '2',
        label: (
            <Link to="/dashboard/my-assigned-tours">My Assigned Tours</Link>
        ),
        icon: <AppstoreOutlined />
    }
];

const adminItems = [
    {
        key: '1',
        label: (
            <Link to="/dashboard/my-profile">My Profile</Link>
        ),
        icon: <MailOutlined />
    },
    {
        key: '2',
        label: (
            <Link to="/dashboard/add-package">Add New Package</Link>
        ),
        icon: <AppstoreOutlined />
    },
    {
        key: '3',
        label: (
            <Link to="/dashboard/manage-user">Manage User</Link>
        ),
        icon: <AppstoreOutlined />
    }
];

const Sidebar = () => {

    const { userDetails, isLoading } = useContext(UserContext);

    const [current, setCurrent] = useState('1');
    const role = userDetails?.role;

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className='menu-container h-screen' >
            <div className='my-2 pl-5 text-xl font-bold'>
                <Link to='/'> <ArrowLeftOutlined /> Back To Home</Link>
            </div>
            <Menu
                theme={'dark'}
                onClick={onClick}
                style={{
                    width: 256,
                    height: '90%'
                }}
                defaultOpenKeys={['1']}
                selectedKeys={[current]}
                mode="inline"
                items={role === 'USER' ? userItems : role === 'ADMIN' ? adminItems : guideItems}
            />
        </div>
    );
};
export default Sidebar;