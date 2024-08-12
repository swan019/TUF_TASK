import React, { useContext, useState, useCallback } from 'react';
import "../App.css";
import { BannerContext } from '../Context/BannerContext';

const Dashboard = () => {
    const { banners, toggleVisibility, deleteBanner, setBanners, addBanner } = useContext(BannerContext);

    const [formData, setFormData] = useState({
        bannerVisible: false,
        description: '',
        timer: '',
        link: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        const timerValue = parseInt(formData.timer, 10);
        if (isNaN(timerValue) || timerValue <= 0) {
            alert("Please enter a valid number for the timer.");
            return;
        }

        const newBanner = {
            bannerVisible: formData.bannerVisible,
            description: formData.description,
            timer: timerValue,
            link: formData.link,
        };

        setBanners([...banners, newBanner]);
        addBanner(newBanner);

        setFormData({
            bannerVisible: false,
            description: '',
            timer: '',
            link: ''
        });
    }, [formData, banners, setBanners, addBanner]);

    return (
        <div className="background mt-[73px] flex-col gap-8 p-[20px]">
            <div className='w-[100vw] mx-auto h-3 text-center p-6 mb-[60px]'>
                <h2 className='text-2xl font-normal'>Banners Controls</h2>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-col sm:fle justify-between px-6 mt-[40px]'>
                <div className="w-[90vw] lg:w-[500px] form p-4  h-[700px] border-gray-300 rounded-md m-[50px]">
                    <form onSubmit={handleSubmit} className='p-4'>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="isvisible">Visible :</label>
                                <input
                                    type="checkbox"
                                    name="bannerVisible"
                                    id="isvisible"
                                    className='items-center'
                                    checked={formData.bannerVisible}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-between">
                                <label htmlFor="description">Description :</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    cols="30"
                                    rows="2"
                                    id="description"
                                    className="border border-gray-300 rounded px-2 py-1 bg-black w-full"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="timer">Timer :</label>
                                <input
                                    type="number"
                                    name="timer"
                                    id="timer"
                                    className="border border-gray-300 rounded px-2 py-1 bg-black"
                                    value={formData.timer}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="link">Link :</label>
                                <input
                                    type="text"
                                    name="link"
                                    id="link"
                                    className="border border-gray-300 rounded px-2 py-1 bg-black"
                                    value={formData.link}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className=" px-1 py-2 bg-blue-500 text-white rounded-md focus:outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="p-4 max-h-[500px] overflow-auto form-data w-[90vw] lg:w-auto mx-auto lg:mx-0">
                    {banners.map((banner, id) => (
                        <div key={id} className="border w-full lg:w-[450px] p-4 rounded-md mb-4 bg-gray-800">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold">{banner.description}</h3>
                                <div className='flex gap-4'>
                                    <input
                                        type="checkbox"
                                        checked={banner.bannerVisible}
                                        onChange={() => toggleVisibility(banner._id, banner.bannerVisible)}
                                        className="mr-2 p-7"
                                    />
                                    <button
                                        onClick={() => deleteBanner(banner._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p>Timer: {banner.timer} seconds</p>
                            <a href={banner.link} className="text-blue-500 underline">Visit Link</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
