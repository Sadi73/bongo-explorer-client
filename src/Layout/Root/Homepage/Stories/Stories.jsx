import React, { useEffect, useState } from 'react';
import './Stories.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Stories = () => {
    const [allStories, setAllStories] = useState([])

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/stories')
            .then(res => setAllStories(res?.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='w-[80%] mx-auto my-20 space-y-5'>
            <h1 className='text-3xl text-center'>Traveler Story</h1>

            <div className="container grid grid-cols-4">
                {allStories.slice(0, 8).map((story, index) => (
                    <div className="image-card" key={index}>
                        <img src={story?.tour_image} alt={`Image ${index + 1}`} />
                        <div className="overlay">{story.name}</div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center'>
                <Link className='text-teal-500 text-xl font-semibold' to='/story/all'>See All Stories</Link>
            </div>
        </div>
    );
};

export default Stories;