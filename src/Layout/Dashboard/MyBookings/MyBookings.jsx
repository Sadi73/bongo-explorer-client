import React, { useContext, useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import EmptyPage from '../EmptyPage/EmptyPage';

const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const [myBookedData, setMyBookedData] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {

        axios.get(`https://bongo-traveler.vercel.app/packages/all`)
            .then(res => setAllPackages(res?.data))
            .catch(error => console.log(error))

        axios.get(`https://bongo-traveler.vercel.app/booked-packages/all?email=${user?.email}`)
            .then(res => setMyBookedData(res?.data))
            .catch(error => console.log(error))
    }, [reload]);

    return (
        <div className='mt-10'>
            {myBookedData.length > 0 ? myBookedData.map(item =>
                <div key={item?._id}
                    className='mb-5'
                >
                    <PackageCard
                        type='bookings'
                        packageInfo={item}
                        packageDetails={allPackages?.find(eachPackage => eachPackage?.id == item?.package)}
                        reload={reload}
                        setReload={setReload}
                    />
                </div>) :
                <EmptyPage />
            }


        </div>
    );
};

export default MyBookings;