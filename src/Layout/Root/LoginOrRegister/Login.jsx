import { Button, Divider, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {

    const { logIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result?.user?.email) {
                    axios.post('https://bongo-traveler.vercel.app/users', {
                        name: result?.user?.displayName,
                        email: result?.user?.email,
                        role: 'USER'
                    }).then(res => {
                        if (res?.data) {
                            let timerInterval;
                            Swal.fire({
                                title: "Congratulation!!!",
                                html: "You have Logged in your account",
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading();
                                    const timer = Swal.getPopup().querySelector("b");
                                    timerInterval = setInterval(() => {
                                        timer.textContent = `${Swal.getTimerLeft()}`;
                                    }, 100);
                                },
                                willClose: () => {
                                    clearInterval(timerInterval);
                                }
                            }).then((result) => {
                                /* Read more about handling dismissals below */
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    navigate(location?.state ? location?.state : '/')
                                }
                            });
                        }
                    }).catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    };

    const handleLogIn = (email, password) => {
        logIn(email, password)
            .then(result => {
                if (result?.user?.email) {
                    let timerInterval;
                    Swal.fire({
                        title: "Congratulation!!!",
                        html: "You have logged in your account",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    });
                }
            })
            .catch(error => {
                setLoginError(true);
                console.log('error: ',error)
            })
    };


    return (
        <div className='md:pt-20'>
            <div className='flex border mt-5 w-[80%] mx-auto min-h-[550px] rounded-lg mt-20'>
                <div className='flex items-center justify-center grow'>
                    <div className='space-y-5'>
                        <h1 className='text-center text-3xl text-teal-500 font-semibold'>Sign In to Bongo Explorers</h1>
                        <div className='flex justify-center'>
                            <Button type="" shape="circle"
                                onClick={handleGoogleSignIn}
                            >
                                G
                            </Button>
                        </div>

                        <Divider>OR</Divider>

                        {loginError && <p className='text-red-500'>Wrong Email or Password</p>}

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                handleLogIn(values?.email, values?.password)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    className='space-y-5'
                                >
                                    <Input
                                        name='email'
                                        className={`py-3 ${(touched?.email && errors?.email) ? 'border-2 border-red-500' : ''}`}
                                        placeholder="Email"
                                        value={values?.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <MailOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }
                                    />
                                    {(touched?.email && errors?.email) && <p className='text-red-500'>{errors.email}</p>}


                                    <Input.Password
                                        name='password'
                                        className={`py-3 ${(touched?.password && errors?.password) ? 'border-2 border-red-500' : ''}`}
                                        placeholder="Password"
                                        value={values?.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        prefix={
                                            <LockOutlined
                                                style={{
                                                    color: 'rgba(0,0,0,.25)',
                                                }}
                                            />
                                        }

                                    />
                                    {(touched?.password && errors?.password) && <p className='text-red-500'>{errors.password}</p>}


                                    <div className='flex justify-center'>
                                        <button type='submit' className='bg-teal-500 text-white px-10 py-3 rounded-full'>Sign In</button>
                                    </div>
                                </form>
                            )}
                        </Formik>

                    </div>
                </div>

                <div className='border-r bg-teal-500 text-center text-white w-[40%] flex justify-center items-center rounded-r-lg'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-bold'>Hello, Explorer!</h1>
                        <p className=''>Enter Your Personal Details <br /> and  start journey with us</p>
                        <div>
                            <Link to="/register"><button className='border px-10 py-3 rounded-full'>Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;