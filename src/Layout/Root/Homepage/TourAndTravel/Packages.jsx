import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import EmptyPage from '../../../Dashboard/EmptyPage/EmptyPage';

const Packages = ({ allPackages }) => {

    const { user } = useContext(AuthContext);

    const slicedData = allPackages.slice(0, 4);

    const handleWishlist = (packageId) => {

        if (!user) {
            Swal.fire({
                title: "Please login first to add in wishlist",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            return
        }

        const wishedPackage = {};
        wishedPackage.touristName = user?.displayName;
        wishedPackage.touristEmail = user?.email;
        wishedPackage.touristPhoto = user?.photoURL;
        wishedPackage.packageId = packageId;

        axios.get(`https://bongo-traveler.vercel.app/wishlist/all?email=${user?.email}`)
            .then(res => {
                if (res?.data) {
                    const usersWishlist = [...res?.data];
                    const itemExisted = usersWishlist.find(item => item?.packageId === packageId);

                    if (!itemExisted) {
                        axios.post('https://bongo-traveler.vercel.app/wishlist/add', wishedPackage)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "This package has been saved as wishlist",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    } else {
                        Swal.fire({
                            position: "top-end",
                            title: "This package has already been saved as wishlist",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error)
            })



    };

    return (
        <>
            {allPackages?.length > 0 ?
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 px-5 lg:px-0'>
                        {slicedData.map(eachPackage =>
                            <div key={eachPackage?.id} className='flex border gap-5 min-h-72 rounded-lg shadow-xl'>
                                <div className='relative'>
                                    <img src={eachPackage?.imageURL} alt="" className='w-[700px] h-full rounded-l-lg' />

                                    <div
                                        className='bg-white bg-opacity-50 px-3 py-2 absolute top-0 right-0 cursor-pointer'
                                        onClick={() => handleWishlist(eachPackage?.id)}
                                    >
                                        <FaRegHeart />
                                    </div>
                                </div>

                                <div className='flex flex-col p-2'>
                                    <div className='flex-1'>
                                        <h1 className='text-xl font-bold'>{eachPackage?.title}</h1>
                                        <p className='my-2'>{eachPackage?.type}</p>
                                        <hr />
                                        <p className='mt-5'>{eachPackage?.description.slice(0, 150) + ' ... read more'}</p>
                                    </div>
                                    <Link to={`/package/${eachPackage?.id}`}><button className='bg-teal-500 text-white p-2 w-full'>View Details</button></Link>
                                </div>
                            </div>

                        )}

                    </div>

                    <div className='flex justify-center mt-10'>
                        <Link to='/package/all'><button className='bg-teal-500 p-3 text-white'>View All Packages</button></Link>
                    </div>
                </div> :
                <EmptyPage
                    message='Currently No Package Available'
                    linkMessage={false}
                />
            }
        </>
    );
};

export default Packages;