import React from 'react';

const Overview = () => {
    return (
        <div className='video-wrapper w-full h-[500px] flex justify-center items-center mt-10'>

            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QNUSIOMb6vI?rel=0&modestbranding=1&controls=1&showinfo=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Overview;