

import React from 'react';

const Banner = () => {
    return (
        <div className='gap-4 bg-cover bg-[url("https://i.ibb.co/TDJdXyJB/chef-table-bg.webp")] bg-center rounded-4xl w-full h-screen text-amber-50 flex text-center flex-col items-center justify-center space-y-5'>
            <h1 className='font-bold text-5xl'> Discover an exceptional cooking <br/> class tailored for you!</h1>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an 
                exceptionally well world-class Programmer.</p>

        <div className='space-x-5'>
            <button className='bg-blue-600 font-semibold px-5 py-2 rounded-3xl hover:bg-blue-700'>Explore Now</button>
            <button className="px-5 py-2 border-2 border-gray-300 rounded-3xl font-semibold rounded hover:bg-amber-100">Our Feedback</button>
        </div>
        </div>
        
    );
};

export default Banner;