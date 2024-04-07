"use client";

import React, { useEffect, useState } from 'react';

export default function Channels() {
    const [jsonData, setJsonData] = useState([]);
    const [blog, setBlog] = useState(true);
    const [whitepaper, setWhitepaper] = useState(false);
    const [podcast, setPodcast] = useState(false);
    const [webinars, setWebinars] = useState(false);
    const [isActive, setIsActive] = useState("blog")

    const handleBlog = () => {
        setBlog(true);
        setWhitepaper(false);
        setPodcast(false);
        setWebinars(false);
        setIsActive("blog")
    }

    const handleWhitePaper = () => {
        setBlog(false);
        setWhitepaper(true);
        setPodcast(false);
        setWebinars(false);
        setIsActive("whitePaper")
    }

    const handleWebinars = () => {
        setBlog(false);
        setWhitepaper(false);
        setPodcast(false);
        setWebinars(true);
        setIsActive("webinars")
    }

    const handlePodcast = () => {
        setBlog(false);
        setWhitepaper(false);
        setPodcast(true);
        setWebinars(false);
        setIsActive("podcast")
    }

    const fetchData = async () => {
        try {
            const res = await fetch("../api");
            const data = await res.json();
            setJsonData(data);
        } catch(error) {
            console.error("error fecting resourse", error)
        }
    } 
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className='mt-16 max-w-[1200px] flex flex-col items-center'>
            <ul id="ul" className="flex justify-between gap-4 bg-gray-200 p-4 rounded-lg w-full px-5">
                <li onClick={handleBlog} className={`${isActive === "blog" ? "opacity-100 font-bold" : "opacity-65"} `}>Blog</li>
                <li onClick={handleWhitePaper} className={isActive === "whitePaper" ? "opacity-100 font-bold" : "opacity-65"}>Whitepapers</li>
                <li onClick={handlePodcast} className={isActive === "podcast" ? "opacity-100 font-bold" : "opacity-65"}>Podcasts</li>
                <li onClick={handleWebinars} className={isActive === "webinars" ? "opacity-100 font-bold" : "opacity-65"}>Webinars</li>
            </ul>

            <div id='container' className="mt-14 md:grid md:grid-cols-3 md:gap-5">
            {
                jsonData.map((data, index) => (
                    <React.Fragment key={index}>

                        {blog && (
                            <div id="blog" className='bg-gray-200 p-4 rounded-lg mb-4'>
                                <div className='bg-gray-200 w-full h-80'></div>
                                <p className="mt-4">{data.channel.blog.date}</p>
                                <p className="mt-2 font-extrabold">{data.channel.blog.About}</p>
                            </div>
                        )}

                        {whitepaper && (
                            <div id='whitepaper' className='bg-gray-200 p-4 rounded-lg'>
                                <div className='bg-gray-200 w-full h-80'></div>
                                <p className="mt-4">{data.channel.whitepapers.date}</p>
                                <p className="mt-2 font-extrabold">{data.channel.whitepapers.About}</p>
                            </div>
                        )}

                        {podcast && (
                            <div id='podcast' className='bg-gray-200 p-4 rounded-lg'>
                                <div className='bg-gray-200 w-full h-80'></div>
                                <p className="mt-4">{data.channel.podcast.date}</p>
                                <p className="mt-2 font-extrabold">{data.channel.podcast.About}</p>
                            </div>
                        )}

                        {webinars && (
                            <div id='webinars' className='bg-gray-200 p-4 rounded-lg'>
                                <div className='bg-gray-200 w-full h-80'></div>
                                <p className="mt-4">{data.channel.webinars.date}</p>
                                <p className="mt-2 font-extrabold">{data.channel.webinars.About}</p>
                            </div>
                        )}
                    </React.Fragment>
                ))
            }
            
            </div>
            <button className='p-4 mx-auto bg-gray-200 rounded-lg hover:text-white hover:bg-black'>Load More</button>
        </section>
    );
};

