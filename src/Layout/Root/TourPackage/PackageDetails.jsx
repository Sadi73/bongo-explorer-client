import React, { useContext, useEffect, useState } from 'react';
import image1 from '../../../assets/Package Image/2.png';
import image2 from '../../../assets/Package Image/3.png';
import image3 from '../../../assets/Package Image/4.png';
import image4 from '../../../assets/Package Image/5.png';
import image5 from '../../../assets/Package Image/6.png';
import image6 from '../../../assets/Package Image/7.png';
import image7 from '../../../assets/Package Image/8.png';
import { Collapse } from 'antd';
import MeetGuides from '../Homepage/TourAndTravel/MeetGuides';
import BookNowModal from './BookNowModal';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../Providers/UserInfoProvider';

const images = [image1, image2, image3, image4, image5, image6, image7];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

const PackageDetails = () => {
    const { userDetails } = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [packageDetails, setPackageDetails] = useState({});

    const params = useParams();

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/package/${parseInt(params?.packageId)}`)
            .then(res => {
                if (res?.data?.[0]) {
                    setPackageDetails(res?.data?.[0])
                }
            })
            .catch(error => console.log(error))
    }, []);


    return (
        <>

            {isModalOpen &&
                <BookNowModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            }

            <div className='md:w-[80%] mx-auto pt-24 space-y-5'>

                <div className='flex flex-col  justify-center items-center space-y-5'>

                    <div className='text-center leading-8'>
                        <h1 className='text-3xl font-semibold'>{packageDetails?.title}</h1>
                        <p>Type: {packageDetails?.type}</p>
                        <p>Price: ${packageDetails?.price}</p>
                    </div>
                    {userDetails?.role !== 'ADMIN' && <button className='bg-teal-500 text-white px-5 py-3' onClick={() => setIsModalOpen(true)}>Book Now</button>}
                </div>



                <div className='gallery-container space-y-5'>
                    <div className='row-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <img className='h-72 w-full' src={image1} alt="" />
                        <img className='h-72 w-full' src={image2} alt="" />
                    </div>

                    <div className='row-2 grid grid-cols-1 md:grid-cols-4 gap-5'>
                        <img className='h-72 w-full' src={image3} alt="" />
                        <img src={image4} alt="" className='col-span-2 h-72 w-full' />
                        <img className='h-72 w-full' src={image5} alt="" />
                    </div>

                    <div className='row-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <img className='h-72 w-full' src={image6} alt="" />
                        <img className='h-72 w-full' src={image7} alt="" />
                    </div>
                </div>

                <div className='space-y-10'>
                    <h1 className='text-5xl text-center'>About the tour</h1>
                    <div className='grid grid-cols-3 gap-10'>
                        <div>
                            <h1>Accomodation </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum.</p>
                        </div>
                        <div>
                            <h1>Meals </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum.</p>
                        </div>
                        <div>
                            <h1>Transport </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum.</p>
                        </div>
                        <div>
                            <h1>Group Size </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum.</p>
                        </div>
                        <div>
                            <h1>Team </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum.</p>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, totam soluta, quisquam repellendus corporis accusantium eveniet impedit officiis enim voluptatibus recusandae cumque dolores voluptatem possimus veniam illo qui nemo deserunt ratione accusamus a necessitatibus repellat earum perferendis. Voluptatum, illum dolorum?</p>
                </div>

                <div className='space-y-10'>
                    <h1 className='text-5xl text-center'>Tour Plan</h1>
                    <Collapse accordion items={items} />
                </div>

                <div className='space-y-10'>
                    <h1 className='text-5xl text-center'>Tour Guides</h1>
                    <MeetGuides />
                </div>
            </div>
        </>
    );
};

export default PackageDetails;