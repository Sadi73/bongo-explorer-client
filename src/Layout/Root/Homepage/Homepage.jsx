import React from 'react';
import Banner from './Banner/Banner';
import TourTravel from './TourAndTravel/TourTravel';
import TourType from './TourType/TourType';
import Stories from './Stories/Stories';

const Homepage = () => {
    return (
        <div>
            <Banner />

            <TourTravel />

            <TourType />

            <Stories />

        </div>
    );
};

export default Homepage;