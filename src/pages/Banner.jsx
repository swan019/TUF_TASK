import React, { useContext, useEffect, useState } from 'react';
import { BannerContext } from '../Context/BannerContext'; // Import the context
import '../App.css';

const Banner = () => {
    const { banners } = useContext(BannerContext); // Get banners from context

    return (
        <div className='banners-container'>
            {banners.map((banner, index) => {
                // Extract the timer value and create a state for each banner

                const [timer, setTimer] = useState(banner.timer);

                useEffect(() => {
                    if (timer <= 0) {
                        return;
                    }

                    const intervalId = setInterval(() => {
                        setTimer(prevTimer => prevTimer - 1);
                    }, 1000);

                    return () => clearInterval(intervalId);
                }, [timer]);

                const formatTime = () => {
                    const hours = Math.floor(timer / 3600);
                    const minutes = Math.floor((timer % 3600) / 60);
                    const seconds = timer % 60;

                    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                };

                const timeArray = formatTime().split(':');

                return (
                    banner.bannerVisible && (
                        <div key={index} className='banner '>
                            <div className='banner-flex flex flex-col justify-around items-start px-3 '>
                                <div className='flex'>
                                    <div>
                                        <h1 className='text-[1rem] font-medium text-white-500'>
                                            {banner.description}
                                        </h1>
                                    </div>
                                </div>

                                <div className=''>
                                    <a href={banner.link}>
                                        <button className='px-4 py-2 bg-[#D41F0F] text-white rounded-md'>Explore</button>
                                    </a>
                                </div>
                            </div>

                            <div className='my-auto flex pb-6 '>
                                <div className=''>
                                    <div className='layer flex-col relative z-1 '>
                                        <div className='w-[80%] bg-[#626060] relative right-[-60px] flex items-center justify-around  gap-[-90px] mx-auto rounded-md  top-1 py-1'>
                                            {timeArray.map((timeSegment, index) => (
                                                <div key={index} className='flex gap-3'>
                                                    {timeSegment.split('').map((digit, i) => (
                                                        <div key={i} className='w-[30px] h-[40px] bg-[#100F0F] digit rounded-[10px] text-xl font-semibold flex items-center justify-center'>
                                                            {digit}
                                                        </div>
                                                    ))}
                                                    {index < timeArray.length - 1 && (
                                                        <div className='flex-col'>
                                                            <div className='w-[10px] h-[10px] bg-[#100F0F] rounded-lg mb-[10px] ml-[1px] mt-1'></div>
                                                            <div className='w-[10px] h-[10px] bg-[#100F0F] rounded-lg mb-[10px] ml-[1px] mt-1'></div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default Banner;
