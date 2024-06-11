import React, { useContext, useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import EmptyPage from '../EmptyPage/EmptyPage';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);

    const [myWishedData, setMyWishedData] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/packages/all`)
            .then(res => setAllPackages(res?.data))
            .catch(error => console.log(error))

        axios.get(`https://bongo-traveler.vercel.app/wishlist/all?email=${user?.email}`)
            .then(res => setMyWishedData(res?.data))
            .catch(error => console.log(error))
    }, [reload]);


    return (
        <div className='mt-10'>

            {myWishedData.length > 0 ? myWishedData.map(item => <div key={item?._id} className='mb-5 shadow-xl'>
                <PackageCard
                    type='wishlist'
                    packageInfo={item}
                    packageDetails={allPackages?.find(eachPackage => eachPackage?.id == item?.packageId)}
                    reload={reload}
                    setReload={setReload}
                />
            </div>) : <EmptyPage message='You have No Packages Saved'/>}

        </div>
    );
};

export default MyWishlist;