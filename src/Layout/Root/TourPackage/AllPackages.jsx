import React, { useEffect, useState } from 'react';
import image1 from '../../../assets/Package Image/1.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import EmptyPage from '../../Dashboard/EmptyPage/EmptyPage';
import { Rate } from 'antd';

const AllPackages = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const [AllPackagesList, setAllPackagesList] = useState([])

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                if (res?.data) {
                    if (searchParams.get("type")) {
                        const filteredData = res.data.filter(item => (item?.type).toLowerCase() === (searchParams.get("type").toLowerCase()));
                        setAllPackagesList(filteredData);
                        return
                    }
                    setAllPackagesList(res?.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    return (
        <div>
            {AllPackagesList?.length > 0 ?
                <div className='pt-28  md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {AllPackagesList.map(eachPackage =>
                        <div
                            key={eachPackage?.id}
                            className='h-[500px] w-96 relative'
                            onClick={() => navigate(`/package/${eachPackage?.id}`)}
                        >
                            <img src={eachPackage?.imageURL} alt="" className='h-full hover:scale-110 transition-transform duration-300' />

                            <div className='absolute top-0 right-0 text-white text-xl font-bold p-3'>
                                <p>${eachPackage?.price}</p>
                            </div>

                            <div className='absolute bottom-0 bg-black bg-opacity-50 text-white px-5 py-2 space-y-2'>
                                <h1>{eachPackage?.title}</h1>
                                <Rate allowHalf disabled defaultValue={4.5} />
                                <p>{eachPackage?.description.slice(0, 100) + ' ... '}</p>
                            </div>
                        </div>
                    )}
                </div> :
                <EmptyPage
                    message='Currently No Package Available'
                />
            }

        </div>
    );
};

export default AllPackages;