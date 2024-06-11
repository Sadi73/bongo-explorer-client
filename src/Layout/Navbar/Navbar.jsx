import React, { useContext } from 'react';
import './Navbar.css';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AuthContext } from '../../Providers/AuthProvider';
import logo from '../../assets/logo.png';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(error => console.log(error))
    };

    const items = [
        {
            key: '1',
            label: (
                <Link to="/dashboard">Dashboard</Link>
            ),
        },
        {
            label: 'Log Out',
            key: '2',
            onClick: () => handleLogOut()
        },
    ];

    return (
        <div className='navbar shadow-lg fixed bg-black bg-opacity-50 z-10 pr-10'>
            <div className='navbar-start'>
                {/* ------------ FOR MOBILE SCREEN -------------- */}
                <div className='md:hidden'>
                    <MenuBar />
                </div>

                <Link to="/"><button className='text-lg md:text-xl font-medium text-[#FFF8DC] flex items-center'>
                    <img src={logo} alt="" className='w-20'/> Bongo <br/>Explorer
                </button></Link>
            </div>


            {/* ------------------- FOR MEDIUM DEVICE -------------------- */}
            <div className='navbar-center w-1/2 hidden md:flex justify-center'>
                <ul className='menu menu-horizontal '>
                    <li className='mx-5 text-[#FFF8DC]'><Link to="/">Home</Link></li>
                    <li className='mx-5 text-[#FFF8DC]'><Link to="/package/all">Packages</Link></li>
                    <li className='mx-5 text-[#FFF8DC]'><Link to="/story/all">Blogs</Link></li>
                    <li className='mx-5 text-[#FFF8DC]'><a href="#contact-us-footer">Contact Us</a></li>
                </ul>
            </div>

            <div className='navbar-end'>
                {/* -------------- LOGIN & REGISTER BUTTON ------------ */}
                {!user ?
                    <div className='flex gap-3'>
                        <Link to="/login"><button className='border px-3 py-1 rounded-md text-[#FFF8DC] border-[#FFF8DC] hover:bg-[#FFF8DC] hover:text-black'>Login</button></Link>
                        <Link to="/register"><button className='border px-3 py-1 rounded-md text-[#FFF8DC] border-[#FFF8DC] hover:bg-[#FFF8DC] hover:text-black'>Register</button></Link>
                    </div> :
                    <div className='flex gap-2 items-center'>
                        <div className='text-sm text-white'>
                            {user?.email}
                        </div>
                        <Dropdown
                            menu={{ items }}
                            trigger={['click']}
                        >
                            <Avatar
                                src={user?.photoURL}
                                style={{
                                    backgroundColor: '#87d068',
                                    cursor: 'pointer',
                                }}
                                icon={<UserOutlined />}
                            />

                        </Dropdown>
                    </div>
                }

            </div>

        </div >
    );
};

export default Navbar;