import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-300 p-3 px-6 mt-7 mb-4 flex flex-col items-center md:flex-row md:justify-between ">
            <div>
                <p className="text-center mb-2 md:text-left text-sm">@2022 innolytics.</p>
                <p className="text-center mb-2 md:text-left  md:max-w-20 text-sm">powered by Growth Founder.</p>
                <p className="text-center mb-2 md:text-left md:justify-between text-sm">All rights reserved.</p>
            </div>

            <div>
                <p className="text-center mb-2">For questions dominique@growthfoundder.co</p>
            </div>

            <div className='flex gap-1'>
                <div className="w-10 h-10 bg-black rounded-full">  </div>
                <div className="w-10 h-10 bg-black rounded-full">  </div>
                <div className="w-10 h-10 bg-black rounded-full">  </div>
            </div>
        </footer>
    );
};

export default Footer;