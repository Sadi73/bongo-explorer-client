import React, { useEffect, useState } from 'react';
import Overview from './Overview';
import Packages from './Packages';
import MeetGuides from './MeetGuides';
import axios from 'axios';

const styles = {
    toggleBarItem: {
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 40px',
        margin: '3px',
        fontSize: '14px',
        fontWeight: '600'
    }
}

const TourTravel = () => {

    const [selectedView, setSelectedView] = useState('Overview');
    const [allPackages, setAllPackages] = useState([]);

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                setAllPackages(res?.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div className='md:w-[80%] mx-auto my-20'>
            <h1 className='text-3xl font-semibold text-center'>Tours And Travels</h1>


            <div style={{ background: 'white', paddingTop: '12px' }}>

                <div style={{ display: 'flex', maxWidth: '520px', margin: 'auto', border: '1px solid #BDBDBD', borderRadius: '5px', minHeight: '45px' }}>
                    <div style={{
                        ...styles.toggleBarItem,
                        border: selectedView === 'Overview' ? '1px solid #BDBDBD' : 'none',
                        color: selectedView === 'Overview' ? 'white' : '#828282',
                        background: selectedView === 'Overview' ? '#0F75BC' : 'white'
                    }}
                        onClick={() => setSelectedView('Overview')}
                    >Overview
                    </div>

                    <div style={{
                        ...styles.toggleBarItem,
                        border: selectedView === 'packages' ? '1px solid #BDBDBD' : 'none',
                        color: selectedView === 'packages' ? 'white' : '#828282',
                        background: selectedView === 'packages' ? '#0F75BC' : 'white'
                    }}
                        onClick={() => setSelectedView('packages')}>Our Packages
                    </div>

                    <div style={{
                        ...styles.toggleBarItem,
                        border: selectedView === 'guides' ? '1px solid #BDBDBD' : 'none',
                        color: selectedView === 'guides' ? 'white' : '#828282',
                        background: selectedView === 'guides' ? '#0F75BC' : 'white'
                    }}
                        onClick={() => setSelectedView('guides')}>Meet Our Guides
                    </div>

                </div>

                {selectedView === 'Overview' && <Overview />}
                {selectedView === 'packages' && <Packages allPackages={allPackages} />}
                {selectedView === 'guides' && <MeetGuides />}
            </div>

        </div>
    );
};

export default TourTravel;