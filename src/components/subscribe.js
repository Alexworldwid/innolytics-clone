import React from 'react';

export default function subscribe() {
    return (
       <section className='flex flex-col items-center'>
          <h2 className='text-3xl text-center mb-7 md:text-6xl md:font-bold'>Subscribe for Update</h2>
          <p className="text-center max-w-[500px] text-xl opacity-70 font-light mb-7 md:max-w-[400px]">Stay up-to-date with updates, articles, free design assets, and other cool stuff. No spam, we promise.</p>
          <div className='flex justify-between w-full max-w-[600px]'>
            <input className="bg-gray-200 block w-full md:p-3"  type="email" pattern="" required placeholder='Enter your mail' />
            <button className='bg-gray-200 p-2 rounded-lg opacity-75 hover:bg-gray-400'>SignUp</button>
          </div>
       </section>
    );
};

